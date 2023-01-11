package com.assignemntcapstoneproject.signupandlogin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assignemntcapstoneproject.signupandlogin.model.BusData;
import com.assignemntcapstoneproject.signupandlogin.repository.BusRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
public class BusController {

	@Autowired
	private BusRepository busRepo;
	
	@GetMapping("/getbuses")
	Iterable<BusData> getbuses(){
		return busRepo.findAll();
	}
	
	@PostMapping("/addbuses")
	BusData newbus(@RequestBody BusData newbus) {
		return busRepo.save(newbus);
	}
	
	@PutMapping("/updateavailabletickets/{bus_id}/{number}")
    void updateavailabletickets(@PathVariable("bus_id") Long bus_id,@PathVariable("number") int number) {
//        System.out.println(bus_id);
//        int number = 2;
        List<BusData> list = busRepo.findAll();
        System.out.println(number);

        for(BusData bus : list) {
            if(bus.getId() == bus_id) {

                bus.setAvailable_seats(bus.getAvailable_seats() - number);
                busRepo.save(bus);
                System.out.println(bus.getAvailable_seats());
            }
        }
    }
	
	@PutMapping("/updateticketsadd/{result}")
	void updateticketsadd(@PathVariable Long result) {
		List<BusData> list  = busRepo.findAll();
		for(BusData bus: list) {
			if(bus.getId()== result) {
				bus.setAvailable_seats(bus.getAvailable_seats() + 1);
				busRepo.save(bus);
				System.out.println(bus.getAvailable_seats());
			}
		}
	}
	
}
