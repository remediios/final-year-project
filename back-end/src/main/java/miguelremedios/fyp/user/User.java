package miguelremedios.fyp.user;

import javax.persistence.*;

@Entity(name = "User")
@Table(name="`user`", uniqueConstraints = {@UniqueConstraint(name = "string_id_unique", columnNames = "string_id")})
public class User {

    @Id
    @SequenceGenerator(name="user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    @Column(name = "string_id", unique = true, length = 28)
    private String stringId;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "username", nullable = false)
    private String userName;
    @Column(name = "created_at", nullable = false)
    private String createdAt;
    @Column(name = "last_login_at", nullable = false)
    private String lastLoginAt;

    public User() {
    }

    public User(String stringId, String email, String userName, String createdAt, String lastLoginAt) {
        this.stringId = stringId;
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

    public String getStringId() {
        return stringId;
    }

    public void setStringId(String userId) {
        this.stringId = userId;
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
                ", userId=" + stringId +
                ", email='" + email + '\'' +
                ", userName='" + userName + '\'' +
                ", createdAt=" + createdAt +
                ", lastLoginAt=" + lastLoginAt +
                '}';
    }
}
