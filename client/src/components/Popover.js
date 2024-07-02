import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function MouseOverPopover(props) {

    const open = Boolean(props.anchorEl);

    const handlePopoverClose = () => {
        props.setAnchorEl(null);
    };

    return (
        <div>
            <Popover
                id="mouse-over-popover"
                sx={{
                pointerEvents: 'none',
                }}
                open={open}
                anchorEl={props.anchorEl}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>Tarefas de Prioridade {props.prioridade}</Typography>
            </Popover>
        </div>
    );
}