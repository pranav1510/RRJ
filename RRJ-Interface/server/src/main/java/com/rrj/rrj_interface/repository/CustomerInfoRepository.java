package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.CustomerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CustomerInfoRepository extends JpaRepository<CustomerInfo,String> {

    @Query("select e from CustomerInfo e")
    List<CustomerInfo> findByCustomerMobile(String CustomerMobile);
}
