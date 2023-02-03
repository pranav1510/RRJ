package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ClosingInfo;
import com.rrj.rrj_interface.repository.ClosingInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClosingInfoServiceImpl implements ClosingInfoService{

    @Autowired
    private ClosingInfoRepository closingInfoRepository;

    @Override
    public ClosingInfo save(ClosingInfo closingInfo){
        return closingInfoRepository.save(closingInfo);
    }

    @Override
    public List<Object[]> getdetails() {
        return closingInfoRepository.getdetails();
    }

    @Override
    public boolean getDate(ClosingInfo closingInfo) {
        return closingInfoRepository.existsById(closingInfo.getDate());
    }
}
