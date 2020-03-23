package io.cjf.jcartstoreback.service;


import com.github.pagehelper.Page;
import io.cjf.jcartstoreback.dto.in.ProductSearchInDTO;
import io.cjf.jcartstoreback.dto.out.ProductListOutDTO;
import io.cjf.jcartstoreback.dto.out.ProductShowOutDTO;
import io.cjf.jcartstoreback.po.Product;

public interface ProductService {

    Product getById(Integer productId);

    ProductShowOutDTO getShowById(Integer productId);

    Page<ProductListOutDTO> search(ProductSearchInDTO productSearchInDTO, Integer pageNum);

}
