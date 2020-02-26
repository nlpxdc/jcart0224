package io.cjf.jcartadministrationback.dao;

import com.github.pagehelper.Page;
import io.cjf.jcartadministrationback.dto.out.ProductListOutDTO;
import io.cjf.jcartadministrationback.po.Product;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductMapper {
    int deleteByPrimaryKey(Integer productId);

    int insert(Product record);

    int insertSelective(Product record);

    Product selectByPrimaryKey(Integer productId);

    int updateByPrimaryKeySelective(Product record);

    int updateByPrimaryKey(Product record);

//    custom

    int batchDelete(@Param("productIds") List<Integer> productIds);

    Page<ProductListOutDTO> search();

}