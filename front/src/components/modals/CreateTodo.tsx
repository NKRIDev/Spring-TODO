import { Box, Button, Modal, TextField, Typography, useTheme } from "@mui/material";
import { useTodo } from "../../composables/todoHook";
import { useState } from "react";

/*
Components todo
*/
type Props = {
    onClose : () => void,
    open : boolean,
    onCreate : (title : string, description : string) => void
}

/*
Modal to create todo
*/
export const CreateTodo = ({onClose, open, onCreate} : Props) => {
    //Application theme
    const theme = useTheme();

    //Form data
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    /*
    Create new todo
    */
    const handleSubmit = (event: React.FormEvent) => {
        event?.preventDefault();
        onCreate(title, description);
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
                    <TextField 
                        id="outlined-basic" 
                        label="Titre" 
                        variant="outlined" 
                        required={true} 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextField 
                        id="outlined-basic" 
                        label="Description" 
                        variant="outlined" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Button variant="contained" type="submit">Créer</Button>
                    <Button variant="outlined" onClick={handleClose}>Retour</Button>
                </form>
            </div>
        </Modal>
    )
};