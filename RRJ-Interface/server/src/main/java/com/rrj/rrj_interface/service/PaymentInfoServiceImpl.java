package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.repository.PaymentInfoRepository;
import com.rrj.rrj_interface.repository.TransactionInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentInfoServiceImpl implements PaymentInfoService {

    @Autowired
    private PaymentInfoRepository paymentInfoRepository;
    @Autowired
    private TransactionInfoRepository transactionInfoRepository;

    @Override
    public PaymentInfo save(PaymentInfo paymentInfo) {
        return paymentInfoRepository.save(paymentInfo);
    }

    @Override
    public List<PaymentInfo> getTransactionByCustomerId(PaymentInfo paymentInfo) {
        return paymentInfoRepository.findByCustomerId(paymentInfo.getCustomerId());
    }

    @Override
    public List<PaymentInfo> getdetails(PaymentInfo paymentInfo) {
        return paymentInfoRepository.getdetails(paymentInfo.getPaymentId(), paymentInfo.getCustomerFullName(), paymentInfo.getCustomerMobile());
    }

    @Override
    public List<PaymentInfo> getTransactionDetails(PaymentInfo paymentInfo) {
        return paymentInfoRepository.getDetailsByDate(paymentInfo.getPaymentDate());
    }
}
