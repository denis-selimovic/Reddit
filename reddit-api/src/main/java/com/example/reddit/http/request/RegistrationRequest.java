package com.example.reddit.http.request;

import javax.validation.constraints.NotBlank;

public class RegistrationRequest {

    @NotBlank
    private final String username;
    @NotBlank
    private final String password;
    @NotBlank
    private final String email;

    public RegistrationRequest(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
