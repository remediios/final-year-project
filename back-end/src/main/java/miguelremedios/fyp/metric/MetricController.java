package miguelremedios.fyp.metric;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/metrics")
@CrossOrigin(origins = "*")
public class MetricController {

    private final MetricService metricService;

    @Autowired
    public MetricController(MetricService metricService) {
        this.metricService = metricService;
    }

    @GetMapping
    public List<Metric> getMetrics() {
        return metricService.getMetrics();
    }

    @PostMapping
    public String registerMetric(@RequestBody Metric metric) {
        metricService.addNewMetric(metric);
        return "Metric registered successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteMetric(@PathVariable("id") Long id) {
        metricService.deleteMetric(id);
        return "Metric deleted successfully!";
    }

    @PutMapping(path = "{id}")
    public String updateMetric(@PathVariable("id") Long metricId,
                             @RequestParam(required = false) String metricType,
                             @RequestParam(required = false) String metricDescription) {
        metricService.updateMetric(metricId, metricType, metricDescription);
        return "Metric updated successfully!";
    }
}
