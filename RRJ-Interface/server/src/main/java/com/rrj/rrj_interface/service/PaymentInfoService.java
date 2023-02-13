package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PaymentInfoService {

    public PaymentInfo save(PaymentInfo paymentInfo);
    public List<PaymentInfo> getTransactionByCustomerId(PaymentInfo paymentInfo);
    public List<PaymentInfo> getdetails(PaymentInfo paymentInfo);
    public List<PaymentInfo> getTransactionDetails(PaymentInfo paymentInfo);
    public ResponseEntity<PaymentInfo> updateTrans(PaymentInfo paymentInfo, String PaymentId);
    public List<PaymentInfo> getPendingTransactions();



}
