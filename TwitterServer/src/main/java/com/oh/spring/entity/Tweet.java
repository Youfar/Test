package com.oh.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

/**
 * @author cho.oh
 */
@Entity
@Table(name="TWEET")
public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TWEET_ID")
    private int tweet_id;
    @Column(name = "USER_ID")
    private int user_id;
    @Column(name = "TWEET_BODY")
    private String tweet_content;
    @Column(name = "TWEET_DATETIME")
    private LocalDateTime tweet_datetime;

    public Tweet() {

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getTweet_content() {
        return tweet_content;
    }

    public void setTweet_content(String tweet_content) {
        this.tweet_content = tweet_content;
    }

    public LocalDateTime getTweet_datetime() {
        return tweet_datetime;
    }

    public void setTweet_datetime(LocalDateTime tweet_datetime) {
        this.tweet_datetime = tweet_datetime;
    }

    public int getTweet_id() {
        return tweet_id;
    }

    public void setTweet_id(int tweet_id) {
        this.tweet_id = tweet_id;
    }
}
