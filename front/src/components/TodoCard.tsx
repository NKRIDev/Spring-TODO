import { Card, CardContent, Typography, Box, Checkbox, CircularProgress } from "@mui/material"
import type { Todo } from "../models/todoModel"
import { useState } from "react"

/*
Card props
*/
type Props = {
    todo: Todo,

    updateTodo : (todo: Todo) => Promise<Todo | null>,
    loadingTodoId : number | null,
}

/*
Display todo
*/
export const TodoCard = ({ todo, updateTodo,  loadingTodoId}: Props) => {
    const [todoState, setTodoState] = useState<Todo>(todo);

    //Loading update
    const [loading, setLoading] = useState<number | null>(loadingTodoId);

    /*
    Change in the state of the todo
    */
    const handleCompleted = async (event : React.ChangeEvent<HTMLInputElement>) => {
        const newTodo: Todo = {...todoState, completed: event.target.checked};

        const update = await updateTodo(newTodo);

        if(update){
            setTodoState(update);
        }
    }

    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" component="div">
                        {todoState.title}
                    </Typography>

                    {loading === todo.id ? 
                        (<CircularProgress/>) 
                    : 
                        ( <Checkbox checked={todoState.completed} onChange={handleCompleted} />)
                    }
                    
                </Box>
                
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {todoState.description}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    {new Date(todoState.date).toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    )
}
