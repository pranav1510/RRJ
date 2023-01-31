package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.DailyPrice;

import java.util.List;

public interface DailyPriceService {

    public List<Object[]> save(DailyPrice dailyPrice);

    public List<Object[]> getprice();
}
