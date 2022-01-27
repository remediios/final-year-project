package miguelremedios.fyp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Objects;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        Optional<User> userEmail = userRepository.findUserByEmail(user.getEmail());
        if (userEmail.isPresent()) {
            throw new IllegalStateException("User already registered!");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        boolean exists = userRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("ID " + id + " does not exist!");
        }
        userRepository.deleteById(id);
    }

    @Transactional
    public void updateUser(Long id, String userId, String userEmail, String userName, String userCreatedAt, String userLastLoginAt) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID " + id + " does not exist!"));

        if (userId != null &&
                userId.length() > 0 &&
                !Objects.equals(user.getUserId(), userId)) { //If provided ID is not the same as the current one established

            Optional<User> userIdOptional = userRepository.findUserById(userId);
            if (userIdOptional.isPresent()) {
                throw new IllegalStateException("User ID already registered!");
            }
            user.setUserId(userId);
        }

        if (userEmail != null &&
                userEmail.length() > 0 &&
                !Objects.equals(user.getEmail(), userEmail)) { //If provided email is not the same as the current one established

            Optional<User> userOptional = userRepository.findUserByEmail(userEmail);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("User Email already registered!");
            }
            user.setEmail(userEmail);
        }

        if (userName != null &&
                userName.length() > 0 &&
                !Objects.equals(user.getUserName(), userName)) { //If provided userName is not the same as the current one established
            user.setUserName(userName);
        }

        if (userCreatedAt != null &&
                userCreatedAt.length() > 0 &&
                !Objects.equals(user.getCreatedAt(), userCreatedAt)) { //If provided userCreatedAt is not the same as the current one established
            user.setCreatedAt(userCreatedAt);
        }

        if (userLastLoginAt != null &&
                userLastLoginAt.length() > 0 &&
                !Objects.equals(user.getLastLoginAt(), userLastLoginAt)) { //If provided userLastLoginAt is not the same as the current one established
            user.setLastLoginAt(userLastLoginAt);
        }
    }
}
