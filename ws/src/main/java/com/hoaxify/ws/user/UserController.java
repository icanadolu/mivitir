package com.hoaxify.ws.user;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {
	
	final static Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	UserService userService;
	
	
	//@CrossOrigin
	@PostMapping("/api/1.0/users")
	public ResponseEntity<?> createUser(@RequestBody User user) {
		String username= user.getUsername();
		if(username ==null ||username.isEmpty()) {
			ApiError error = new ApiError(400, "validation errors", "/api/1.0/users");
		Map<String, String> validationErros = new HashMap<String, String>();
		validationErros.put("username", "username cannot be null");
		error.setValidationErrors(validationErros);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
		}
		
		
		userService.save(user);
		
		
		return ResponseEntity.ok(new GenericResponse(" user created"));
	}
	
}
