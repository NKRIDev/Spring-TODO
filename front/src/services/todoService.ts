import type { Todo } from "../models/todoModel";
import { api } from "./axios";

/*
retrieve the to-do list
*/
export const getTodos = () => api.get<Todo[]>("/api/todos");

/*
create a todo
*/
export const createTodo = (title : string, description : string) => {
    return api.post("/api/todos", {title, description});
}