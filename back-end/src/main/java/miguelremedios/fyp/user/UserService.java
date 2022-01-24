package miguelremedios.fyp.user;

import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    public List<User> getUsers(){
        Date date = new Date();
        return List.of(new User(1L,"VOER1SzcREPKP5xrW4RpyIqr7TY2",
                "miguelremady@gmail.com",
                "MiguelRemedios",
                "",
                ""));
    }
}
