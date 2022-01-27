package miguelremedios.fyp.metric;

import org.springframework.stereotype.Service;

import java.util.List;
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
}
