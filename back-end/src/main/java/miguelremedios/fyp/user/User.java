package miguelremedios.fyp.user;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity(name = "User")
@Table(name="`user`", uniqueConstraints = {@UniqueConstraint(name = "userId_unique", columnNames = "userId")})
public class User {

    @Id
    @SequenceGenerator(name="user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    @Column(name = "userId", unique=true, length = 28)
    private String userId;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "userName", nullable = false)
    private String userName;
    @Column(name = "createdAt", nullable = false)
    private String createdAt;
    @Column(name = "lastLoginAt", nullable = false)
    private String lastLoginAt;

    public User() {
    }

    public User(Long id, String userId, String email, String userName, String createdAt, String lastLoginAt) {
        this.id = id;
        this.userId = userId;
        this.email = email;
        this.userName = userName;
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
    }

    public User(String userId, String email, String userName, String createdAt, String lastLoginAt) {
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

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getLastLoginAt() {
        return lastLoginAt;
    }

    public void setLastLoginAt(String lastLoginAt) {
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
