package miguelremedios.fyp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping(path = "{id}")
    public Optional<User> getUser(@PathVariable("id") Long id){
        return userService.getUserById(id);
    }

    @GetMapping(path = "/user/{stringId}")
    public Optional<User> getUser(@PathVariable("stringId") String stringId){
        return userService.getUserByStringID(stringId);
    }

    @PostMapping
    public String registerUser(@RequestBody User user) {
        userService.addNewUser(user);
        return "User created successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return "User deleted successfully!";
    }

    @PutMapping(path = "{id}")
    public String updateUser(@PathVariable("id") Long id,
                             @RequestParam(required = false) String userStringId,
                             @RequestParam(required = false) String userEmail,
                             @RequestParam(required = false) String userName,
                             @RequestParam(required = false) String userCreatedAt,
                             @RequestParam(required = false) String userLastLoginAt) {
        userService.updateUser(id, userStringId, userEmail, userName, userCreatedAt, userLastLoginAt);
        return "User updated successfully!";
    }
}
