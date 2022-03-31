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
            Metric metric1 = new Metric("ks_kpt", "Number of keys pressed (chars) per time");
            Metric metric2 = new Metric("md_ct", "Number of clicks per time");
            Metric metric3 = new Metric("md_cvt", "Number of cryptocurrencies visited per time");
            Metric metric4 = new Metric("md_bct", "Number of buttons clicked per time");
            Metric metric5 = new Metric("dom_pv", "Number of cryptocurrency’s detail page views");
            Metric metric6 = new Metric("ks_kt", "Typing speed per minute");

            repository.saveAll(List.of(metric1, metric2, metric3, metric4, metric5, metric6));
        };
    }
}
