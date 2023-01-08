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
        TransactionInfo transactionInfo = new TransactionInfo(paymentInfo.getPaymentId(), paymentInfo.getOrderId(), paymentInfo.getCustomerFullName(), paymentInfo.getCustomerMobile(), paymentInfo.getAmountReceived(), paymentInfo.getExchangeGoldWeight(), paymentInfo.getExchangeSilverWeight(), paymentInfo.getPaymentRemarks(), paymentInfo.getPaymentType(), paymentInfo.getPaymentPurpose(), paymentInfo.getStatus(), paymentInfo.getTransactionName(), paymentInfo.getCustomerDueStatus(), paymentInfo.getCustomerDueAmount(), paymentInfo.getRrjDueStatus(), paymentInfo.getRrjDueAmount());
        transactionInfoRepository.save(transactionInfo);
        return paymentInfoRepository.save(paymentInfo);
    }
}
