package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.service.TransactionInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/TransactionInfo")
public class TransactionInfoController {

    @Autowired
    private TransactionInfoService transactionInfoService;

    @PostMapping("/add")
    public TransactionInfo add(@RequestBody TransactionInfo transactionInfo){
        return transactionInfoService.save(transactionInfo);
    }

}
