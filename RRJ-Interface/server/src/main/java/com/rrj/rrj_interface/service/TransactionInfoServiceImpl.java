package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.repository.TransactionInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionInfoServiceImpl implements TransactionInfoService {

    @Autowired
    private TransactionInfoRepository transactionInfoRepository;

    @Override
    public TransactionInfo save(TransactionInfo transactionInfo) {
        return transactionInfoRepository.save(transactionInfo);
    }

    @Override
    public ResponseEntity<TransactionInfo> updateTrans(TransactionInfo transactionInfo, String TransactionId) {

        TransactionInfo updateTransaction = transactionInfoRepository.findByTransactionId(TransactionId);

        updateTransaction.setCustomerMobile(transactionInfo.getCustomerMobile());
        updateTransaction.setCustomerFullName(transactionInfo.getCustomerFullName());
        updateTransaction.setTransactionType(transactionInfo.getTransactionType());
        updateTransaction.setPaymentType((transactionInfo.getPaymentType()));
        updateTransaction.setReceivedType(transactionInfo.getReceivedType());
        updateTransaction.setAmount(transactionInfo.getAmount());
        updateTransaction.setGoldWeight(transactionInfo.getGoldWeight());
        updateTransaction.setSilverWeight(transactionInfo.getSilverWeight());
        updateTransaction.setTransactionStatus(transactionInfo.getTransactionStatus());
        updateTransaction.setTransactionEnteredBy(transactionInfo.getTransactionEnteredBy());
        updateTransaction.setTransactionDoneBy(transactionInfo.getTransactionDoneBy());
        updateTransaction.setTransactionDescription(transactionInfo.getTransactionDescription());
        updateTransaction.setCustomerDueStatus(transactionInfo.getCustomerDueStatus());
        updateTransaction.setCustomerDueAmount(transactionInfo.getCustomerDueAmount());
        updateTransaction.setRrjDueStatus(transactionInfo.getRrjDueStatus());
        updateTransaction.setRrjDueAmount((transactionInfo.getRrjDueAmount()));

        transactionInfoRepository.save(updateTransaction);

        return ResponseEntity.ok(updateTransaction);
    }

}
