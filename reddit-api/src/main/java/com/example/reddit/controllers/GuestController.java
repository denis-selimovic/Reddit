package com.example.reddit.controllers;

import com.example.reddit.domain.Post;
import com.example.reddit.service.PostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/guest")
public class GuestController {

    private final PostService postService;

    public GuestController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts")
    public Set<Post> getPosts() {
        return postService.findAll();
    }
}
