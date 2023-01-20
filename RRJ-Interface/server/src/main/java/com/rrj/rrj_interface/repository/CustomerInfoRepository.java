package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.CustomerInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CustomerInfoRepository extends JpaRepository<CustomerInfo, String> {

    @Query("select e.CustomerFullName FROM CustomerInfo e WHERE e.CustomerMobile =?1 OR e.AlternateMobileOne =?1 OR e.AlternateMobileTwo =?1")
    List<String> findByCustomerMobile(String CustomerMobile);

    @Query("select e FROM CustomerInfo e WHERE e.CustomerMobile =?1 OR CustomerFullName =?2")
    List<CustomerInfo> findCustomer(String CustomerMobile, String CustomerFullName);

    @Query("select e FROM CustomerInfo e WHERE e.CustomerMobile =?1")
    public CustomerInfo findCustomerDetails(String CustomerMobile);
}
