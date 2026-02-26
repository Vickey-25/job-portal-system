package com.jobportal.controller;

import com.jobportal.model.Application;
import com.jobportal.repository.ApplicationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    @Autowired
    private ApplicationRepository applicationRepository;


    // APPLY JOB
    @PostMapping
    public Application applyJob(@RequestBody Application application) {

        application.setStatus("APPLIED");

        return applicationRepository.save(application);

    }


    // VIEW ALL APPLICATIONS (Recruiter)
    @GetMapping
    public List<Application> getAllApplications() {

        return applicationRepository.findAll();

    }


    // VIEW STUDENT APPLICATIONS
    @GetMapping("/student/{email}")
    public List<Application> getStudentApplications(@PathVariable String email) {

        return applicationRepository.findByStudentEmail(email);

    }

}