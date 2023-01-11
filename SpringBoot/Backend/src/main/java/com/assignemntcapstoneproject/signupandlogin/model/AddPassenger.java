package com.assignemntcapstoneproject.signupandlogin.model;
import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

 

@Entity
public class AddPassenger {
	@Id
    @GeneratedValue
    @Column(name="pnr",nullable= false,updatable=false)
    private long pnr;
    @Column(name="Name")
    private String name;
    @Column(name="MobileNumber")
    private long contact;
    @Column(name="DOB")
    private Date dob;
    @Column(name="AadharNumber")
    private long aadhar; 
    private String bus_name;
    private String location_from;
    private String location_to;
    private Date departure_date;
    private Time departure_time;
    private Time arrival_time;

	@Column(name="BookingDate")
    private Date bookingDate;
    @Column(name="TicketCancelled")
    public boolean cancelStat;
    @Column(name="Username")
    private String username;
    @Column(name="JourneyStatus")
    private boolean journeyStat;
    
    private Long busid;



    public Long getBusid() {
		return busid;
	}

	public void setBusid(Long busid) {
		this.busid = busid;
	}

	public AddPassenger() {}

    public boolean isJourneyStat() {
        return journeyStat;
    }

    public void setJourneyStat(boolean journeyStat) {
        this.journeyStat = journeyStat;
    }

    public long getPnr() {
        return pnr;
    }

    public void setPnr(long pnr) {
        this.pnr = pnr;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBus_name() {
		return bus_name;
	}

	public void setBus_name(String bus_name) {
		this.bus_name = bus_name;
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

	public Time getDeparture_time() {
		return departure_time;
	}

	public void setDeparture_time(Time departure_time) {
		this.departure_time = departure_time;
	}

	public Time getArrival_time() {
		return arrival_time;
	}

	public void setArrival_time(Time arrival_time) {
		this.arrival_time = arrival_time;
	}

	public long getContact() {
        return contact;
    }

    public void setContact(long contact) {
        this.contact = contact;
    }



 



    public Date getDob() {
        return dob;
    }



 



    public void setDob(Date dob) {
        this.dob = dob;
    }



 



    public long getAadhar() {
        return aadhar;
    }



 



    public void setAadhar(long aadhar) {
        this.aadhar = aadhar;
    }



 



    public Date getBookingDate() {
        return bookingDate;
    }



 



    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }



 



    public boolean isCancelStat() {
        return cancelStat;
    }



 



    public void setCancelStat(boolean cancelStat) {
        this.cancelStat = cancelStat;
    }



 



    public String getUsername() {
        return username;
    }



 



    public void setUsername(String username) {
        this.username = username;
    }

}

