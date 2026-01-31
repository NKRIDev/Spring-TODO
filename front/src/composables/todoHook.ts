import { useEffect, useState } from "react"
import type { Todo } from "../models/todoModel";
import { createTodo, getTodos } from "../services/todoService";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    /*
    Retrieve the to-do list
    */
    const fetchTodos = async () => {
        try{
            setLoading(true);
            setError(null);

            const response = await getTodos();
            setTodos(Array.isArray(response.data) ? response.data : []);
            console.log(todos);
        }
        catch(err){
            setError("Une erreur est survenue lors de la récupération des données.");
            console.error(err);
        }
        finally{
            setLoading(false);
        }
    };

    /*
    Create a todo
    */
    const newTodo = async (title: string, description: string) : Todo => {
        try{
            const response = await createTodo(title, description);
            if(response.data){
                console.log(response.data);
            }
        }
        catch(err: any){
            setError(err.response.data ? err.response.data : "Une erreur est survenue lors de la création de la tache.");
        }
    }

    /*
    Update applicaiton
    */
    useEffect(() => {
        fetchTodos();
    }, []);

    return {todos, newTodo, fetchTodos, loading, error}
}