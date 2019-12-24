package com.song.basic;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 全局异常处理
 */
@ControllerAdvice
public class MyControllerAdvice {

    @ResponseBody
    @ExceptionHandler(value = MyException.class)
    public ResponseBean myErrorHandler(MyException ex) {
        return ResponseBean.error(-1, ex.getMessage());
    }

}
