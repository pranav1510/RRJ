package com.rrj.rrj_interface.controller;


import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.service.TransactionInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/TransactionInfo")
public class TransactionInfoController {

    @Autowired
    private TransactionInfoService transactionInfoService;

    @PostMapping("/add")
    public TransactionInfo add(@RequestBody TransactionInfo transactionInfo){
        return transactionInfoService.save(transactionInfo);
    }

    @PutMapping("updatetrans/{TransactionId}")
    public ResponseEntity<TransactionInfo> transupdate(@RequestBody TransactionInfo transactionInfo, @PathVariable String TransactionId){
        return transactionInfoService.updateTrans(transactionInfo, TransactionId);
    }

}
