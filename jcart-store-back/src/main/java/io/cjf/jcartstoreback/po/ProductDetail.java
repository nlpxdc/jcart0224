package io.cjf.jcartstoreback.po;

public class ProductDetail {
    private Integer productId;

    private String otherPicUrls;

    private String description;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getOtherPicUrls() {
        return otherPicUrls;
    }

    public void setOtherPicUrls(String otherPicUrls) {
        this.otherPicUrls = otherPicUrls == null ? null : otherPicUrls.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }
}