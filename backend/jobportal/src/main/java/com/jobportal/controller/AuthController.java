package com.jobportal.controller;

import com.jobportal.model.User;
import com.jobportal.repository.UserRepository;
import com.jobportal.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;


    // REGISTER API
    @PostMapping("/register")
    public String register(@RequestBody User user) {

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            return "Email already exists";
        }

        userRepository.save(user);

        return "User registered successfully";
    }


    // LOGIN API WITH JWT TOKEN
    @PostMapping("/login")
public String login(@RequestBody User user) {

    try {

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser == null) {
            return "User not found";
        }

        if (!existingUser.getPassword().equals(user.getPassword())) {
            return "Invalid password";
        }

        String token = jwtService.generateToken(existingUser.getEmail());

        return token;

    }
    catch (Exception e) {

        e.printStackTrace();

        return "Login error";

    }

}
}