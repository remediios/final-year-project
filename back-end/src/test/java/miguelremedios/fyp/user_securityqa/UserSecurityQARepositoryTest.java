package miguelremedios.fyp.user_securityqa;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class UserSecurityQARepositoryTest {

    @Autowired
    private UserSecurityQARepository underTest;

    @Test
    void itShouldCheckIfUserExistsByStringId() {
        //arrange
        UserSecurityQA userSQA = new UserSecurityQA(
                "qLaOt4F3XYdrltdnSsYXqE27Dbj1",
                "Lisbon",
                "Lisbon",
                "Bc6",
                "Uxbridge");
        underTest.saveAll(List.of(userSQA)); //H2 in-memory DB
        //act
        Optional<UserSecurityQA> expected1 =  underTest
                .findUserById("qLaOt4F3XYdrltdnSsYXqE27Dbj1");
        //assert
        assertThat(expected1).isPresent();
    }

    @Test
    void itShouldCheckIfUserDoesNotExistsByStringId() {
        //arrange
        String strindId = "zRaOt5687YdrltdnRsNMqE98Dbj1"; //random string ID
        //act
        Optional<UserSecurityQA> expected =  underTest.findUserById(strindId);
        //assert
        assertThat(expected).isNotPresent();
    }
}