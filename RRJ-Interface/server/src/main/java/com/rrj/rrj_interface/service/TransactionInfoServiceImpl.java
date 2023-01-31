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
    public List<TransactionInfo> getTransactionDetails(TransactionInfo transactionInfo) {
        return transactionInfoRepository.getDetailsByDate(transactionInfo.getTransactionDate());
    }

    @Override
    public List<TransactionInfo> getdetails(TransactionInfo transactionInfo) {
        return transactionInfoRepository.getdetails(transactionInfo.getTransactionId(), transactionInfo.CustomerFullName, transactionInfo.CustomerMobile);
    }

    @Override
    public ResponseEntity<TransactionInfo> updateTrans(TransactionInfo transactionInfo, String TransactionId) {

        TransactionInfo updateTransaction = transactionInfoRepository.findByTransactionId(TransactionId);

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

    @Override
    public List<TransactionInfo> getTransactionByCustomerId(TransactionInfo transactionInfo) {
        return transactionInfoRepository.findByCustomerId(transactionInfo.CustomerId);
    }
}
