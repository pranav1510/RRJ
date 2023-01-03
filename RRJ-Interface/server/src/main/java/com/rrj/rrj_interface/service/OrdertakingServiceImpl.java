package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.repository.OrdertakingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdertakingServiceImpl implements OrdertakingService {

    @Autowired
    private OrdertakingRepository ordertakingrepository;
    @Override
    public Ordertaking save(Ordertaking ordertaking) {
        return ordertakingrepository.save(ordertaking);
    }

    @Override
    public List<Ordertaking> getOrderData(Ordertaking ordertaking) {
        return ordertakingrepository.findByOrderId(ordertaking.getOrderId());
    }
}
