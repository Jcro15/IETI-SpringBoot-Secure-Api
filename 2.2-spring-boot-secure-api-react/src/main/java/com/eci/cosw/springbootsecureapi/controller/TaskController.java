package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Task;
import com.eci.cosw.springbootsecureapi.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping( "/api/tasks" )
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @GetMapping
    public ResponseEntity<?> getTasks(){
        return new ResponseEntity<>(taskService.getTasks(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> addTask(@RequestBody Task task){
        System.out.println(task);
        taskService.addTask(task);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
