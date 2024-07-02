import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ListTarefas from './ListTarefas'
import './css/Tarefas.css'
import { FaPlus } from "react-icons/fa6"
import { FaInfo } from "react-icons/fa6"
import MouseOverPopover from './Popover'
import FormDialog from './Dialog'

const Tarefas = () => {
    const [tarefas, setTarefas] = useState({ baixa: [], media: [], alta: [] })
    const [tarefaStatus, setTarefaStatus] = useState({ em_Andamento: [], finalizada: [] })

    useEffect(() => {
        Axios.get('http://localhost:3001/tarefa/prioridade').then((response) => {
            setTarefas(response.data)
        })
        Axios.get('http://localhost:3001/tarefa/status').then((response) => {
            setTarefaStatus(response.data)
        })
    }, [])

    const [prioridade, setPrioridade] = useState()
    const [anchorEl, setAnchorEl] = useState(null)
    const handlePopoverOpenBaixa = (event) => {
        setAnchorEl(event.currentTarget)
        setPrioridade('Baixa')
    }
    const handlePopoverOpenMedia = (event) => {
        setAnchorEl(event.currentTarget)
        setPrioridade('Media')
    }
    const handlePopoverOpenAlta = (event) => {
        setAnchorEl(event.currentTarget)
        setPrioridade('Alta')
    }
    const handlePopoverClose = () => setAnchorEl(null)
    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true)
    

    return (
        <div className='content-tarefas'>
            <FormDialog open={open} setOpen={setOpen} edit='0' status='A Fazer'/>
            <MouseOverPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} prioridade={prioridade}/>
            <div className='tarefa-sep'>
                <h1 className='title-a-fazer'>Tarefas a Fazer</h1>
                <div className='content-tarefas-prioridade'>
                    <div className='tarefa-prioridade alta'>
                        <div className='tarefa-bar'>
                            <button className='btn-add' onClick={handleClickOpen}><FaPlus /></button>
                            <button className='btn-inf' onMouseEnter={handlePopoverOpenAlta} onMouseLeave={handlePopoverClose}><FaInfo /></button>
                        </div>
                        {tarefas.alta.map(tarefa => (
                            <ListTarefas 
                                tarefas={tarefas} 
                                setTarefas={setTarefas} 
                                key={tarefa.id}
                                id={tarefa.id}
                                titulo={tarefa.titulo} 
                                descricao={tarefa.descricao} 
                                prioridade={tarefa.prioridade}
                                status={tarefa.status}
                                data={tarefa.data}
                            />
                        ))}
                    </div>
                    <div className='tarefa-prioridade media'>
                        <div className='tarefa-bar'>
                            <button className='btn-add' onClick={handleClickOpen}><FaPlus /></button>
                            <button className='btn-inf' onMouseEnter={handlePopoverOpenMedia} onMouseLeave={handlePopoverClose}><FaInfo /></button>
                        </div>
                        {tarefas.media.map(tarefa => (
                            <ListTarefas 
                                tarefas={tarefas} 
                                setTarefas={setTarefas} 
                                key={tarefa.id} 
                                id={tarefa.id}
                                titulo={tarefa.titulo} 
                                descricao={tarefa.descricao} 
                                prioridade={tarefa.prioridade}
                                status={tarefa.status}
                                data={tarefa.data}
                            />
                        ))}
                    </div>
                    <div className='tarefa-prioridade baixa'>
                        <div className='tarefa-bar'>
                            <button className='btn-add' onClick={handleClickOpen}><FaPlus /></button>
                            <button className='btn-inf' onMouseEnter={handlePopoverOpenBaixa} onMouseLeave={handlePopoverClose}><FaInfo /></button>
                        </div>
                        {tarefas.baixa.map(tarefa => (
                            <ListTarefas 
                                tarefas={tarefas} 
                                setTarefas={setTarefas} 
                                key={tarefa.id} 
                                id={tarefa.id}
                                titulo={tarefa.titulo} 
                                descricao={tarefa.descricao} 
                                prioridade={tarefa.prioridade}
                                status={tarefa.status}
                                data={tarefa.data}
                            />
                        ))}
                    </div>
                </div> 
            </div>
            <div className='tarefa-sep'>
                <h1 className='title-em-andamento'>Tarefas em Andamento</h1>
                <div className='tarefa-em-andamento'>
                    <div className='tarefa-bar'></div>
                    {tarefaStatus.em_Andamento.map(tarefa => (
                        <ListTarefas 
                            tarefas={tarefas} 
                            setTarefas={setTarefas} 
                            key={tarefa.id} 
                            id={tarefa.id}
                            titulo={tarefa.titulo} 
                            descricao={tarefa.descricao} 
                            prioridade={tarefa.prioridade}
                            status={tarefa.status}
                            data={tarefa.data}
                        />
                    ))}
                </div>
            </div>
            <div className='tarefa-sep'>
                <h1 className='title-finalizada'>Tarefas Finalizadas</h1>
                <div className='tarefa-finalizada'>
                    <div className='tarefa-bar'></div>
                    {tarefaStatus.finalizada.map(tarefa => (
                        <ListTarefas 
                            tarefas={tarefas} 
                            setTarefas={setTarefas} 
                            key={tarefa.id} 
                            id={tarefa.id}
                            titulo={tarefa.titulo} 
                            descricao={tarefa.descricao} 
                            prioridade={tarefa.prioridade}
                            status={tarefa.status}
                            data={tarefa.data}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Tarefas;