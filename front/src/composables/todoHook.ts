import { useEffect, useState } from "react"
import type { Todo } from "../models/todoModel";
import { createTodo, getTodos, removeTodo, updateTodo } from "../services/todoService";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //loading update
    const [loadingTodoId, setLodingTodoId] = useState<number | null>(null);

    /*
    Retrieve the to-do list
    */
    const fetchTodos = async () => {
        try{
            setLoading(true);
            setError(null);

            const response = await getTodos();
            setTodos(response.data);
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
    const newTodo = async (title: string, description: string) : Promise<Todo | null>  => {
        try{
            const response = await createTodo(title, description);
            if(response.data){
                setTodos([...todos, response.data]);
                return response.data;
            }
        }
        catch(err: any){
            setError(err.response.data ? err.response.data : "Une erreur est survenue lors de la création de la tache.");
        }

        return null;
    };

    /*
    Update a todo
    */
    const editTodo = async (todo : Todo) : Promise<Todo | null> => {
        try{
            setLodingTodoId(todo.id);

            const response = await updateTodo(todo);
            if(response.data){
                setTodos(prev =>
                    prev.map((t) => t.id === response.data.id ? response.data : t)
                );

                return response.data;
            }
        }
        catch(err : any){
            setError(err.response.data ? err.response.data : "Une erreur est survenue lors de la modification de la tache.");
        }
        finally{
            setLodingTodoId(null);
        }

        return null;
    };
    
    /*
    Delete a todo
    */
    const deleteTodo = async (todoId : number) => {
        try{
            setLodingTodoId(todoId);

            const response = await removeTodo(todoId);
            if(response){
                setTodos(prev =>
                    prev.filter((todo) => todo.id !== todoId)
                );
            }
        }
        catch(err : any){
            setError(err.response.data ? err.response.data : "Une erreur est survenue lors de la suppression de la tache.");
        }
        finally{
            setLodingTodoId(null);
        }
    };

    /*
    Update applicaiton
    */
    useEffect(() => {
        fetchTodos();
    }, []);

    return {todos, newTodo, editTodo, deleteTodo, fetchTodos, loading, loadingTodoId, error}
}