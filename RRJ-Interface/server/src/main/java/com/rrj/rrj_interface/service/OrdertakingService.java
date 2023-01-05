package com.rrj.rrj_interface.service;

;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.model.PaymentInfo;

import java.util.List;

public interface OrdertakingService {

    public Ordertaking save(Ordertaking ordertaking);

    public List<String> getOrderData(Ordertaking ordertaking);

    public List<String> getOrderInfoAtPayment(PaymentInfo paymentInfo);
}
