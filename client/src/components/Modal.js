import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = {
  Baixa:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid #C1D8EB',
    outline: 'none',
    padding: 4,
  },
  Media:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid #92BBDD',
    outline: 'none',
    padding: 4,
  },
  Alta:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid #639ECF',
    outline: 'none',
    padding: 4,
  },
  EmAndamento:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid #eaba6b',
    outline: 'none',
    padding: 4,
  },
  Finalizada:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(7.1px)',
    border: '1px solid #a7d3a6',
    outline: 'none',
    padding: 4,
  },
}

export default function BasicModal(props) {
  
  const handleClose = () => props.setOpen(false);

  let style

  switch(props.status){
      case 'A Fazer': 
          if(props.prioridade === 'Baixa') style = styles.Baixa
          else if(props.prioridade === 'Media') style = styles.Media
          else if(props.prioridade === 'Alta') style = styles.Alta
          break
      case 'Em Andamento':
        style = styles.EmAndamento
        break
      case 'Finalizada':
        style = styles.Finalizada
        break
      default:
        break
    }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#D7DDEA'}}>
            {props.titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#D7DDEA' }}>
            {props.descricao}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#D7DDEA' }}>
            {props.status} - {props.prioridade} - {props.data}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}