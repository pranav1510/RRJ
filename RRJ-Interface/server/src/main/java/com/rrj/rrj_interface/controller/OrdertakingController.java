package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.service.OrdertakingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
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
    public List<Object[]> getOrderAtPayment(@RequestBody PaymentInfo paymentInfo){
        return ordertakingservice.getOrderInfoAtPayment(paymentInfo);
    }

    @PostMapping("/searchOrder")
    public List<Ordertaking> getOrders(@RequestBody Ordertaking ordertaking) {
        return ordertakingservice.getOrderDetails(ordertaking);
    }

    @PutMapping("/orderupdate/{OrderId}")
    public ResponseEntity<Ordertaking> orderupdate(@RequestBody Ordertaking ordertaking, @PathVariable String OrderId){
        return ordertakingservice.updateOrder(ordertaking,OrderId);
    }

    @PostMapping("getcustomerinfo")
    public List<Object[]> getCustomerId(@RequestBody Ordertaking ordertaking){
        return ordertakingservice.getCustomerId(ordertaking);
    }

    @PostMapping("getorders")
    public List<Ordertaking> getOrderByCustomerId(@RequestBody Ordertaking ordertaking){
        return ordertakingservice.getOrdersByCustomerId(ordertaking);
    }
}
