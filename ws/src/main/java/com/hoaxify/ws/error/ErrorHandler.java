package com.hoaxify.ws.error;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@RestController
public class ErrorHandler implements ErrorController {

	@Autowired
	private ErrorAttributes errorAttributes;

	@RequestMapping("/error")
	ApiError handleError(WebRequest webRequest) {
		ErrorAttributeOptions options = ErrorAttributeOptions.defaults();
		Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(webRequest, options);
		String message = (String) attributes.get("error");
		String path = (String) attributes.get("path");
		int status = (Integer) attributes.get("status");
		ApiError error = new ApiError(status, message, path);
		if (attributes.containsKey("errors")) {
			Map<String, String> validationErros = new HashMap<>();
			@SuppressWarnings("unchecked")
			List<FieldError> fieldErrors = (List<FieldError>) attributes.get("errors");
			for (FieldError fieldError : fieldErrors) {
				validationErros.put(fieldError.getField(), fieldError.getDefaultMessage());
			}

			error.setValidationErrors(validationErros);
		}
		return error;
	}
}
