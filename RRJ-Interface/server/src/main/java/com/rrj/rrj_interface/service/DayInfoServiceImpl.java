package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.DayInfo;
import com.rrj.rrj_interface.repository.DayInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayInfoServiceImpl implements DayInfoService{

    @Autowired
    private DayInfoRepository dayInfoRepository;

    @Override
    public DayInfo save(DayInfo dayInfo) {
        return dayInfoRepository.save(dayInfo);
    }
}
