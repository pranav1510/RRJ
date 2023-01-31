package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.PaymentInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentInfoRepository extends JpaRepository<PaymentInfo,Integer> {
}
