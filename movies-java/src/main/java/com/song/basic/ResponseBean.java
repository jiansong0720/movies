package com.song.basic;

import lombok.Data;

/**
 * 返回对象
 */
@Data
public class ResponseBean<T> {

    private Integer status;

    private T data;

    private String message;

    public ResponseBean() {
    }

    public ResponseBean(Integer status) {
        this.status = status;
    }

    public ResponseBean(Integer status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseBean(Integer status, String message, T data) {
        this.status = status;
        this.data = data;
        this.message = message;
    }

    public static ResponseBean ok() {
        return new ResponseBean(0);
    }

    public static ResponseBean ok(Object data) {
        return new ResponseBean(0, "操作成功", data);
    }

    public static ResponseBean error(Integer status, String message) {
        return new ResponseBean(status, message);
    }
}
