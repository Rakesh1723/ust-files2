package com.example.app.repository;

import com.example.app.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Integer> {

       Task findByTitleIgnoreCase(String title);
       boolean existsByTitleIgnoreCase(String id);
}
