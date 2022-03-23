package miguelremedios.fyp.user_data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {

    @Query("SELECT i FROM User i WHERE i.stringId = ?1")
    Optional<UserData> findUserById(String stringId);

}
