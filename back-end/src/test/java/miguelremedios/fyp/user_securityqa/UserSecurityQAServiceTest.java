package miguelremedios.fyp.user_securityqa;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserSecurityQAServiceTest {

    @Mock
    private UserSecurityQARepository securityQARepo;
    private UserSecurityQAService underTest;

    @BeforeEach
    void setUp() {
        underTest = new UserSecurityQAService(securityQARepo);
    }

    @Test
    void canGetAnswers() {
        underTest.getAnswers();
        verify(securityQARepo).findAll();
    }

    @Test
    void canAddNewAnswer() {
        //arrange
        UserSecurityQA userSQA = new UserSecurityQA(
                "qLaOt4F3XYdrltdnSsYXqE27Dbj1",
                "Lisbon",
                "Lisbon",
                "Bc6",
                "Uxbridge");

        //act
        underTest.addNewAnswer(userSQA);
        ArgumentCaptor<UserSecurityQA> userSecurityQAArgumentCaptor =
                ArgumentCaptor.forClass(UserSecurityQA.class);
        verify(securityQARepo).save(userSecurityQAArgumentCaptor.capture());
        UserSecurityQA capturedUserSQA = userSecurityQAArgumentCaptor.getValue();

        //assert
        assertThat(capturedUserSQA).isEqualTo(userSQA);
    }
}