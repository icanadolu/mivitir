package com.hoaxify.ws.auth;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.configuration.MivitirUserDetails;
import com.hoaxify.ws.shared.Views;
import com.hoaxify.ws.user.UserRepository;

@RestController
public class AuthController {

	private static final Logger log = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	UserRepository userRepository;

	@PostMapping("/api/1.0/auth")
	@JsonView(Views.Base.class)
	ResponseEntity<?> handleAuthentication(/* @RequestHeader(name = "Authorization") String authorization */) {
		MivitirUserDetails userDetails = (MivitirUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		// String base64encoded = authorization.split("Basic ")[1];
		// String decoded = new String(Base64.getDecoder().decode(base64encoded));
		// String[] parts = decoded.split(":");
		// String username = parts[0];
		// String password = parts[1];

		// String username = userDetails.getUsername();
		// User inDB = userRepository.findByUsername(username);

		return ResponseEntity.ok(userDetails.getUser());

	}

}
