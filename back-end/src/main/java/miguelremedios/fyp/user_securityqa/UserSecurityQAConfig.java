package miguelremedios.fyp.user_securityqa;

import miguelremedios.fyp.user.User;
import miguelremedios.fyp.user.UserRepository;
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
                    "VOER1SzcREPKP5xrW4RpyIqr7TY2",
                    "Lisbon",
                    "Lisbon",
                    "Bc6",
                    "Uxbridge");

            repository.saveAll(List.of(answer));
        };
    }

}
