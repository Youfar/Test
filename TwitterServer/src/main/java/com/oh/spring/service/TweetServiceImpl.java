package com.oh.spring.service;

import com.oh.spring.entity.Tweet;
import com.oh.spring.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author cho.oh
 */
@Service
public class TweetServiceImpl implements TweetService{

    @Autowired
    private TweetRepository tweetRepository;

    @Override
    @Transactional
    public Tweet create(Tweet tweet) {
        Tweet createdTweet = tweet;
        return tweetRepository.save(createdTweet);
    }

    @Override
    @Transactional
    //TODO not found
    public Tweet delete(int id) {
        Tweet deletedShop = tweetRepository.findOne(id);
        tweetRepository.delete(deletedShop);
        return deletedShop;
    }

    @Override
    @Transactional
    public List<Tweet> findAll() {
        return tweetRepository.findAll();
    }
}
