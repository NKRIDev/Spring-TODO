package fr.nkri.todo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/*
Listen and handle general exceptions defined in the class
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Global Exception runtime
     * @param e exception
     * @return ResponseEntity to display
     */
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleException(final RuntimeException e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur interne du serveur");
    }

    /**
     * TodoException runtime
     * @param e todo exception
     * @return ResponseEntity to display
     */
    @ExceptionHandler(TodoException.class)
    public ResponseEntity<?> handleException(final TodoException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
