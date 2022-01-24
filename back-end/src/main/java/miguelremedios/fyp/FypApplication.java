package miguelremedios.fyp;

import miguelremedios.fyp.user.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.time.Month;
import java.util.Date;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalDate;

@SpringBootApplication
public class FypApplication {

	public static void main(String[] args) {
		SpringApplication.run(FypApplication.class, args);
	}

}
