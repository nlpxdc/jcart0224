package io.cjf.jcartstoreback.service;


import io.cjf.jcartstoreback.dto.out.ProductShowOutDTO;

public interface ProductService {

    ProductShowOutDTO getById(Integer productId);

}
