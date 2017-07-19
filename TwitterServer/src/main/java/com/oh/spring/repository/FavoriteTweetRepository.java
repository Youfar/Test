package com.oh.spring.repository;

import com.oh.spring.entity.FavoriteTweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteTweetRepository extends JpaRepository<FavoriteTweet, Long>{
    List<FavoriteTweet> findFavoriteTweetsByUser_UserIdOrderByTweetDesc(Integer userId);
}
