package com.example.app.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.example.app.dto.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(TaskAlreadyExistsException.class)
    public ErrorResponse handlerTaskAlreadyExistsException(TaskAlreadyExistsException ex){
        return new ErrorResponse(HttpStatus.CONFLICT.value(),ex.getMessage());
    }

    @ExceptionHandler(TaskNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handlerTaskNotFoundException(TaskNotFoundException ex){
//        ProblemDetail response= ProblemDetail.forStatus(HttpStatus.NOT_FOUND);
//        response.setDetail(ex.getMessage());
//        return response;
        return new ErrorResponse(HttpStatus.NOT_FOUND.value(),ex.getMessage());
    }
}
