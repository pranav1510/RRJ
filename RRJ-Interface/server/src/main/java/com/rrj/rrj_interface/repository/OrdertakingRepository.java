package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.Ordertaking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdertakingRepository extends JpaRepository<Ordertaking,Integer> {

    @Query("select e.OrderId FROM Ordertaking e ORDER BY e.OrderId DESC LIMIT 1")
    List<String> findOrderId(String OrderId);

    @Query("select e.OrderId FROM Ordertaking e WHERE e.CustomerMobile = ?1 OR e.CustomerFullName = ?2")
    List<String> findByCustomerMobile(String CustomerMobile, String CustomerFullName);

    @Query("select e FROM Ordertaking e WHERE e.OrderId = ?1 OR e.CustomerMobile = ?2 OR e.CustomerFullName = ?3")
    List<Ordertaking> getOrderDetails(String OrderId, String CustomerMobile, String CustomerFullName);

    @Query("select e FROM Ordertaking e WHERE e.OrderId = ?1")
    public Ordertaking findByOrderId(String OrderId);

}
