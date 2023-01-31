package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.repository.CustomerInfoRepository;
import com.rrj.rrj_interface.repository.OrdertakingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerInfoServiceImpl implements CustomerInfoService{

    @Autowired
    private CustomerInfoRepository customerInfoRepository;
    @Autowired
    private OrdertakingRepository ordertakingRepository;

    @Override
    public CustomerInfo save(CustomerInfo customerInfo) {

        CustomerInfo customerMobileDetails = customerInfoRepository.existsByMobile(customerInfo.getCustomerMobile());
        CustomerInfo alternateOneDetails = customerInfoRepository.existsByMobile(customerInfo.getAlternateMobileOne());
        CustomerInfo alternateTwoDetails = customerInfoRepository.existsByMobile(customerInfo.getAlternateMobileTwo());

        if(customerMobileDetails != null || alternateOneDetails != null || alternateTwoDetails != null) {
            throw new RuntimeException( "Customer already exists!");
        } else {
            return customerInfoRepository.save(customerInfo);
        }
    }

    public List<Object[]> getCustomerData(Ordertaking ordertaking){
        return customerInfoRepository.findByCustomerMobile(ordertaking.getCustomerMobile());
    }

    @Override
    public List<CustomerInfo> findCustomer(CustomerInfo customerInfo) {
        return customerInfoRepository.findCustomer(customerInfo.getCustomerMobile(), customerInfo.getCustomerFullName());
    }

    @Override
    public ResponseEntity<CustomerInfo> updateCustomer(CustomerInfo customerInfo, int CustomerId) {
        CustomerInfo customerupdate = customerInfoRepository.findCustomerDetails(CustomerId);

        customerupdate.setCustomerFullName(customerInfo.getCustomerFullName());
        customerupdate.setCustomerMobile(customerInfo.getCustomerMobile());
        customerupdate.setAlternateMobileOne(customerInfo.getAlternateMobileOne());
        customerupdate.setAlternateMobileTwo(customerInfo.getAlternateMobileTwo());
        customerupdate.setAddress(customerInfo.getAddress());
        customerupdate.setRemarks(customerInfo.getRemarks());

        customerInfoRepository.save(customerupdate);

        return ResponseEntity.ok(customerupdate);
    }

    @Override
    public int getCustomerId(CustomerInfo customerInfo) {
        return customerInfoRepository.getCustomerId(customerInfo.getCustomerMobile());
    }
}
