package com.ust.app.springsecurity.api;

import com.ust.app.springsecurity.dto.JwtToken;
import com.ust.app.springsecurity.dto.UserCredentials;
import com.ust.app.springsecurity.model.UserModel;
import com.ust.app.springsecurity.service.AuthService;
import com.ust.app.springsecurity.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;


    @PostMapping("/login")
    public JwtToken login(@RequestBody UserCredentials userCredentials){

       return authService.authenticate(userCredentials);

    }

    @PostMapping("/register")
    public UserDetails register(@RequestBody UserModel user){
        return userDetailsService.saveUser(user);
    }




}
