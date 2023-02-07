package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.TransactionInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionInfoRepository extends JpaRepository<TransactionInfo, String> {




}
