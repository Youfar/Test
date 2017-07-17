package com.oh.spring.controller;

import com.oh.spring.entity.Following;
import com.oh.spring.entity.Tweet;
import com.oh.spring.entity.User;
import com.oh.spring.repository.FollowingRepository;
import com.oh.spring.service.TweetService;
import com.oh.spring.service.UserService;
import javafx.scene.text.FontWeight;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author cho.oh
 */
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/user")
public class UserRestController {
    @Autowired
    private UserService userService;
    @Autowired
    private FollowingRepository followingRepository;

    @GetMapping("/list")
    @ResponseBody
    public ResponseEntity<List<User>> listCustomers() {
        List<User> users = userService.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

//    @GetMapping("/following/{userName}")
//    @ResponseBody
//    public ResponseEntity<List<Following>> listFollowings(@PathVariable String userName) throws NotFoundException{
//        User user = userService.findUserByName(userName);
//        if (user == null) {
//            throw new NotFoundException("user is not found");
//        }
//        List<Following> followingList = followingRepository.findAllByFollowedIDOrderById(user.getUserId());
//        return new ResponseEntity<List<Following>>(followingList, HttpStatus.OK);
//    }

    @GetMapping("/following/")
    @ResponseBody
    public ResponseEntity<List<Following>> listFollowings() throws NotFoundException{
        List<Following> followings = followingRepository.findAll();
        return new ResponseEntity<List<Following>>(followings, HttpStatus.OK);
    }

//    @GetMapping("/following/")
//    @ResponseBody
//    public ResponseEntity<List<Following>> listFollowings() throws NotFoundException{
//        User user = userService.findUserByName("aaa");
//        if (user == null) {
//            throw new NotFoundException("user is not found");
//        }
//        List<Following> followingList = followingRepository.findAllByFollowedIDOrderById(user.getUserId());
//        return new ResponseEntity<List<Following>>(followingList, HttpStatus.OK);
//    }

//    @GetMapping("/followed")
//    @ResponseBody
//    public ResponseEntity<List<Following>> listFollowers() {
//        List<User> users = userService.findAll();
//        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
//    }


}
