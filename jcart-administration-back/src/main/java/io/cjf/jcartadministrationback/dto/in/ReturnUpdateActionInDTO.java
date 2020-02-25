package io.cjf.jcartadministrationback.dto.in;

public class ReturnUpdateActionInDTO {
    private Integer returnId;
    private Byte action;

    public Integer getReturnId() {
        return returnId;
    }

    public void setReturnId(Integer returnId) {
        this.returnId = returnId;
    }

    public Byte getAction() {
        return action;
    }

    public void setAction(Byte action) {
        this.action = action;
    }
}
