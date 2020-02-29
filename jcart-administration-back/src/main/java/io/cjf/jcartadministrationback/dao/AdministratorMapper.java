package io.cjf.jcartadministrationback.dao;

import io.cjf.jcartadministrationback.po.Administrator;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorMapper {
    int deleteByPrimaryKey(Integer administratorId);

    int insert(Administrator record);

    int insertSelective(Administrator record);

    Administrator selectByPrimaryKey(Integer administratorId);

    int updateByPrimaryKeySelective(Administrator record);

    int updateByPrimaryKey(Administrator record);

//    custom

    Administrator selectByUsername(@Param("username") String username);

}