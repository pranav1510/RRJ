package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.DayInfo;
import com.rrj.rrj_interface.repository.DayInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayInfoServiceImpl implements DayInfoService{

    @Autowired
    private DayInfoRepository dayInfoRepository;

    @Override
    public DayInfo save(DayInfo dayInfo) {
        return dayInfoRepository.save(dayInfo);
    }

    @Override
    public List<DayInfo> getdetails(DayInfo dayInfo) {
        return dayInfoRepository.getdetails(dayInfo.getDate());
    }

    @Override
    public ResponseEntity<DayInfo> updateinfo(DayInfo dayInfo, String Id) {
        DayInfo infoupdate = dayInfoRepository.findbyId(Id);

        infoupdate.setCashIn(dayInfo.getCashIn());
        infoupdate.setCashOut(dayInfo.getCashOut());
        infoupdate.setGoldIn(dayInfo.getGoldIn());
        infoupdate.setGoldOut(dayInfo.getGoldOut());
        infoupdate.setSilverIn(dayInfo.getSilverIn());
        infoupdate.setSilverOut(dayInfo.getSilverOut());
        infoupdate.setAccountIn(dayInfo.getAccountIn());
        infoupdate.setAccountOut(dayInfo.getAccountOut());

        dayInfoRepository.save(infoupdate);

        return ResponseEntity.ok(infoupdate);
    }
}
