package miguelremedios.fyp.user_training;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserTrainingRepository extends JpaRepository<UserTraining, Long> {

    @Query("SELECT i FROM User i WHERE i.stringId = ?1")
    Optional<UserTraining> findUserById(String stringId);

}
