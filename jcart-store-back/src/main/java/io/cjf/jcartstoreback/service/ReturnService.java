package io.cjf.jcartstoreback.service;

import com.github.pagehelper.Page;
import io.cjf.jcartstoreback.po.Return;

public interface ReturnService {

    Integer create(Return aReturn);

    Page<Return> getPageByCustomerId(Integer customerId, Integer pageNum);

}
