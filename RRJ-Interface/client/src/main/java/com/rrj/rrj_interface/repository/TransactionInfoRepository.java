package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.TransactionInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionInfoRepository extends JpaRepository<TransactionInfo, String> {

    @Query("select e FROM TransactionInfo e WHERE e.TransactionDate =?1")
    public List<TransactionInfo> getDetailsByDate(String TransactionDate);

    @Query("select e FROM TransactionInfo e WHERE e.TransactionId =?1 OR e.CustomerFullName =?2 OR e.CustomerMobile =?3 ORDER BY e.TransactionId DESC")
    public List<TransactionInfo> getdetails(String TransactionId, String CustomerFullName, String CustomerMobile);

    @Query("select e FROM TransactionInfo e WHERE e.TransactionId =?1")
    public TransactionInfo findByTransactionId(String TransactionId);

    @Query("select e FROM TransactionInfo e WHERE e.CustomerId =?1 ORDER BY e.TransactionId DESC")
    public List<TransactionInfo> findByCustomerId(int CustomerId);
}
