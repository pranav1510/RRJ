package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Primary;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerInfo {

    private String CustomerFullName;
    @Id
    private String CustomerMobile;
    private String AlternateMobileOne;
    private String AlternateMobileTwo;
    private String Address;
    private String Remarks;
}
