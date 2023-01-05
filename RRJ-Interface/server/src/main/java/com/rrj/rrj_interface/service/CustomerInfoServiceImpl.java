package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.repository.CustomerInfoRepository;
import com.rrj.rrj_interface.repository.OrdertakingRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

        if(customerInfoRepository.existsById(customerInfo.getCustomerMobile()) || customerInfoRepository.existsById(customerInfo.getAlternateMobileOne()) || customerInfoRepository.existsById(customerInfo.getAlternateMobileTwo())) {
            throw new RuntimeException( "Customer already exists!");
        } else {
            return customerInfoRepository.save(customerInfo);
        }
    }

    public List<String> getCustomerData(Ordertaking ordertaking){
        return customerInfoRepository.findByCustomerMobile(ordertaking.getCustomerMobile());
    }
}
