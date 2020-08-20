package com.example.reddit.controllers;

import com.example.reddit.domain.Comment;
import com.example.reddit.domain.Post;
import com.example.reddit.domain.User;
import com.example.reddit.domain.enums.RatingType;
import com.example.reddit.http.request.CreateCommentRequest;
import com.example.reddit.http.response.GenericResponse;
import com.example.reddit.service.CommentService;
import com.example.reddit.service.PostService;
import com.example.reddit.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/comments")
@Secured("ROLE_USER")
public class CommentController {

    private final CommentService commentService;
    private final PostService postService;
    private final UserService userService;

    public CommentController(CommentService commentService, PostService postService, UserService userService) {
        this.commentService = commentService;
        this.postService = postService;
        this.userService = userService;
    }

    @PostMapping("/comment")
    public ResponseEntity<?> comment(@Valid @RequestBody CreateCommentRequest request, Principal principal) {
        Optional<Post> p = postService.get(request.getPost());
        User user = userService.getByUsername(principal.getName());
        if (p.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Post does not exist"));
        }
        return ResponseEntity.ok().body(commentService.create(request.getText(), user, p.get()));
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id, Principal principal) {
        Optional<Comment> c = commentService.findById(id);
        User user = userService.getByUsername(principal.getName());
        if (c.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment does not exist"));
        }
        Comment comment = c.get();
        if (comment.getUser() == null || !comment.getUser().getId().equals(user.getId())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new GenericResponse("Unauthorized action"));
        }
        commentService.delete(comment, user, comment.getPost());
        return ResponseEntity.ok(new GenericResponse("Comment successfully deleted"));
    }

    @PostMapping("/reply/{id}")
    public ResponseEntity<?> reply(@Valid @RequestBody CreateCommentRequest request,
                                   @PathVariable(name = "id") Long id, Principal principal) {
        Optional<Post> p = postService.get(request.getPost());
        Optional<Comment> c = commentService.findById(id);
        User user = userService.getByUsername(principal.getName());
        if (p.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Post does not exist"));
        }
        if (c.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment does not exist"));
        }
        return ResponseEntity.ok(commentService.reply(request.getText(), c.get(), user, p.get()));
    }

    @PostMapping("/upvote")
    public ResponseEntity<?> upvote(@RequestParam(name = "comment") Long id, Principal principal) {
        Optional<Comment> comment = commentService.findById(id);
        User user = userService.getByUsername(principal.getName());
        if (comment.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment does not exist"));
        }
        if (userService.isUpVoted(user, comment.get().getId(), RatingType.COMMENT)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment already up voted"));
        }
        return ResponseEntity.ok(commentService.upVote(comment.get(), user, userService.isDownVoted(user, comment.get().getId(), RatingType.COMMENT)));
    }

    @PostMapping("/downvote")
    public ResponseEntity<?> downvote(@RequestParam(name = "comment") Long id, Principal principal) {
        Optional<Comment> comment = commentService.findById(id);
        User user = userService.getByUsername(principal.getName());
        if (comment.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment does not exist"));
        }
        if (userService.isDownVoted(user, comment.get().getId(), RatingType.COMMENT)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new GenericResponse("Comment already down voted"));
        }
        return ResponseEntity.ok(commentService.downVote(comment.get(), user, userService.isUpVoted(user, comment.get().getId(), RatingType.COMMENT)));
    }
}
