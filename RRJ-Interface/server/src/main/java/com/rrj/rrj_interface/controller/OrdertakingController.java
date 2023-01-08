package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.service.OrdertakingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/OrderTaking")
public class OrdertakingController {

    @Autowired
    private OrdertakingService ordertakingservice;

    @PostMapping("/add")
    public Ordertaking add(@RequestBody Ordertaking ordertaking){
        return ordertakingservice.save(ordertaking);
    }

    @GetMapping("/orderid")
    public List<String> getOrder(Ordertaking ordertaking){
        return ordertakingservice.getOrderData(ordertaking);
    }

    @PostMapping("/check")
    public List<String> getOrderAtPayment(@RequestBody PaymentInfo paymentInfo){
        return ordertakingservice.getOrderInfoAtPayment(paymentInfo);
    }
}
