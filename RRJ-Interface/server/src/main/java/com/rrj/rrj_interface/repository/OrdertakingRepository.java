package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.Ordertaking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdertakingRepository extends JpaRepository<Ordertaking,Integer> {

    @Query("select e FROM Ordertaking e ORDER BY e.OrderId DESC LIMIT 1")
    List<Ordertaking> findByOrderId(String OrderId);
}
