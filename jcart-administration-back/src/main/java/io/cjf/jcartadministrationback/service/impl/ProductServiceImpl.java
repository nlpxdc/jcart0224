package io.cjf.jcartadministrationback.service.impl;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import io.cjf.jcartadministrationback.dao.ProductDetailMapper;
import io.cjf.jcartadministrationback.dao.ProductMapper;
import io.cjf.jcartadministrationback.dto.in.ProductCreateInDTO;
import io.cjf.jcartadministrationback.dto.in.ProductSearchInDTO;
import io.cjf.jcartadministrationback.dto.in.ProductUpdateInDTO;
import io.cjf.jcartadministrationback.dto.out.ProductListOutDTO;
import io.cjf.jcartadministrationback.dto.out.ProductShowOutDTO;
import io.cjf.jcartadministrationback.po.Product;
import io.cjf.jcartadministrationback.po.ProductDetail;
import io.cjf.jcartadministrationback.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductDetailMapper productDetailMapper;

    @Override
    @Transactional
    public Integer create(ProductCreateInDTO productCreateInDTO) {

        Product product = new Product();
        product.setProductCode(productCreateInDTO.getProductCode());
        product.setProductName(productCreateInDTO.getProductName());
        product.setPrice(productCreateInDTO.getPrice());
        product.setDiscount(productCreateInDTO.getDiscount());
        product.setStockQuantity(productCreateInDTO.getStockQuantity());
        product.setStatus(productCreateInDTO.getStatus());
        product.setMainPicUrl(productCreateInDTO.getMainPicUrl());
        product.setRewordPoints(productCreateInDTO.getRewordPoints());
        product.setSortOrder(productCreateInDTO.getSortOrder());
        product.setProductAbstract(productCreateInDTO.getProductAbstract());
        productMapper.insertSelective(product);

        Integer productId = product.getProductId();
        ProductDetail productDetail = new ProductDetail();
        productDetail.setProductId(productId);
        productDetail.setDescription(productCreateInDTO.getDescription());
        List<String> otherPicUrls = productCreateInDTO.getOtherPicUrls();
        productDetail.setOtherPicUrls(JSON.toJSONString(otherPicUrls));
        productDetailMapper.insertSelective(productDetail);


        return productId;
    }

    @Override
    @Transactional
    public void update(ProductUpdateInDTO productUpdateInDTO) {

        Product product = new Product();
        product.setProductId(productUpdateInDTO.getProductId());
        product.setProductName(productUpdateInDTO.getProductName());
        product.setPrice(productUpdateInDTO.getPrice());
        product.setDiscount(productUpdateInDTO.getDiscount());
        product.setStockQuantity(productUpdateInDTO.getStockQuantity());
        product.setMainPicUrl(productUpdateInDTO.getMainPicUrl());
        product.setStatus(productUpdateInDTO.getStatus());
        product.setRewordPoints(productUpdateInDTO.getRewordPoints());
        product.setSortOrder(productUpdateInDTO.getSortOrder());
        product.setProductAbstract(productUpdateInDTO.getProductAbstract());
        productMapper.updateByPrimaryKeySelective(product);

        ProductDetail productDetail = new ProductDetail();
        productDetail.setProductId(productUpdateInDTO.getProductId());
        productDetail.setDescription(productUpdateInDTO.getDescription());
        List<String> otherPicUrls = productUpdateInDTO.getOtherPicUrls();
        productDetail.setOtherPicUrls(JSON.toJSONString(otherPicUrls));
        productDetailMapper.updateByPrimaryKeySelective(productDetail);

    }

    @Override
    @Transactional
    public void delete(Integer productId) {
        productMapper.deleteByPrimaryKey(productId);
        productDetailMapper.deleteByPrimaryKey(productId);
    }

    @Override
    @Transactional
    public void batchDelete(List<Integer> productIds) {
        productMapper.batchDelete(productIds);
        productDetailMapper.batchDelete(productIds);
    }

    @Override
    public Page<ProductListOutDTO> search(ProductSearchInDTO productSearchInDTO,
                                          Integer pageNum) {
        PageHelper.startPage(pageNum, 10);
        Page<ProductListOutDTO> page = productMapper
                .search(productSearchInDTO.getProductCode(),
                        productSearchInDTO.getStatus(),
                        productSearchInDTO.getStockQuantity(),
                        productSearchInDTO.getPrice());
        return page;
    }

    @Override
    public ProductShowOutDTO getById(Integer productId) {
        Product product = productMapper.selectByPrimaryKey(productId);
        ProductDetail productDetail = productDetailMapper.selectByPrimaryKey(productId);

        ProductShowOutDTO productShowOutDTO = new ProductShowOutDTO();
        productShowOutDTO.setProductId(productId);
        productShowOutDTO.setProductCode(product.getProductCode());
        productShowOutDTO.setProductName(product.getProductName());
        productShowOutDTO.setPrice(product.getPrice());
        productShowOutDTO.setDiscount(product.getDiscount());
        productShowOutDTO.setStatus(product.getStatus());
        productShowOutDTO.setMainPicUrl(product.getMainPicUrl());
        productShowOutDTO.setRewordPoints(product.getRewordPoints());
        productShowOutDTO.setSortOrder(product.getSortOrder());
        productShowOutDTO.setStockQuantity(product.getStockQuantity());
        productShowOutDTO.setProductAbstract(product.getProductAbstract());

        productShowOutDTO.setDescription(productDetail.getDescription());
        String otherPicUrlsJson = productDetail.getOtherPicUrls();
        List<String> otherPicUrls = JSON.parseArray(otherPicUrlsJson, String.class);
        productShowOutDTO.setOtherPicUrls(otherPicUrls);

        return productShowOutDTO;
    }
}
