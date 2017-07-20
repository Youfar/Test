package com.oh.spring.controller;

import com.oh.spring.entity.FavoriteTweet;
import com.oh.spring.entity.Tweet;
import com.oh.spring.entity.User;
import com.oh.spring.repository.FavoriteTweetRepository;
import com.oh.spring.repository.TweetRepository;
import com.oh.spring.repository.UserRepository;
import com.oh.spring.security.LoginUser;
import com.oh.spring.service.TweetService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @author cho.oh
 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TweetRestController {
    @Autowired
    private TweetService tweetService;
    @Autowired
    private TweetRepository tweetRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FavoriteTweetRepository favoriteTweetRepository;


    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<Tweet>> listTweets() {
        List<Tweet> tweets = tweetService.findAll();
        return new ResponseEntity<List<Tweet>>(tweets, HttpStatus.OK);
    }

    @PostMapping("/tweet")
    public Tweet receiveTweet(@AuthenticationPrincipal LoginUser loginUser, @RequestParam("tweetContent") String tweet) {
        int userId = loginUser.getLoginUserId();
        User user = userRepository.findOne(userId);
        if (user == null) {
            return null;
        }
        if (tweet.length() > 140) {
            return null;
        }
        Tweet tweetEntity = new Tweet();
        tweetEntity.setTweetContent(tweet);
        tweetEntity.setCreator(user);
        tweetRepository.save(tweetEntity);
        return tweetEntity;
    }

    @PostMapping("/deleteTweet")
    @Transactional
    public String deleteTweet(@AuthenticationPrincipal LoginUser loginUser, @RequestParam("tweetId") long tweetId) throws NotFoundException {
        int userId = loginUser.getLoginUserId();
        Tweet targetTweet = tweetRepository.findTweetByCreator_UserIdAndTweetId(userId, tweetId);
        if (targetTweet == null) {
            throw new NotFoundException("You are not owner of the tweet");
        }
        tweetRepository.removeByCreator_UserIdAndAndTweetId(userId, tweetId);
        return "SUCCESS";
    }

//    @RequestMapping("/tweet")
//    public Tweet receiveTweet(@RequestParam("content") String tweet) {
//        Tweet tweetEntity = new Tweet();
//        tweetEntity.setTweetContent(tweet);
//        tweetEntity.setTweetDatetime(LocalDateTime.now());
//        tweetService.create(tweetEntity);
//        return tweetEntity;
//    }

    @GetMapping("/getTweet")
    public List<Tweet> getTweet(@AuthenticationPrincipal LoginUser loginUser) {
        int userId = loginUser.getLoginUserId();
        List<Tweet> tweetList = tweetRepository.findByCreator_UserIdOrderByTweetIdDesc(userId);
        return tweetList;
    }

    @GetMapping("/getFavoriteTweet")
    public List<FavoriteTweet> getFavoriteTweet(@AuthenticationPrincipal LoginUser loginUser) {
        int userId = loginUser.getLoginUserId();
        List<FavoriteTweet> favoriteTweetList = favoriteTweetRepository.findFavoriteTweetsByUser_UserIdOrderByTweetDesc(userId);
//        List<FavoriteTweet> favoriteTweetList = favoriteTweetRepository.findFavoriteTweetsByUser_UserIdOrderBOrderByTweetId(userId);
        return favoriteTweetList;
    }
}
