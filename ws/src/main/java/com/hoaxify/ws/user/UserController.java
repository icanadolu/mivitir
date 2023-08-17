package com.hoaxify.ws.user;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.shared.Views;

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

	@GetMapping("/api/1.0/users")
	@JsonView(Views.Base.class) // jsonda bu sınıflar işarelenen fieldleri göster bu işin tam tersi jsonignore

	// Page<User> getUsers(@RequestParam int currentPage, @RequestParam(required = false, defaultValue = "5") int pageSize)
	Page<User> getUsers(Pageable page) {
		return userService.getUsers(page);
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
