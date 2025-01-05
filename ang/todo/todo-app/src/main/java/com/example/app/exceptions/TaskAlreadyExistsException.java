package com.example.app.exceptions;

public class TaskAlreadyExistsException extends RuntimeException {
    public TaskAlreadyExistsException(String msg) {
         super(msg);
    }
}
