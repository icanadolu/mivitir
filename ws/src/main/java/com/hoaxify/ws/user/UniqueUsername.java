package com.hoaxify.ws.user;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ FIELD})
@Retention(RUNTIME)
@Constraint(validatedBy = {UniqueUsernameValidator.class })//bu anatosyonu kullanan kişiler buradaki sınıfın logici muattaptır
public @interface UniqueUsername {
	String message() default "Username must be unique";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

}
