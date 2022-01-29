package miguelremedios.fyp.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner UserCommandLineRunner(UserRepository repository) {
        return args -> {
            User user1 = new User(
                "VOER1SzcREPKP5xrW4RpyIqr7TY2",
                "miguelremady@gmail.com",
                "MiguelRemedios",
                "",
                "");

            repository.saveAll(List.of(user1));
        };
    }
}
