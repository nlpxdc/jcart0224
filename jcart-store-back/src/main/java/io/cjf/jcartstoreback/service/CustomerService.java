package io.cjf.jcartstoreback.service;

import io.cjf.jcartstoreback.dto.in.CustomerRegisterInDTO;

public interface CustomerService {

    Integer register(CustomerRegisterInDTO customerRegisterInDTO);

}
