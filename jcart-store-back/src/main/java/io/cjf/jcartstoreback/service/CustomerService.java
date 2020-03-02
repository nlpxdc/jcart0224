package io.cjf.jcartstoreback.service;

import io.cjf.jcartstoreback.dto.in.CustomerRegisterInDTO;
import io.cjf.jcartstoreback.po.Customer;

public interface CustomerService {

    Integer register(CustomerRegisterInDTO customerRegisterInDTO);

    Customer getByUsername(String username);

    Customer getById(Integer customerId);

    Customer getByEmail(String email);

    void update(Customer customer);

}
