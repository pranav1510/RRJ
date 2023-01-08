package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.model.TransactionInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionInfoRepository extends JpaRepository<TransactionInfo, String> {

    public TransactionInfo save(TransactionInfo transactionInfo);
}
