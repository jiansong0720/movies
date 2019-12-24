package com.song.service;

import com.song.basic.MyException;
import com.song.controller.res.MoviesDetailRes;
import com.song.util.ImageBase64;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MoviesService {

    public List hotMovies() {
        String URL = "https://movie.douban.com/chart";
        try {
            Document document = Jsoup.connect(URL).get();
            Elements metaData = document.getElementsByClass("item");
            return metaData.stream().map(element -> {
                Map map = new HashMap<>();
                Element data = element.select("img").get(0);
                map.put("name", data.attr("alt"));
                map.put("url", ImageBase64.imgBase64(data.attr("src")));
                map.put("score", element.getElementsByClass("rating_nums").first().text());
                return map;
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            throw new MyException("爬虫过程发生异常");
        }
    }

    public List getMoviesResource(String name) {
        try {
            String URL = "http://www.yongjiuzy1.com/index.php?m=vod-search";
            Connection connect = Jsoup.connect(URL);
            connect.data("wd", name);

            Document document = connect.post();
            Elements metaData = document.getElementsByClass("DianDian");
            return metaData.stream().map(element -> {
                Map map = new HashMap<>();
                Elements tdList = element.getElementsByTag("td");
                Element data = tdList.get(0).selectFirst("a");
                map.put("title", data.text());
                map.put("href", "http://www.yongjiuzy1.com" + data.attr("href"));
                return map;
            }).collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            throw new MyException("爬虫过程发生异常");
        }
    }

    public List<MoviesDetailRes> getMoviesDetail(String url) {
        try {
            List<MoviesDetailRes> list = new ArrayList<>();
            Elements elements = Jsoup.connect(url).get().getElementsByAttributeValue("name", "copy_sel");
            elements.stream().forEach(element -> {
                Attributes attributes = element.attributes();
                String value = attributes.get("value");
                if (value.contains("m3u8")) {
                    String[] s = value.split("\\$");
                    if (s.length > 1) {
                        MoviesDetailRes moviesDetailRes = new MoviesDetailRes();
                        moviesDetailRes.setHref(s[1]);
                        moviesDetailRes.setName(s[0]);

                        list.add(moviesDetailRes);
                    }
                }
            });
            return list;
        } catch (IOException e) {
            e.printStackTrace();
            throw new MyException("爬虫过程发生异常");
        }
    }

}
