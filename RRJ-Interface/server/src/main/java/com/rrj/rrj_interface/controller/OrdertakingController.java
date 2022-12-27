package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.service.OrdertakingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/OrderTaking")
public class OrdertakingController {

    @Autowired
    private OrdertakingService ordertakingservice;

    @PostMapping("/add")
    public String add(@RequestBody Ordertaking ordertaking){
        ordertakingservice.save(ordertaking);
        return "New Order is added!";
    }

}