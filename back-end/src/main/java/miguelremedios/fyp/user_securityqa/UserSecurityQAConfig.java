package miguelremedios.fyp.user_securityqa;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserSecurityQAConfig {
    @Bean
    CommandLineRunner UserSecurityQACommandLineRunner(UserSecurityQARepository repository) {
        return args -> {
            UserSecurityQA answer = new UserSecurityQA(
                    "qLaOt4F3XYdrltdnSsYXqE27Dbj1",
                    "Lisbon",
                    "Lisbon",
                    "Bc6",
                    "Uxbridge");

            repository.saveAll(List.of(answer));
        };
    }

}
