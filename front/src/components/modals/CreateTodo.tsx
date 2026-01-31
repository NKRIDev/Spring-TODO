import { Box, Button, Modal, TextField, Typography, useTheme } from "@mui/material";

/*
Components todo
*/
type Props = {
    onClose : () => void
    open : boolean
}

/*
Modal to create todo
*/
export const CreateTodo = ({onClose, open} : Props) => {
    //Application theme
    const theme = useTheme();

    /*
    Create new todo
    */
    const handleSubmit = () => {
        console.log("send !");
    };

    /*
    Close modal
    */
    const handleClose = () => {
        onClose();
    };

    return(
        <Modal
            className="flex items-center justify-center"
            open={open}
            onClose={handleClose}
        >
            <div style={{backgroundColor: theme.palette.background.paper}} className="rounded-lg p-5 space-y-10">
                <div>
                    <Typography variant="h6" component="h2">
                        Créer une tâche
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Remplis les champs ci-dessous pour créer une nouvelle tâche dans ta liste.
                    </Typography>
                </div>

                <form action="" onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <TextField id="outlined-basic" label="Titre" variant="outlined" required={true}/>
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <Button variant="contained" type="submit">Créer</Button>
                    <Button variant="outlined" onClick={handleClose}>Retour</Button>
                </form>
            </div>
        </Modal>
    )
};