package io.cjf.jcartstoreback.dao;

import io.cjf.jcartstoreback.po.ProductOperation;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductOperationMapper {
    int deleteByPrimaryKey(Integer productId);

    int insert(ProductOperation record);

    int insertSelective(ProductOperation record);

    ProductOperation selectByPrimaryKey(Integer productId);

    int updateByPrimaryKeySelective(ProductOperation record);

    int updateByPrimaryKey(ProductOperation record);
}