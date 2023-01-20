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

        if(customerInfoRepository.exists(customerInfo.getCustomerMobile()) || customerInfoRepository.existsById(customerInfo.getAlternateMobileOne()) || customerInfoRepository.existsById(customerInfo.getAlternateMobileTwo())) {
            throw new RuntimeException( "Customer already exists!");
        } else {
            return customerInfoRepository.save(customerInfo);
        }
    }

    public List<String> getCustomerData(Ordertaking ordertaking){
        return customerInfoRepository.findByCustomerMobile(ordertaking.getCustomerMobile());
    }

    @Override
    public List<CustomerInfo> findCustomer(CustomerInfo customerInfo) {
        return customerInfoRepository.findCustomer(customerInfo.getCustomerMobile(), customerInfo.getCustomerFullName());
    }

    @Override
    public ResponseEntity<CustomerInfo> updateCustomer(CustomerInfo customerInfo, String CustomerMobile) {
        CustomerInfo customerupdate = customerInfoRepository.findCustomerDetails(CustomerMobile);

        customerupdate.setCustomerFullName(customerInfo.getCustomerFullName());
        customerupdate.setCustomerMobile(customerInfo.getCustomerMobile());
        customerupdate.setAlternateMobileOne(customerInfo.getAlternateMobileOne());
        customerupdate.setAlternateMobileTwo(customerInfo.getAlternateMobileTwo());
        customerupdate.setAddress(customerInfo.getAddress());
        customerupdate.setRemarks(customerInfo.getRemarks());

        customerInfoRepository.save(customerupdate);

        return ResponseEntity.ok(customerupdate);
    }
}
