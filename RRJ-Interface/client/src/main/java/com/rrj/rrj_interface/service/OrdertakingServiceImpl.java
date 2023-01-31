package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.repository.OrdertakingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public List<String> getOrderData(Ordertaking ordertaking) {
        try {
            return ordertakingrepository.findOrderId(ordertaking.getOrderId());
        } catch (Exception e) {
            return List.of("undefined");
        }
    }

    @Override
    public List<Object[]> getOrderInfoAtPayment(PaymentInfo paymentInfo) {
        return ordertakingrepository.findByCustomerMobile(paymentInfo.getCustomerMobile(), paymentInfo.getCustomerFullName());
    }

    @Override
    public List<Ordertaking> getOrderDetails(Ordertaking ordertaking) {
        return ordertakingrepository.getOrderDetails(ordertaking.getOrderId(), ordertaking.getCustomerMobile(), ordertaking.getCustomerFullName());
    }

    @Override
    public ResponseEntity<Ordertaking> updateOrder(Ordertaking ordertaking, String OrderId) {
        Ordertaking updateorder = ordertakingrepository.findByOrderId(OrderId);

        updateorder.setExpectedDeliveryDate(ordertaking.getExpectedDeliveryDate());
        updateorder.setOrderStatus(ordertaking.getOrderStatus());
        updateorder.setGST(ordertaking.getGst());
        updateorder.setOrderEnteredBy(ordertaking.getOrderEnteredBy());
        updateorder.setOrderReceivedBy(ordertaking.getOrderReceivedBy());
        updateorder.setCustomerRemarks(ordertaking.getCustomerRemarks());
        updateorder.setOrderReceiverRemarks(ordertaking.getOrderReceiverRemarks());
        updateorder.setCustomerId(ordertaking.getCustomerId());

        ordertakingrepository.save(updateorder);

        return ResponseEntity.ok(updateorder);
    }

    @Override
    public List<Object[]> getCustomerId(Ordertaking ordertaking) {
        return ordertakingrepository.getCustomerId(ordertaking.getOrderId());
    }

    @Override
    public List<Ordertaking> getOrdersByCustomerId(Ordertaking ordertaking) {
        return ordertakingrepository.ordersbycustomerid(ordertaking.getCustomerId());
    }
}
