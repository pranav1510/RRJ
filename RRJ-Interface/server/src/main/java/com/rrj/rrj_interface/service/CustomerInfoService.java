package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;

import java.util.List;

public interface CustomerInfoService {

    public CustomerInfo save(CustomerInfo customerInfo);
    public List<String> getCustomerData(Ordertaking ordertaking);
}
