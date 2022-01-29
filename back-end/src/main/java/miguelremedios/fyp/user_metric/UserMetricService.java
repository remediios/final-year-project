package miguelremedios.fyp.user_metric;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserMetricService {

    private final UserMetricRepository userMetricRepository;

    @Autowired
    public UserMetricService(UserMetricRepository userMetricRepository) {
        this.userMetricRepository = userMetricRepository;
    }

    public List<UserMetric> getUsers() {
        return userMetricRepository.findAll();
    }

    public List<UserMetric> getUserById(Integer userId) {
        return userMetricRepository.findByUserId(userId);
    }

    public List<UserMetric> getUserByMetric(Integer metricId) {
        return userMetricRepository.findByUserMetric(metricId);
    }

    public void addNewUserMetric(UserMetric userMetric) {
        userMetricRepository.save(userMetric);
    }

    public void deleteUserMetric(Integer id) {
        boolean exists = userMetricRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("ID " + id + " does not exist!");
        }
        userMetricRepository.deleteById(id);
    }

    @Transactional
    public void updateUserMetric(Integer id, Integer userId, Integer metricId, String metricValue) {
        UserMetric userMetric = userMetricRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID " + id + " does not exist!"));

        if (userId != null &&
                userId > 0 &&
                !Objects.equals(userMetric.getUserId(), userId)) { //If provided user id is not the same as the current one established
            userMetric.setUserId(userId);
        }

        if (metricId != null &&
                metricId > 0 &&
                !Objects.equals(userMetric.getMetricId(), metricId)) { //If provided metric id is not the same as the current one established
            userMetric.setMetricId(metricId);
        }

        if (metricValue != null &&
                metricValue.length() > 0 &&
                !Objects.equals(userMetric.getValue(), metricValue)) { //If provided metric value is not the same as the current one established
            userMetric.setValue(metricValue);
        }
    }
}
