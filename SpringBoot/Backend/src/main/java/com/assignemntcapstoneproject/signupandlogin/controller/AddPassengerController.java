package com.assignemntcapstoneproject.signupandlogin.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assignemntcapstoneproject.signupandlogin.model.AddPassenger;
import com.assignemntcapstoneproject.signupandlogin.repository.PassengerRepository;

 

@CrossOrigin("http://localhost:3000")
@RestController
public class AddPassengerController {

    @Autowired
    private PassengerRepository passengerrepo;
    
    @GetMapping("/getpassengers")
    public List<AddPassenger> getpassengers(){
        return passengerrepo.findAll();
    }

    @PostMapping("/getpassengers")
    public void getpassengers(@RequestBody AddPassenger addpass[])
    {
        for(AddPassenger row: addpass) {
            System.out.println(row.getUsername());
            passengerrepo.save(row); 

        }
//        System.out.println(addpass.getName());

    }
    
    @GetMapping("/getbookings/{loggedinuser}")
    public List<AddPassenger> getbookings(@PathVariable String loggedinuser){
    	List<AddPassenger> list = passengerrepo.findByUsername(loggedinuser);
    	return list;
    }

    @PostMapping("/getpassengers/{loggedinuser}")
    public AddPassenger getpassengers(@RequestBody AddPassenger addpass)
    {
    	return passengerrepo.save(addpass);    
    }
    @PutMapping("/canceled/{pnr_details}")
    public Long updateEmployee(@PathVariable Long pnr_details){
        List<AddPassenger> cancel=passengerrepo.findByPnr(pnr_details);
        System.out.println(pnr_details);
        
        for(AddPassenger ticket:cancel) {
            System.out.println(ticket.getPnr());
            if(ticket.getPnr() == pnr_details) {
                ticket.setCancelStat(true);
                passengerrepo.save(ticket);
                System.out.println(ticket.isCancelStat());
                return ticket.getBusid();
            }
        }
        return null;
    }
    
    
}