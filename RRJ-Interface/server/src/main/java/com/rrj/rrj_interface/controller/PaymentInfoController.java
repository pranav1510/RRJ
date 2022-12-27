package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.service.PaymentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("PaymentInfo")
public class PaymentInfoController {

    @Autowired
    private PaymentInfoService paymentInfoService;

    @RequestMapping("/add")
    public String add(@RequestBody PaymentInfo paymentInfo){
        paymentInfoService.save(paymentInfo);
        return "new payment info added!";
    }
}