package fr.nkri.todo.exceptions;

public class TodoException extends RuntimeException {

    /**
     * Exception for the todo section
     * @param message error message
     */
    public TodoException(final String message) {
        super(message);
    }
}