import * as React from 'react'
import { Box, Typography, Modal, TextField, Button, InputLabel, MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import Axios from 'axios'

const style = {
    dialog:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(7.1px)',
        border: '1px solid #90caf9',
        outline: 'none',
        padding: 4,
        color: '#90caf9',
    },
    input:{
        marginBlock: '10px',
    },
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function FormDialog(props) {

    const [tarefa, setTarefa] = useState({
        titulo: props.titulo,
        descricao: props.descricao,
        data: props.data,
        prioridade: props.prioridade,
        status: props.status,
    })

    const handleTarefa = (value) => {
        setTarefa((prevValues) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }))
    }

    const handleInsert = async (e) => {
        e.preventDefault()
        try{
            const requisicao = await Axios.post('http://localhost:3001/tarefa/', tarefa)

            if(requisicao.status === 200) console.log(requisicao.data)

        } catch (err){
            if(err.response) console.log(`Erro: ${err.response.data}`)
        }
        window.location.reload()
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try{
            const requisicao = await Axios.patch(`http://localhost:3001/tarefa/${props.id}`, tarefa)

            if(requisicao.status === 200) console.log(requisicao.data)

        } catch (err){
            if(err.response) console.log(`Erro: ${err.response.data}`)
        }
        window.location.reload()
    }

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            
        <Modal open={props.open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style.dialog}>
                <Typography id="modal-modal-title" variant="h6" component="h2"> Criação de Tarefas</Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}> Preencha todos os campos! </Typography>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-required"
                    name="titulo"
                    label="Titulo da tarefa"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={handleTarefa}
                    sx={style.input}
                    color='primary'
                    defaultValue={props.titulo}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={4}
                    name="descricao"
                    label="Descrição da tarefa"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={handleTarefa}
                    sx={style.input}
                    color='primary'
                    defaultValue={props.descricao}
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="Prioridade"
                        onChange={handleTarefa}
                        name='prioridade'
                        color="primary"
                        sx={style}
                        defaultValue={props.prioridade}
                    >
                        <MenuItem value='Baixa'>Baixa</MenuItem>
                        <MenuItem value='Media'>Media</MenuItem>
                        <MenuItem value='Alta'>Alta</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-disabled"
                    disabled
                    name="status"
                    label="A Fazer"
                    type="text"
                    fullWidth
                    variant="outlined"
                    onChange={handleTarefa}
                    sx={style.input}
                    color='primary'
                    defaultValue={props.status}
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-required"
                    name="data"
                    type="date"
                    fullWidth
                    variant="outlined"
                    onChange={handleTarefa}
                    sx={style.input}
                    color='primary'
                    defaultValue={props.data}
                />
                <Button onClick={props.edit === '1' ? handleUpdate : handleInsert} variant="outlined" color='primary'>{props.edit === '1' ? 'Editar' : 'Criar'}</Button>
            </Box>
      </Modal>
      </ThemeProvider>
    );
}