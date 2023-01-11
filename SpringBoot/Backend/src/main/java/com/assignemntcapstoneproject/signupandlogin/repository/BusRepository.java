package com.assignemntcapstoneproject.signupandlogin.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assignemntcapstoneproject.signupandlogin.model.BusData;
import com.assignemntcapstoneproject.signupandlogin.model.User;

public interface BusRepository extends JpaRepository<BusData,Long > {

//	List<BusData> findByBus_Id(Long id);
}
