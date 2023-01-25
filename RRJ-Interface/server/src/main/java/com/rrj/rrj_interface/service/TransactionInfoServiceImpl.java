package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import com.rrj.rrj_interface.repository.TransactionInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
