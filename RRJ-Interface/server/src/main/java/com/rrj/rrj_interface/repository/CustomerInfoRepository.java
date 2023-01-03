package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.CustomerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CustomerInfoRepository extends JpaRepository<CustomerInfo,String> {

    @Query("select e FROM CustomerInfo e WHERE e.CustomerMobile =?1 OR e.AlternateMobileOne =?1 OR e.AlternateMobileTwo =?1")
    List<CustomerInfo> findByCustomerMobile(String CustomerMobile);
}
