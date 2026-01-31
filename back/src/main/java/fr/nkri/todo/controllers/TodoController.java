package fr.nkri.todo.controllers;

import fr.nkri.todo.dtos.TodoCreateDTO;
import fr.nkri.todo.dtos.TodoUpdateDTO;
import fr.nkri.todo.models.Todo;
import fr.nkri.todo.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
FIX : CORS
 */
@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(final TodoService todoService) {
        this.todoService = todoService;
    }

    /**
     * GET /api/todos - retrieve the task list
     * @return a list containing the tasks
     */
    @GetMapping()
    public List<Todo> getTodos(){
        return this.todoService.getTodos();
    }

    /**
     * GET /api/todos/{id} - retrieves a task using its ID
     * @return a task
     */
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Long id){
        final Optional<Todo> todo = this.todoService.getTodoById(id);

        if(!todo.isPresent()){
            return  ResponseEntity.notFound().build();
        }

        return ResponseEntity.of(todo);
    }

    /**
     * POST /api/todos - create a task
     * @return any type of object: either a stain or an error
     */
    @PostMapping()
    public ResponseEntity<?> createTodo(@RequestBody TodoCreateDTO dto){
        try{
            return ResponseEntity.status(HttpStatus.CREATED).body(this.todoService.createTodo(dto));
        }
        catch (final RuntimeException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    /**
     * PUT /api/todos - update a task
     * @return response http
     */
    @PutMapping()
    public ResponseEntity updateTodo(@RequestBody TodoUpdateDTO dto){
        try{
            return ResponseEntity.ok(this.todoService.updateTodo(dto));
        }
        catch (final RuntimeException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    /**
     * DELETE /api/todos - delete a task
     * @return any type of object: either a stain or an error
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id){
        try{
            this.todoService.deleteTodo(id);
            return ResponseEntity.noContent().build();
        }
        catch (final RuntimeException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
