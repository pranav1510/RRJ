package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.DailyPrice;
import com.rrj.rrj_interface.repository.DailyPriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyPriceServiceImpl implements DailyPriceService{

    @Autowired
    private DailyPriceRepository dailyPriceRepository;

    @Override
    public List<Object[]> save(DailyPrice dailyPrice) {
        dailyPriceRepository.save(dailyPrice);
        return dailyPriceRepository.getDailyPrice();
    }

    @Override
    public List<Object[]> getprice() {
        return dailyPriceRepository.getDailyPrice();
    }
}
