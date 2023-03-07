package com.hoaxify.ws.user;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {

	final static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserService userService;

	// @CrossOrigin
	@PostMapping("/api/1.0/users")
	public GenericResponse createUser(@Valid @RequestBody User user) {

		userService.save(user);
		return new GenericResponse(" user created");
	}

	// @ExceptionHandler(MethodArgumentNotValidException.class)
	// @ResponseStatus(HttpStatus.BAD_REQUEST)
	// public ApiError handleValidationException(MethodArgumentNotValidException exception) {
	// ApiError error = new ApiError(400, "validation errors", "/api/1.0/users");
	// Map<String, String> validationErros = new HashMap<String, String>();
	// for (FieldError fieldError : exception.getBindingResult().getFieldErrors()) {
	// validationErros.put(fieldError.getField(), fieldError.getDefaultMessage());
	// }
	// error.setValidationErrors(validationErros);
	// return error;
	// }

}
