package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.repository.PaymentInfoRepository;
import com.rrj.rrj_interface.repository.TransactionInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentInfoServiceImpl implements PaymentInfoService {

    @Autowired
    private PaymentInfoRepository paymentInfoRepository;
    @Autowired
    private TransactionInfoRepository transactionInfoRepository;

    @Override
    public PaymentInfo save(PaymentInfo paymentInfo) {
        TransactionInfo transactionInfo = new TransactionInfo(paymentInfo.getPaymentId(), paymentInfo.getOrderId(), paymentInfo.getCustomerId(), paymentInfo.getCustomerFullName(), paymentInfo.getCustomerMobile(), paymentInfo.getPaymentDate(), paymentInfo.getAmountReceived(), paymentInfo.getExchangeGoldWeight(), paymentInfo.getExchangeSilverWeight(), paymentInfo.getPaymentDescription(), paymentInfo.getTransactionType(), paymentInfo.getPaymentPurpose(), paymentInfo.getPaymentType(), paymentInfo.getStatus(), paymentInfo.getCustomerDueStatus(), paymentInfo.getCustomerDueAmount(), paymentInfo.getRrjDueStatus(), paymentInfo.getRrjDueAmount(), paymentInfo.getPaymentReceivedBy(), paymentInfo.getPaymentEnteredBy());
        transactionInfoRepository.save(transactionInfo);
        return paymentInfoRepository.save(paymentInfo);
    }
}