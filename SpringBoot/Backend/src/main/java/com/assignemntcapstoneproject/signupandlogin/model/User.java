package com.assignemntcapstoneproject.signupandlogin.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
//	//the below command is used so that the id can be auto generated and it is primary key
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	//The below command is used so that the column name id cannot be nullable or updateble  and we can set it for other columns also 
    @Column(name = "username", updatable = false, nullable = false)
	private String username;
	private String name;
	private String email;
	private String password;
	private boolean isloggedin;
	public boolean isIsloggedin() {
		return isloggedin;
	}
	public void setIsloggedin(boolean isloggedin) {
		this.isloggedin = isloggedin;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
//	@Override
//	public String toString() {
//		return "User [username=" + username + ", name=" + name + ", email=" + email + ", password=" + password + "]";
//	}
	
	
}
