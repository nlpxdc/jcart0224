package io.cjf.jcartstoreback.dto.in;

public class ProductSearchInDTO {
    private String keyword;
    private Byte sortBy;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public Byte getSortBy() {
        return sortBy;
    }

    public void setSortBy(Byte sortBy) {
        this.sortBy = sortBy;
    }
}
