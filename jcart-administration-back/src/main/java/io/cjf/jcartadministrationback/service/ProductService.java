package io.cjf.jcartadministrationback.service;

import io.cjf.jcartadministrationback.dto.in.ProductCreateInDTO;
import io.cjf.jcartadministrationback.dto.in.ProductUpdateInDTO;

public interface ProductService {

    Integer create(ProductCreateInDTO productCreateInDTO);

    void update(ProductUpdateInDTO productUpdateInDTO);

}
