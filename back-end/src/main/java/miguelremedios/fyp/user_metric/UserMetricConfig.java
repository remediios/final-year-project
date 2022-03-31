package miguelremedios.fyp.user_metric;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserMetricConfig {
    @Bean
    CommandLineRunner UserMetricCommandLineRunner(UserMetricRepository repository){
        return args -> {
            UserMetric user1Metric1 = new UserMetric(1,1, "50");
            UserMetric user1Metric2 = new UserMetric(1,2, "50");
            UserMetric user1Metric3 = new UserMetric(1,3, "50");
            UserMetric user1Metric4 = new UserMetric(1,4, "50");
            UserMetric user1Metric5 = new UserMetric(1,5, "50");
            UserMetric user1Metric6 = new UserMetric(1,6, "50");

            repository.saveAll(List.of(user1Metric1,user1Metric2,user1Metric3,user1Metric4,user1Metric5,user1Metric6));
        };
    }
}
