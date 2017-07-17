package com.oh.spring.repository;

import com.oh.spring.entity.Following;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;
import java.util.List;

/**
 * @author cho.oh
 */
public interface FollowingRepository extends JpaRepository<Following, Serializable>{
    List<Following> findAll();
    //get following list of userid
    List<Following> findAllByFollowedIDOrderById(Integer followedID);
    //get follower list of userid
    List<Following> findAllByFollowerIDOrderById(Integer followerID);
}
