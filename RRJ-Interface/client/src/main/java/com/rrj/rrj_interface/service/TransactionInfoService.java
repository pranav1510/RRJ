package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TransactionInfoService {

    public TransactionInfo save(TransactionInfo transactionInfo);
    public List<TransactionInfo> getTransactionDetails(TransactionInfo transactionInfo);
    public List<TransactionInfo> getdetails(TransactionInfo transactionInfo);
    public ResponseEntity<TransactionInfo> updateTrans(TransactionInfo transactionInfo, String TransactionId);

    public List<TransactionInfo> getTransactionByCustomerId(TransactionInfo transactionInfo);
}