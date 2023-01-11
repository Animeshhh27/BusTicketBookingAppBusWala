package com.assignemntcapstoneproject.signupandlogin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assignemntcapstoneproject.signupandlogin.repository.UserRepository;
import com.assignemntcapstoneproject.signupandlogin.model.User;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

	@Autowired 
	private UserRepository userRepository;
	
	@PostMapping("/signup")
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/getallusers")
	Iterable<User> getAllUsers(){
		return userRepository.findAll();
		
	}
	
	@GetMapping("/getloggedin")
	boolean getloggedin() {
		List<User> list = userRepository.findAll();
		for(User user: list) {
			if(user.isIsloggedin()==true) {
				return true;
			}
		}
		return false;
	}
	@GetMapping("/getloggedinuser")
	String getloggedinuser() {
		List<User> list = userRepository.findAll();
		for(User user: list) {
			if(user.isIsloggedin()==true) {
				return user.getUsername();
			}
		}
		return "";
	}
	
	@PutMapping("/loggedout")
	void getloggedout() {
		List<User> list =userRepository.findAll();
		for(User user :list) {
			if(user.isIsloggedin() == true) {
				user.setIsloggedin(false);
				userRepository.save(user);
			}
		}
	}
	
	@PutMapping("/login/{username}")
	void updatelogedin(@PathVariable String username) {
		List<User> list =userRepository.findByUsername(username);
		for(User user:list) {
			if(user.getUsername().equals(username)) {
				user.setIsloggedin(true);
				userRepository.save(user);
			}
		}
	}
	
	@PostMapping(path="/login")
	boolean login(@RequestBody User person) {
		String username= person.getUsername();
		String pass= person.getPassword();
		List<User> list = userRepository.findByUsername(username);
//		userRepository.save(person);
		for (User user : list) {
			String user_password= user.getPassword();
			if(user_password.equals(pass)) {
				return true;
			}
		}
	
		return false;
	}
	
//	@GetMapping(path="/getuserdetails/{loggedinuser}")
//	User getUser(@PathVariable String loggedinuser) {
//		List<User> list =userRepository.findByUsername(loggedinuser);
//		for(User user:list) {
//			if(user.getUsername().equals(loggedinuser)) {
//				return user;
//			}
//		}
//		return null;
//	}
	@GetMapping("/getuserdetails")
	User getuserdetails() {
		List<User> list = userRepository.findAll();
		for(User user: list) {
			if(user.isIsloggedin()==true) {
				return user;
			}
		}
		return null;
	}
	
}
