package io.cjf.jcartadministrationback.service;

import io.cjf.jcartadministrationback.dto.in.ProductCreateInDTO;

public interface ProductService {

    Integer create(ProductCreateInDTO productCreateInDTO);

}
