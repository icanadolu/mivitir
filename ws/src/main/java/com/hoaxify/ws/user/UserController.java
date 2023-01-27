package com.hoaxify.ws.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {
	
	final static Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	
	//@CrossOrigin
	@PostMapping("/api/1.0/users")
	public GenericResponse createUser(@RequestBody User user) {
		userService.save(user);
		GenericResponse response = new GenericResponse(" user created");
		
		return response;
	}
	
}
