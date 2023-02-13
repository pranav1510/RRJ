package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.Ordertaking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdertakingRepository extends JpaRepository<Ordertaking,Integer> {

    @Query("select e.OrderId FROM Ordertaking e ORDER BY e.OrderId DESC LIMIT 1")
    List<String> findOrderId(String OrderId);

    @Query("select e.OrderId, e.CustomerId FROM Ordertaking e WHERE e.CustomerMobile = ?1 OR e.CustomerFullName = ?2")
    List<Object[]> findByCustomerMobile(String CustomerMobile, String CustomerFullName);

    @Query("select e FROM Ordertaking e WHERE e.OrderId = ?1 OR e.CustomerMobile = ?2 OR e.CustomerFullName = ?3 ORDER BY e.OrderId DESC")
    List<Ordertaking> getOrderDetails(String OrderId, String CustomerMobile, String CustomerFullName);

    @Query("select e FROM Ordertaking e WHERE e.OrderId = ?1")
    public Ordertaking findByOrderId(String OrderId);

    @Query("select e.CustomerId, e.CustomerFullName, e.CustomerMobile FROM Ordertaking e WHERE e.OrderId =?1")
    public List<Object[]> getCustomerId(String OrderId);

    @Query("select e FROM Ordertaking e WHERE e.CustomerId =?1 ORDER BY e.OrderId DESC")
    public List<Ordertaking> ordersbycustomerid(int CustomerId);

    @Query("select e FROM Ordertaking e WHERE e.OrderStatus != 'Completed Successfully!' AND e.OrderStatus != 'Cancelled'")
    public List<Ordertaking> getPendingOrders();
}
