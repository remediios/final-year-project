package miguelremedios.fyp.user;

import java.sql.Timestamp;


public class User {

    private Long id;
    private String userId;
    private String email;
    private String userName;
    private Timestamp createdAt;
    private Timestamp lastLoginAt;

    public User() {
    }

    public User(Long id, String userId, String email, String userName, Timestamp createdAt, Timestamp lastLoginAt) {
        this.id = id;
        this.userId = userId;
        this.email = email;
        this.userName = userName;
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
    }

    public User(String userId, String email, String userName, Timestamp createdAt, Timestamp lastLoginAt) {
        this.userId = userId;
        this.email = email;
        this.userName = userName;
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getLastLoginAt() {
        return lastLoginAt;
    }

    public void setLastLoginAt(Timestamp lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userId=" + userId +
                ", email='" + email + '\'' +
                ", userName='" + userName + '\'' +
                ", createdAt=" + createdAt +
                ", lastLoginAt=" + lastLoginAt +
                '}';
    }
}
