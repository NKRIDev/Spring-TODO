import { CircularProgress, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { TodoHeader } from "./components/TodoHeader";
import { useState } from "react";
import type { Todo } from "./models/todoModel";
import { TodoList } from "./components/TodoList";
import { mockTodos } from "./mocks/mockTodos";
import { CreateTodo } from "./components/modals/CreateTodo";
import { useTodo } from "./composables/todoHook";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  //Todos
  const {todos, newTodo, editTodo, deleteTodo, error, loading, loadingTodoId} = useTodo();

  //Search bar filter
  const [titleFilter, setTitleFilter] = useState<string | null>(null);

  //Manage modal to create todo
  const [createOpen, setCreateOpen] = useState<boolean>(false);

  const handleOpen = () =>{
    setCreateOpen(true);
  };

  const handleClose = () => {
    setCreateOpen(false);
  };

  /*
  Create a todo
  */
  const handleCreate = (title: string, description: string) => {
    newTodo(title, description);
    handleClose();
  }

  /*
  Checked if the data is being loaded
  */
  if (loading){
    return <CircularProgress/>;
  }

  /*
  Checked error
  */
  if(error){
    return <p>Erreur : {error}</p>
  }

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>

        <div className="flex flex-col space-y-10 items-center justify-center h-screen">

          {/*Modal to create a new todo */}
          <CreateTodo
            open={createOpen} 
            onClose={handleClose}
            onCreate={handleCreate}
          />

          {/*Search Bar */}
          <div className="sticky top-0 z-10 pt-10">
            <TodoHeader 
              todos={todos} 
              onSearch={(value: string) => setTitleFilter(value)} 
              onOpen={handleOpen}
            />
          </div>
          
          {/* Todo arrays */}
          <div className="flex-1 overflow-auto p-4">
            <TodoList todos={todos} titleFilter={titleFilter} updateTodo={editTodo} deleteTodo={deleteTodo} loadingTodoId={loadingTodoId}/>
          </div>

        </div>
      </ThemeProvider>
    </>
  )
}

export default App
