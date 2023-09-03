package com.hoaxify.ws.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	UserRepository userRepository;
	PasswordEncoder passwordEncoder;

	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {

		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public void save(User user) {
		String encryptedPassword = this.passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userRepository.save(user);

	}

	public Page<User> getUsers(Pageable page, User user) {
		// Pageable page = PageRequest.of(currentPage, pageSize);

		// return userRepository.findAll();

		// return userRepository.getAllUsersProjection(page);

		if (user != null) {
			return userRepository.findByUsernameNot(user.getUsername(), page);
		}

		return userRepository.findAll(page);
	}

}
