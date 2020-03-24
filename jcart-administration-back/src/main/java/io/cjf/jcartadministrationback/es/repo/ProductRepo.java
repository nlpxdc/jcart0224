package io.cjf.jcartadministrationback.es.repo;

import io.cjf.jcartadministrationback.es.doc.ProductDoc;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ProductRepo extends ElasticsearchRepository<ProductDoc, Integer> {

}
