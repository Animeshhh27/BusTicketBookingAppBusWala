package com.assignemntcapstoneproject.signupandlogin.model;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BusData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@GeneratedValue
	private Long id;
	private String bus_name;
	private String bus_type;
	private String location_from;
	private String location_to;
	private Date departure_date;
	private Date arrival_date;
	private Time departure_time;
	private Time arrival_time;
	private int total_seats;
	private int prices;
	private int available_seats;
	
	
	//getter and setter methods of all the above fields
	public Time getArrival_time() {
		return arrival_time;
	}
	public void setArrival_time(Time arrival_time) {
		this.arrival_time = arrival_time;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBus_name() {
		return bus_name;
	}
	public void setBus_name(String bus_name) {
		this.bus_name = bus_name;
	}
	public String getBus_type() {
		return bus_type;
	}
	public void setBus_type(String bus_type) {
		this.bus_type = bus_type;
	}
	public String getLocation_from() {
		return location_from;
	}
	public void setLocation_from(String location_from) {
		this.location_from = location_from;
	}
	public String getLocation_to() {
		return location_to;
	}
	public void setLocation_to(String location_to) {
		this.location_to = location_to;
	}
	public Date getDeparture_date() {
		return departure_date;
	}
	public void setDeparture_date(Date departure_date) {
		this.departure_date = departure_date;
	}
	public Date getArrival_date() {
		return arrival_date;
	}
	public void setArrival_date(Date arrival_date) {
		this.arrival_date = arrival_date;
	}
	public Time getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(Time departure_time) {
		this.departure_time = departure_time;
	}
	public int getTotal_seats() {
		return total_seats;
	}
	public void setTotal_seats(int total_seats) {
		this.total_seats = total_seats;
	}
	public int getAvailable_seats() {
		return available_seats;
	}
	public void setAvailable_seats(int available_seats) {
		this.available_seats = available_seats;
	}
	public int getPrices() {
		return prices;
	}
	public void setPrices(int prices) {
		this.prices = prices;
	}
	
	
}
