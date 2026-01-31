import { Autocomplete, Button, TextField } from "@mui/material";
import type { Todo } from "../models/todoModel";

/**
 * Component props
 */
type Props = {
    todos : Todo[],
    onSearch : (value: string) => void
    onOpen : () => void
}

/*
Todo header contains search bar and create button
*/
export const TodoHeader = ({todos, onSearch, onOpen} : Props) => {

    /**
     * The user types in the search bar, 
     * which redirects to the parent
     * @param newValue value that the user types
     */
    const handleSearch = (newValue: string) => {
        onSearch(newValue);
    };

    /*
    Create a new todo
    */
    const handleCreate = () => {
        onOpen();
    };

    return(
        <div className="flex space-x-5">
            <Autocomplete
                sx={{width: 300}}
                id="todo-search"
                freeSolo
                options={todos.map((todo) => todo.title)}
                onInputChange={(event, newInputValue) => handleSearch(newInputValue)}
                renderInput={(params) => <TextField {...params} label="Chercher une tâche" />}
            />
            <Button variant="contained" onClick={handleCreate}>Créer</Button>
        </div>
    );
};
