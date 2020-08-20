package com.example.reddit.service;

import com.example.reddit.domain.Comment;
import com.example.reddit.domain.Post;
import com.example.reddit.domain.User;
import com.example.reddit.repository.CommentRepository;
import com.example.reddit.repository.PostRepository;
import com.example.reddit.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, UserRepository userRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    @Transactional
    public Comment create(String text, User user, Post post) {
        Comment comment = new Comment(text);
        comment.setUser(user);
        comment.setPost(post);
        return commentRepository.save(comment);
    }

    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }

    public void delete(Comment comment, User user, Post post) {
        user.getComments().removeIf(c -> c.getId().equals(comment.getId()));
        post.getComments().removeIf(c -> c.getId().equals(comment.getId()));
        userRepository.save(user);
        postRepository.save(post);
        commentRepository.delete(comment);
    }

    @Transactional
    public Comment reply(String text, Comment parent, User user, Post post) {
        Comment comment = new Comment(text);
        comment.setParent(parent);
        comment.setUser(user);
        comment.setPost(post);
        return commentRepository.save(comment);
    }

    public Comment upVote(Comment comment, User user, boolean voted) {
        if (!voted) {
            comment.getRating().upVote();
            user = user.voteComment(comment.getId(), 1);
        }
        else {
            comment.getRating().removeDownVote();
            user = user.voteComment(comment.getId(), 0);
        }
        userRepository.save(user);
        return commentRepository.save(comment);
    }

    public Comment downVote(Comment comment, User user, boolean voted) {
        if(!voted) {
            comment.getRating().downVote();
            user = user.voteComment(comment.getId(), -1);
        }
        else {
            comment.getRating().removeUpVote();
            user = user.voteComment(comment.getId(), 0);
        }
        userRepository.save(user);
        return commentRepository.save(comment);
    }
}
