package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.repository.PaymentInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentInfoServiceImpl implements PaymentInfoService {

    @Autowired
    private PaymentInfoRepository paymentInfoRepository;

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
        return paymentInfoRepository.getdetails(paymentInfo.getPaymentId(), paymentInfo.getCustomerFullName(), paymentInfo.getCustomerMobile(), paymentInfo.getPaymentDate(), paymentInfo.getPaymentReceivedBy());
    }

    @Override
    public List<PaymentInfo> getTransactionDetails(PaymentInfo paymentInfo) {
        return paymentInfoRepository.getDetailsByDate(paymentInfo.getPaymentDate());
    }

    @Override
    public ResponseEntity<PaymentInfo> updateTrans(PaymentInfo paymentInfo, String PaymentId) {

        PaymentInfo updateTransaction = paymentInfoRepository.findByPaymentId(PaymentId);

        updateTransaction.setTransactionType(paymentInfo.getTransactionType());
        updateTransaction.setBillNo(paymentInfo.getBillNo());
        updateTransaction.setPaymentPurpose(paymentInfo.getPaymentPurpose());
        updateTransaction.setSentType(paymentInfo.getSentType());
        updateTransaction.setPaymentType(paymentInfo.getPaymentType());
        updateTransaction.setCustomerMobile(paymentInfo.getCustomerMobile());
        updateTransaction.setCustomerFullName(paymentInfo.getCustomerFullName());
        updateTransaction.setCustomerId(paymentInfo.getCustomerId());
        updateTransaction.setOrderId(paymentInfo.getOrderId());
        updateTransaction.setPaymentDate(paymentInfo.getPaymentDate());
        updateTransaction.setReceivedWeight(paymentInfo.getReceivedWeight());
        updateTransaction.setExchangeWeight(paymentInfo.getExchangeWeight());
        updateTransaction.setTotalPrice(paymentInfo.getTotalPrice());
        updateTransaction.setGoldWeight(paymentInfo.getGoldWeight());
        updateTransaction.setSilverWeight(paymentInfo.getSilverWeight());
        updateTransaction.setCash(paymentInfo.getCash());
        updateTransaction.setStatus(paymentInfo.getStatus());
        updateTransaction.setCustomerDueStatus(paymentInfo.getCustomerDueStatus());
        updateTransaction.setCustomerDueAmount(paymentInfo.getCustomerDueAmount());
        updateTransaction.setCustomerDueGold(paymentInfo.getCustomerDueGold());
        updateTransaction.setCustomerDueSilver(paymentInfo.getCustomerDueSilver());
        updateTransaction.setRrjDueStatus(paymentInfo.getRrjDueStatus());
        updateTransaction.setRrjDueAmount(paymentInfo.getRrjDueAmount());
        updateTransaction.setRrjDueGold(paymentInfo.getRrjDueGold());
        updateTransaction.setRrjDueSilver(paymentInfo.getRrjDueSilver());
        updateTransaction.setPaymentDescription(paymentInfo.getPaymentDescription());
        updateTransaction.setAcntTransfer(paymentInfo.getAcntTransfer());
        updateTransaction.setPercentage(paymentInfo.getPercentage());
        updateTransaction.setOneGramCost(paymentInfo.getOneGramCost());
        updateTransaction.setOldWeight(paymentInfo.getOldWeight());
        updateTransaction.setFineWeight(paymentInfo.getFineWeight());

        paymentInfoRepository.save(updateTransaction);

        return ResponseEntity.ok(updateTransaction);
    }

    @Override
    public List<PaymentInfo> getPendingTransactions() {
        return paymentInfoRepository.getPendingTransactions();
    }
}
