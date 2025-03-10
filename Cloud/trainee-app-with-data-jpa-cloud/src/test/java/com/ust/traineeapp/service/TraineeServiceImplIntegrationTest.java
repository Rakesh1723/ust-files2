package com.ust.traineeapp.service;

import com.ust.traineeapp.exception.RecordNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TraineeServiceImplIntegrationTest {

    @Autowired
    TraineeServiceImpl traineeService;

    @Test
    void getTraineeById() {

        // Given
        var id = 1;

        Assertions.assertDoesNotThrow(()->traineeService.getTraineeById(id));

        Assertions.assertThrows(RecordNotFoundException.class,()->traineeService.getTraineeById(100));


    }
}