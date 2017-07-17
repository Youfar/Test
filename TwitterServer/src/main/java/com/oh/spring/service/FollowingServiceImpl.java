package com.oh.spring.service;

import com.oh.spring.entity.Following;
import com.oh.spring.entity.User;
import com.oh.spring.repository.FollowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author cho.oh
 */
@Service
public class FollowingServiceImpl {

    @Autowired
    private FollowingRepository followingRepository;

    @Transactional
    public List<Following> findFollowingbyUserID(Integer followedID) {
        return followingRepository.findAllByFollowedIDOrderById(followedID);
    }

    @Transactional
    public List<Following> findFollowerbyUserID(Integer followerID) {
        return followingRepository.findAllByFollowedIDOrderById(followerID);
    }
}
