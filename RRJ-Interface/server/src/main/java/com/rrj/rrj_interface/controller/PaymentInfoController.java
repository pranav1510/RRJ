package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.service.PaymentInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("updatetrans/{PaymentId}")
    public ResponseEntity<PaymentInfo> transupdate(@RequestBody PaymentInfo paymentInfo, @PathVariable String PaymentId){
        return paymentInfoService.updateTrans(paymentInfo, PaymentId);
    }

    @GetMapping("/pendingtransactions")
    public List<PaymentInfo> getPendingTransactions(){
        return paymentInfoService.getPendingTransactions();
    }
}
