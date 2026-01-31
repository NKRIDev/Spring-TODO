import { Card } from "@mui/material";
import type { Todo } from "../models/todoModel";
import { TodoCard } from "./TodoCard";
import { useEffect, useState } from "react";

/*
Component props
*/
type Props = {
    todos : Todo[],
    titleFilter: string | null
}

/*
Displaying tasks on the page
*/
export const TodoList = ({todos, titleFilter} : Props) => {
    const [filter, setFilter] = useState<string | null>(titleFilter);

    /*
    Update filter
    */
    useEffect(() => {
        setFilter(titleFilter);
    }, [titleFilter]);

    return(
        <div className="space-y-5">
            <div className="flex items-start flex-col space-y-2">
                <h3>Tâche en cours</h3>
                <ul className="grid grid-cols-3 gap-2">
                    {
                        todos
                        .filter((todo) => 
                            !todo.isCompleted
                            && (!filter || todo.title.toLowerCase().includes(filter.toLowerCase()))
                        )
                        .map((todo) => 
                            <TodoCard key={todo.id} todo={todo}/>
                        )
                    }
                </ul>
            </div>

            <div className="flex items-start flex-col space-y-2">
                <h3>Tâche terminé</h3>
                <ul className="grid grid-cols-3 gap-2">
                    {
                        todos
                        .filter((todo) => 
                            todo.isCompleted
                            && (!filter || todo.title.toLowerCase().includes(filter.toLowerCase()))
                        )
                        .map((todo) => 
                            <TodoCard key={todo.id} todo={todo}/>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};