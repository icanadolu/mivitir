package com.hoaxify.ws.error;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
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
		return new ApiError(status, message, path);
	}
}
