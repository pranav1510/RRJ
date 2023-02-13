package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.PaymentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentInfoRepository extends JpaRepository<PaymentInfo,Integer> {

    @Query("select e FROM PaymentInfo e WHERE e.CustomerId =?1 ORDER BY e.PaymentId DESC")
    public List<PaymentInfo> findByCustomerId(int CustomerId);

    @Query("select e FROM PaymentInfo e WHERE e.PaymentId =?1 OR e.CustomerFullName =?2 OR e.CustomerMobile =?3 ORDER BY e.PaymentId DESC")
    public List<PaymentInfo> getdetails(String PaymentId, String CustomerFullName, String CustomerMobile);

    @Query("select e FROM PaymentInfo e WHERE e.PaymentDate =?1")
    public List<PaymentInfo> getDetailsByDate(String PaymentDate);

    @Query("select e FROM PaymentInfo e WHERE e.PaymentId =?1")
    public PaymentInfo findByPaymentId(String PaymentId);

    @Query("select e FROM PaymentInfo e WHERE e.Status = 'Pending'")
    public List<PaymentInfo> getPendingTransactions();
}
