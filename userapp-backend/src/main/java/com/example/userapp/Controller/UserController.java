package com.example.userapp.Controller;

import com.example.userapp.model.User;
import com.example.userapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/userService")
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/allUsers")
    public List<User> getUsers(){
        return repo.findAll();
    }

    @PostMapping("/createUser")
    public String createUser(@RequestBody User user) {
        repo.save(user);
        String id = user.getId();
        return id;
    }
}
