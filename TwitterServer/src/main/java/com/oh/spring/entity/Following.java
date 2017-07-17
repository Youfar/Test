package com.oh.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author cho.oh
 */
@Entity
@Table(name="FOLLOWING")
public class Following {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_FOLLOWING_ID")
    private int id;
    @ManyToOne
    @JoinColumn(name = "FOLLOWING_ID")
    private User followedID;
    @ManyToOne
    @JoinColumn(name = "FOLLOWER_ID")
    private User followerID;

    public Following() {

    }

    public User getFollowedID() {
        return followedID;
    }

    public void setFollowedID(User followedID) {
        this.followedID = followedID;
    }

    public User getFollowerID() {
        return followerID;
    }

    public void setFollowerID(User followerID) {
        this.followerID = followerID;
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
