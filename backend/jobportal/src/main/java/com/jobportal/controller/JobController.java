package com.jobportal.controller;

import com.jobportal.model.Job;
import com.jobportal.repository.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    @Autowired
    private JobRepository jobRepository;


    // POST JOB
    @PostMapping
    public Job postJob(@RequestBody Job job) {

        return jobRepository.save(job);

    }


    // GET ALL JOBS
    @GetMapping
    public List<Job> getAllJobs() {

        return jobRepository.findAll();

    }


    // GET JOB BY ID
    @GetMapping("/{id}")
    public Job getJob(@PathVariable Long id) {

        return jobRepository.findById(id).orElse(null);

    }

}