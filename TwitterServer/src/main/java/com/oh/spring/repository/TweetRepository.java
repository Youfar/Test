package com.oh.spring.repository;

import com.oh.spring.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

/**
 * @author cho.oh
 */
@Repository
public interface TweetRepository extends JpaRepository<Tweet, Serializable>{

    //List<Tweet> findTweetsByUser_UserIdByTweetIdDesc(Integer userId);


}
