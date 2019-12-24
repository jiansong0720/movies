package com.song.controller.res;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MoviesDetailRes {

    @ApiModelProperty("播放链接")
    private String href;

    @ApiModelProperty("资源")
    private String name;
}
