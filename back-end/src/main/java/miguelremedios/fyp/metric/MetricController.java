package miguelremedios.fyp.metric;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/metrics")
public class MetricController {

    private final MetricService metricService;

    @Autowired
    public MetricController(MetricService metricService) {
        this.metricService = metricService;
    }

    @GetMapping
    public List<Metric> metrics() {
        return metricService.getMetrics();
    }

    @PostMapping
    public String registerMetric(@RequestBody Metric metric) {
        metricService.addNewMetric(metric);
        return "Metric registered successfully!";
    }
}
