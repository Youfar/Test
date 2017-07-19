package com.oh.spring.entity;

import javax.persistence.*;

@Entity
@Table(name="FAVORITE_TWEET")
public class FavoriteTweet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FAVORITE_TWEET_ID")
    private Long favoriteTweetId;
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
    @ManyToOne
    @JoinColumn(name = "TWEET_ID")
    private Tweet tweet;

    public Long getFavoriteTweetId() {
        return favoriteTweetId;
    }

    public void setFavoriteTweetId(Long favoriteTweetId) {
        this.favoriteTweetId = favoriteTweetId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tweet getTweet() {
        return tweet;
    }

    public void setTweet(Tweet tweet) {
        this.tweet = tweet;
    }
}
