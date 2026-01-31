import { Card, CardContent, Typography, Box, Checkbox } from "@mui/material"
import type { Todo } from "../models/todoModel"
import { useState } from "react"

/*
Card props
*/
type Props = {
    todo: Todo
}

/*
Display todo
*/
export const TodoCard = ({ todo }: Props) => {
    const [todoState, setTodoState] = useState<Todo>(todo);

    /*
    Change in the state of the todo
    */
    const handleCompleted = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTodoState(
            {
                ...todoState,
                isCompleted: event.target.checked
            }
        );

        console.log(todoState);
    }

    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" component="div">
                        {todoState.title}
                    </Typography>
                    <Checkbox checked={todoState.isCompleted} onChange={handleCompleted} />
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
