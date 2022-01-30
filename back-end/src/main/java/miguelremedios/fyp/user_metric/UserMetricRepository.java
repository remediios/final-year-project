package miguelremedios.fyp.user_metric;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserMetricRepository extends JpaRepository<UserMetric, Integer> {

    @Query("SELECT ui FROM UserMetric ui WHERE ui.userId = ?1")
    List<UserMetric> findByUserId(Integer userId);

    @Query("SELECT mi FROM UserMetric mi WHERE mi.metricId = ?1")
    List<UserMetric> findByUserMetric(Integer metricId);
}
