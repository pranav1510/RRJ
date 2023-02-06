package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.service.PaymentInfoService;
import com.rrj.rrj_interface.service.TransactionInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("transget")
    public List<PaymentInfo> gettransByCustomerId(@RequestBody PaymentInfo paymentInfo){
        return paymentInfoService.getTransactionByCustomerId(paymentInfo);
    }

    @PostMapping("gettransaction")
    public List<PaymentInfo> gettransaction(@RequestBody PaymentInfo paymentInfo){
        return paymentInfoService.getdetails(paymentInfo);
    }

    @PostMapping("/getdetails")
    public List<PaymentInfo> getdetails(@RequestBody PaymentInfo paymentInfo){
        return paymentInfoService.getTransactionDetails(paymentInfo);
    }
}
