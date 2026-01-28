package fr.nkri.todo.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "todos")
@Getter
@Setter
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 500)
    private String title;

    @Column(length = 500)
    private String description;

    private long date;

    private boolean isCompleted;

    public Todo(){}

    /**
     * Task to do
     * @param title task title
     * @param description task description
     */
    public Todo(final String title, final String description) {
        this.title = title;
        this.description = description;
        this.date = System.currentTimeMillis();
        this.isCompleted = false;
    }
}
