package miguelremedios.fyp.metric;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class MetricConfig {
    @Bean
    CommandLineRunner MetricCommandLineRunner(MetricRepository repository) {
        return args -> {
            Metric metric1 = new Metric("max_ts_result", "Maximum Typing Speed Result");
            Metric metric2 = new Metric("max_ts_accuracy", "Maximum Typing Speed Accuracy");
            Metric metric3 = new Metric("avg_ts_result", "Average Typing Speed Result");
            Metric metric4 = new Metric("avg_ts_accuracy", "Average Typing Speed Accuracy");
            Metric metric5 = new Metric("ip_address", "Internet Protocol V4 Address");
            Metric metric6 = new Metric("os", "Operating System");
            Metric metric7 = new Metric("country", "Country");
            Metric metric8 = new Metric("country_code", "Country Code");
            Metric metric9 = new Metric("city", "City");
            Metric metric10 = new Metric("latitude", "Geolocation Latitude");
            Metric metric11 = new Metric("longitude", "Geolocation Longitude");
            Metric metric12 = new Metric("currency", "Currency");

            repository.saveAll(List.of(metric1, metric2, metric3, metric4, metric5, metric6, metric7,
                    metric8, metric9, metric10, metric11, metric12));
        };
    }
}
