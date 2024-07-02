import './css/ListTarefas.css'
import BasicModal from './Modal'
import FormDialog from './Dialog'
import { FaAngleRight } from "react-icons/fa6"
import { FaXmark } from "react-icons/fa6"
import { FaCheck } from "react-icons/fa6"
import { FaPen } from "react-icons/fa6"
import { useState } from 'react'
import Axios from 'axios'


const ListTarefas = (props) => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)

    const [openDialog, setOpenDialog] = useState(false)
    const handleOpenDialog = () => setOpenDialog(true)

    const handleUpdateStatus = async (id, status) => {
        try{
            const requisicao = await Axios.patch(`http://localhost:3001/tarefa/${id}/status`, { status })

            if(requisicao.status === 200) window.location.reload()

        } catch (err){
            if(err.response) alert(`Erro: ${err.response.data}`)
        }
    }

    const handleDelete = async (id) => {
        console.log('Tarefa #' + id)
        try{
            const requisicao = await Axios.delete(`http://localhost:3001/tarefa/${id}`)

            if(requisicao.status === 200) window.location.reload()
        } catch (err){
            if(err.response) alert(err.response.data)
        }
        window.location.reload()
    }
    
    return(
        <>
            <FormDialog open={openDialog} setOpen={setOpenDialog} id={props.id} titulo={props.titulo} descricao={props.descricao} prioridade={props.prioridade} status={props.status} data={props.data} edit='1'/>
            <BasicModal open={open} setOpen={setOpen} id={props.id} titulo={props.titulo} descricao={props.descricao} prioridade={props.prioridade} status={props.status} data={props.data}/>
            <div className={`tarefa-conteudo ${props.prioridade}-${props.status}`} >
                <p className='tarefa-titulo' onClick={() => handleOpen()}>{props.titulo}</p>
                <p className='tarefa-descricao'>{props.descricao}</p>
                <p className='tarefa-status'>{props.status}</p>
                <p className='tarefa-data'>{props.data}</p>
                <div className='tarefa-btn'>
                    { props.status === 'A Fazer' && (
                        <button className='tarefa-btn-btn' onClick={() => handleUpdateStatus(props.id, 'Em Andamento')}>
                            <span className='btn-hover'>Iniciar</span>
                            <FaAngleRight />
                        </button>
                    )}
                    { props.status !== 'Finalizada' && (
                        <>
                            <button className='tarefa-btn-btn'>
                                <span className='btn-hover' onClick={() => handleUpdateStatus(props.id, 'Finalizada')}>Finalizar</span>
                                <FaCheck />
                            </button>
                            <button className='tarefa-btn-btn'>
                                <span className='btn-hover' onClick={() => handleOpenDialog()}>Editar</span>
                                <FaPen />
                            </button>
                        </>
                    )}
                    <button className='tarefa-btn-btn' onClick={(e) => { e.stopPropagation(); handleDelete(props.id);}}>
                        <span className='btn-hover'>Excluir</span>
                        <FaXmark />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListTarefas