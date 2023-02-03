package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CustomerInfoService {

    public CustomerInfo save(CustomerInfo customerInfo);
    public List<Object[]> getCustomerData(Ordertaking ordertaking);
    public List<CustomerInfo> findCustomer(CustomerInfo customerInfo);
    public ResponseEntity<CustomerInfo> updateCustomer(CustomerInfo customerInfo, int CustomerId);
    public int getCustomerId(CustomerInfo customerInfo);
}
