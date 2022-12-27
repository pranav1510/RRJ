package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.repository.OrdertakingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdertakingServiceImpl implements OrdertakingService {

    @Autowired
    private OrdertakingRepository ordertakingrepository;
    @Override
    public Ordertaking save(Ordertaking ordertaking) {
        return ordertakingrepository.save(ordertaking);
    }

}
