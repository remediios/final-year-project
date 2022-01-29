package miguelremedios.fyp.metric;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MetricRepository  extends JpaRepository<Metric, Long> {

    @Query("SELECT m FROM Metric m WHERE m.type = ?1")
    Optional<Metric> findMetricByType(String type);
}
