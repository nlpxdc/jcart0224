package io.cjf.jcartstoreback.dao;

import com.github.pagehelper.Page;
import io.cjf.jcartstoreback.po.Order;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMapper {
    int deleteByPrimaryKey(Long orderId);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Long orderId);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    Page<Order> selectByCustomerId(@Param("customerId") Integer customerId);

}