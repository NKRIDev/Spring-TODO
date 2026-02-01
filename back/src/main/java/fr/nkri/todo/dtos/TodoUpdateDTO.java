package fr.nkri.todo.dtos;

public record TodoUpdateDTO (
        long id,
        String title,
        String description,
        boolean completed
){
}
