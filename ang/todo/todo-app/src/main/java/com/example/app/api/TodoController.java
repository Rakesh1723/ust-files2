package com.example.app.api;

import com.example.app.exceptions.TaskAlreadyExistsException;
import com.example.app.exceptions.TaskNotFoundException;
import com.example.app.model.Task;
import com.example.app.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
@RequestMapping("/api/v1/todos")
public class TodoController {
    @Autowired
    TaskRepository taskRepo;

    @PostMapping
    public Task createTask(@RequestBody Task task)
    {   if(taskRepo.existsByTitleIgnoreCase(task.getTitle()))
           throw new TaskAlreadyExistsException("Task already found with the title :"+task.getTitle());
        return taskRepo.save(task);
    }

    @GetMapping
    public List<Task> fetchAllTasks()
    {
        return  taskRepo.findAll();
    }

    @DeleteMapping
    public void deleteTask(@RequestParam String title)
    {   int id=taskRepo.findByTitleIgnoreCase(title).getId();
        if(!taskRepo.existsById(id))
            throw new TaskNotFoundException("Task not found to delete with the given title :"+title);
        taskRepo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable int  id,@RequestBody Task task)
    {
        System.out.println(id);
        Task exTask=taskRepo.findById(id).orElseThrow(()->new TaskNotFoundException("Task not found to update with the title :"+task.getTitle()));
        if(exTask!=null){
            exTask.setTitle(task.getTitle());
            exTask.setStatus(task.getStatus());
        }
        return taskRepo.save(exTask);
    }

    @GetMapping("/{id}")
    public Task getTask(@PathVariable int id){
        return taskRepo.findById(id).orElseThrow(()->new TaskNotFoundException("Task not found to update with the id :"+ id));
    }

}
