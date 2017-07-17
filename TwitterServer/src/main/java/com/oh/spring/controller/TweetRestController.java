package com.oh.spring.controller;

import com.oh.spring.entity.Tweet;
import com.oh.spring.repository.TweetRepository;
import com.oh.spring.security.LoginUser;
import com.oh.spring.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author cho.oh
 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TweetRestController {
//    @Autowired
//    private TweetService tweetService;
//    @Autowired
//    private TweetRepository tweetRepository;
//
//    @GetMapping("/getTweet")
//    public List<Tweet> getTweet(@AuthenticationPrincipal LoginUser loginUser) {
//        int userId = loginUser.getLoginUserId();
//        List<Tweet> tweetList = tweetRepository.findTweetsByUser_UserIdByTweetIdDesc(userId);
//        return tweetList;
//    }
//
//    @GetMapping("/list")
//    @ResponseBody
//    public ResponseEntity<List<Tweet>> listTweets() {
//        List<Tweet> tweets = tweetService.findAll();
//        return new ResponseEntity<List<Tweet>>(tweets, HttpStatus.OK);
//    }
//
//    @RequestMapping("/tweet")
//    public Tweet receiveTweet(@RequestParam("content") String tweet) {
//        Tweet tweetEntity = new Tweet();
//        tweetEntity.setTweet_content(tweet);
//        tweetEntity.setTweet_datetime(LocalDateTime.now());
//        tweetService.create(tweetEntity);
//        return tweetEntity;
//    }
}
