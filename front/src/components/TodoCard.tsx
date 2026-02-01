import { Card, CardContent, Typography, Box, Checkbox, CircularProgress, Button } from "@mui/material"
import type { Todo } from "../models/todoModel"
import { useState } from "react"

/*
Card props
*/
type Props = {
    todo: Todo,

    updateTodo : (todo: Todo) => Promise<Todo | null>,
    loadingTodoId : number | null,
    
    deleteTodo : (id : number) => void
}

/*
Display todo
*/
export const TodoCard = ({ todo, updateTodo, deleteTodo, loadingTodoId}: Props) => {
    const [todoState, setTodoState] = useState<Todo>(todo);

    /*
    Change in the state of the todo
    */
    const handleCompleted = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const newTodo: Todo = {...todoState, completed: event.target.checked};

        const update = await updateTodo(newTodo);

        if(update){
            setTodoState(update);
        }
    };

    /**
     * Delete a todo
     */
    const handleDelete = () => {
        deleteTodo(todoState.id);
    };

    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" component="div">
                        {todoState.title}
                    </Typography>
                    
                    <Checkbox checked={todoState.completed} onChange={handleCompleted} />

                    <Button variant="outlined" onClick={handleDelete}>Supprimer</Button>
                </Box>
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {todoState.description}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    {new Date(todoState.date).toLocaleDateString()}
                </Typography>

                {
                    //Loading circle
                    loadingTodoId === todo.id && <CircularProgress size={24}/>
                }
            </CardContent>
        </Card>
    )
}
