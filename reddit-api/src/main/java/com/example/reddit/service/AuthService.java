package com.example.reddit.service;

import com.example.reddit.auth.JwtProvider;
import com.example.reddit.domain.Role;
import com.example.reddit.domain.User;
import com.example.reddit.domain.enums.RoleName;
import com.example.reddit.repository.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final RoleService roleService;

    public AuthService(UserRepository userRepository, JwtProvider jwtProvider, RoleService roleService) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
        this.roleService = roleService;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userRepository.findByUsername(s).orElseThrow(() -> new UsernameNotFoundException("User " + s + " not found"));
    }

    public String authenticate(String username, String password) {
        UserDetails userDetails = loadUserByUsername(username);
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
        try {
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        catch (BadCredentialsException e) {
            System.err.println("Bad credentials!");
        }
        return jwtProvider.generateToken(userDetails);
    }

    public User register(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) throw new RuntimeException("User exists");
        user.getRoles().add(roleService.getRole(RoleName.ROLE_USER));
        return userRepository.save(user);
    }
}
