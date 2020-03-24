package io.cjf.jcartadministrationback.es.doc;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "productdoc")
public class ProductDoc {
    @Id
    private Integer productId;
    private String productCode;
    private String productName;
    private String productAbstract;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductAbstract() {
        return productAbstract;
    }

    public void setProductAbstract(String productAbstract) {
        this.productAbstract = productAbstract;
    }
}
