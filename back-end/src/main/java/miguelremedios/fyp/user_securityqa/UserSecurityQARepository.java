package miguelremedios.fyp.user_securityqa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSecurityQARepository extends JpaRepository<UserSecurityQA, Long> {

    @Query("SELECT i FROM UserSecurityQA i WHERE i.stringId = ?1")
    Optional<UserSecurityQA> findUserById(String stringId);
}
