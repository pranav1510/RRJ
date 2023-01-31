package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.service.PaymentInfoService;
import com.rrj.rrj_interface.service.TransactionInfoService;
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
    public PaymentInfo add(@RequestBody PaymentInfo paymentInfo){
        return paymentInfoService.save(paymentInfo);
    }
}
