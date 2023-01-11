package com.assignemntcapstoneproject.signupandlogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignemntcapstoneproject.signupandlogin.model.AddPassenger;

public interface PassengerRepository extends JpaRepository<AddPassenger, Long> {

	List<AddPassenger> findByPnr(Long pnr);
	List<AddPassenger> findByUsername(String loggedinuser);
}
