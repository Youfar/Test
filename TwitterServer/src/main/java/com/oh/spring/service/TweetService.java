package com.oh.spring.service;

import com.oh.spring.entity.Tweet;

import java.util.List;

/**
 * @author cho.oh
 */
public interface TweetService {

    Tweet create(Tweet tweet);
    //TODO tweet not found
    Tweet delete(int id);
    List<Tweet> findAll();
}
