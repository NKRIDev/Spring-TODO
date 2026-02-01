package fr.nkri.todo.services;

import fr.nkri.todo.dtos.TodoCreateDTO;
import fr.nkri.todo.dtos.TodoUpdateDTO;
import fr.nkri.todo.exceptions.TodoException;
import fr.nkri.todo.models.Todo;
import fr.nkri.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(final TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    /**
     * Retrieve all the tasks
     * @return task arrays
     */
    public List<Todo> getTodos(){
        return this.todoRepository.findAll();
    }

    /**
     * Retrieve a task by its ID
     * @param id task id
     * @return an Optinal containing the corresponding task
     */
    public Optional<Todo> getTodoById(final Long id){
        return this.todoRepository.findById(id);
    }

    /**
     * Create a task
     * @param dto immutable object for creating a task (title, description)
     * @return a newTask
     */
    public Todo createTodo(final TodoCreateDTO dto) {
        if(this.todoRepository.existsByTitle(dto.title())){
            throw new TodoException("La tâche existe déjà");
        }

        final Todo newTodo = new Todo(dto.title(), dto.description());
        return this.todoRepository.save(newTodo);
    }

    /**
     * Updates a task
     * @param dto Immutable object for modifying a task
     * @return update todo
     */
    public Todo updateTodo(final TodoUpdateDTO dto) {
        final Optional<Todo> todo = this.todoRepository.findById(dto.id());

        if(!todo.isPresent()){
            throw new TodoException("La tâche n'existe pas !");
        }

        todo.get().setCompleted(dto.completed());
        todo.get().setTitle(dto.title());
        todo.get().setDescription(dto.description());
        this.todoRepository.save(todo.get());

        return todo.get();
    }

    /**
     * Remove a task
     * @param id task id
     */
    public void deleteTodo(final Long id) {
        if(!this.todoRepository.existsById(id)){
            throw new TodoException("La tâche n'existe pas !");
        }
        this.todoRepository.deleteById(id);
    }
}
