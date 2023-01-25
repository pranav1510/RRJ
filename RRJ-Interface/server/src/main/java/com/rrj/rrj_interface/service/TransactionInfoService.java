package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;

import java.util.List;

public interface TransactionInfoService {

    public TransactionInfo save(TransactionInfo transactionInfo);

    public List<TransactionInfo> getTransactionDetails(TransactionInfo transactionInfo);
}
