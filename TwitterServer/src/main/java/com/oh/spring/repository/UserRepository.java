package com.oh.spring.repository;

import com.oh.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

/**
 * @author cho.oh
 */
//@Repository("userRepository")
@Repository
public interface UserRepository extends JpaRepository<User, Serializable>{
//    User findById(Integer id);
    User findByUsername(String username);
    User findByEmail(String email);
//    Page<User> findAll(Pageable pageable);
}