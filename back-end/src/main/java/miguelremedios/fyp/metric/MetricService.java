package miguelremedios.fyp.metric;

import miguelremedios.fyp.user.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class MetricService {

    private final MetricRepository metricRepository;

    public MetricService(MetricRepository metricRepository) {
        this.metricRepository = metricRepository;
    }

    public List<Metric> getMetrics() {
        return metricRepository.findAll();
    }

    public void addNewMetric(Metric metric) {
        Optional<Metric> metricType = metricRepository.findMetricByType(metric.getType());
        if (metricType.isPresent()){
            throw new IllegalStateException("Metric already registered!");
        }
        metricRepository.save(metric);
    }

    public void deleteMetric(Long id) {
        boolean exists = metricRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("Metric ID " + id + " does not exist!");
        }
        metricRepository.deleteById(id);
    }

    @Transactional
    public void updateMetric(Long metricId, String metricType, String metricDescription) {
        Metric metric = metricRepository.findById(metricId)
                .orElseThrow(() -> new IllegalStateException("Metric ID " + metricId + " does not exist!"));

        if (metricType != null &&
                metricType.length() > 0 &&
                !Objects.equals(metric.getType(), metricType)) { //If provided Type is not the same as the current one established

            Optional<Metric> metricTypeOptional = metricRepository.findMetricByType(metricType);
            if (metricTypeOptional.isPresent()) {
                throw new IllegalStateException("Metric Type already registered!");
            }
            metric.setType(metricType);
        }

        if (metricDescription != null &&
                metricDescription.length() > 0 &&
                !Objects.equals(metric.getDescription(), metricDescription)) { //If provided Description is not the same as the current one established
            metric.setDescription(metricDescription);
        }
    }
}
