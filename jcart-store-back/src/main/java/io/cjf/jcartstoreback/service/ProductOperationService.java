package io.cjf.jcartstoreback.service;

import io.cjf.jcartstoreback.po.ProductOperation;

import java.util.List;

public interface ProductOperationService {

    void count(Integer productId);

    List<ProductOperation> selectHotProduct();

}
