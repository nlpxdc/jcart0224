package io.cjf.jcartstoreback.po;

import java.util.Date;

public class ReturnHistory {
    private Long returnHistoryId;

    private Integer returnId;

    private Date time;

    private Byte returnStatus;

    private String comment;

    private Boolean customerNotified;

    public Long getReturnHistoryId() {
        return returnHistoryId;
    }

    public void setReturnHistoryId(Long returnHistoryId) {
        this.returnHistoryId = returnHistoryId;
    }

    public Integer getReturnId() {
        return returnId;
    }

    public void setReturnId(Integer returnId) {
        this.returnId = returnId;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Byte getReturnStatus() {
        return returnStatus;
    }

    public void setReturnStatus(Byte returnStatus) {
        this.returnStatus = returnStatus;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Boolean getCustomerNotified() {
        return customerNotified;
    }

    public void setCustomerNotified(Boolean customerNotified) {
        this.customerNotified = customerNotified;
    }
}