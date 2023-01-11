package com.assignemntcapstoneproject.signupandlogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignemntcapstoneproject.signupandlogin.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	List<User> findByUsername(String username);
}
