package com.oh.spring.service;

import com.oh.spring.entity.User;

import java.util.List;

/**
 * @author cho.oh
 */
public interface UserService {
    List<User> findAll();

//    User findById(Integer id);

    User findUserByEmail(String email);

    User findUserByName(String username);

    void saveUser(User user);

//    public void saveCustomer(User theUser);
}
