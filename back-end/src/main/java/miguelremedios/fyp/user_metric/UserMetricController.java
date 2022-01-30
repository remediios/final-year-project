package miguelremedios.fyp.user_metric;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/user/metrics")
public class UserMetricController {

    private final UserMetricService userMetricService;

    @Autowired
    public UserMetricController(UserMetricService userMetricService) {
        this.userMetricService = userMetricService;
    }

    @GetMapping
    public List<UserMetric> getUsersMetrics(){
        return userMetricService.getUsers();
    }

    @GetMapping(path = "{userId}")
    public List<UserMetric> getUserMetricsById(@PathVariable("userId") Integer userId){
        return userMetricService.getUserById(userId);
    }

    @GetMapping(path = "/metric/{metricId}")
    public List<UserMetric> getUserMetricsByMetric(@PathVariable("metricId") Integer metricId){
        return userMetricService.getUserByMetric(metricId);
    }

    @PostMapping
    public String registerUserMetric(@RequestBody UserMetric userMetric) {
        userMetricService.addNewUserMetric(userMetric);
        return "User Metric created successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteUser(@PathVariable("id") Integer id) {
        userMetricService.deleteUserMetric(id);
        return "User Metric deleted successfully!";
    }

    @PutMapping(path = "{id}")
    public String updateUser(@PathVariable("id") Integer id,
                             @RequestParam(required = false) Integer userId,
                             @RequestParam(required = false) Integer metricId,
                             @RequestParam(required = false) String metricValue) {
        userMetricService.updateUserMetric(id, userId, metricId, metricValue);
        return "User Metric updated successfully!";
    }
}
