package fr.nkri.todo.repository;

import fr.nkri.todo.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    /**
     * Check if a stain exists
     * @param title task name
     * @return a boolean
     */
    boolean existsByTitle(final String title);

    /**
     * Retrieve a task using its titre
     * @param title task title
     * @return a task
     */
    Todo findByTitle(final String title);
}
