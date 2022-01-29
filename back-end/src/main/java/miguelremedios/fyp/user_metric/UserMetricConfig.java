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
            UserMetric user1Metric7 = new UserMetric(1,7, "50");
            UserMetric user1Metric8 = new UserMetric(1,8, "50");
            UserMetric user1Metric9 = new UserMetric(1,9, "50");
            UserMetric user1Metric10 = new UserMetric(1,10, "50");
            UserMetric user1Metric11 = new UserMetric(1,11, "50");
            UserMetric user1Metric12 = new UserMetric(1,12, "50");

            repository.saveAll(List.of(user1Metric1,user1Metric2,user1Metric3,user1Metric4,user1Metric5,user1Metric6,user1Metric7,
                    user1Metric8,user1Metric9,user1Metric10,user1Metric11,user1Metric12));
        };
    }
}
