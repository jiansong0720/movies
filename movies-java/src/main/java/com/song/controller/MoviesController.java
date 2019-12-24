package com.song.controller;

import com.song.basic.ResponseBean;
import com.song.controller.res.MoviesDetailRes;
import com.song.service.MoviesService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 电影
 */
@RestController
public class MoviesController {

    @Resource
    private MoviesService moviesService;

    @GetMapping("/movives/hot")
    public ResponseBean hot() {
        return ResponseBean.ok(moviesService.hotMovies());
    }

    @GetMapping("/movives/resource")
    public ResponseBean getMoviesResource(@RequestParam("name") String name) {
        return ResponseBean.ok(moviesService.getMoviesResource(name));
    }

    @GetMapping("/movives/detail")
    public ResponseBean<List<MoviesDetailRes>> getDetail(@RequestParam("url") String url) {
        return ResponseBean.ok(moviesService.getMoviesDetail(url));
    }

}
