package miguelremedios.fyp.user_securityqa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserSecurityQAService {

    private final UserSecurityQARepository securityQARepository;

    public UserSecurityQAService(UserSecurityQARepository securityQARepository) {
        this.securityQARepository = securityQARepository;
    }

    public List<UserSecurityQA> getAnswers() {
        return securityQARepository.findAll();
    }

    public Optional<UserSecurityQA> getAnswersByStringID(String stringId) {
        return securityQARepository.findUserById(stringId);
    }

    public Optional<UserSecurityQA> getAnswersByID(Long id) {
        return securityQARepository.findById(id);
    }

    public void addNewAnswer(UserSecurityQA answer) {
        securityQARepository.save(answer);
    }

    public void deleteAnswer(Long id) {
        boolean exists = securityQARepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("ID " + id + " does not exist!");
        }
        securityQARepository.deleteById(id);
    }

    @Transactional
    public void updateAnswer(Long id, String stringId, String answer1, String answer2, String answer3, String answer4) {
        UserSecurityQA userSecurityAnswer = securityQARepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID " + id + " does not exist!"));

        if (stringId != null &&
                stringId.length() > 0 &&
                !Objects.equals(userSecurityAnswer.getStringId(), stringId)) { //If provided ID is not the same as the current one established

            Optional<UserSecurityQA> userIdOptional = securityQARepository.findUserById(stringId);
            if (userIdOptional.isPresent()) {
                throw new IllegalStateException("User ID already registered!");
            }
            userSecurityAnswer.setStringId(stringId);
        }

        if (answer1 != null &&
                answer1.length() > 0 &&
                !Objects.equals(userSecurityAnswer.getAnswer1(), answer1)) { //If provided userName is not the same as the current one established
            userSecurityAnswer.setAnswer1(answer1);
        }

        if (answer2 != null &&
                answer2.length() > 0 &&
                !Objects.equals(userSecurityAnswer.getAnswer2(), answer2)) { //If provided userName is not the same as the current one established
            userSecurityAnswer.setAnswer2(answer2);
        }

        if (answer3 != null &&
                answer3.length() > 0 &&
                !Objects.equals(userSecurityAnswer.getAnswer3(), answer3)) { //If provided userName is not the same as the current one established
            userSecurityAnswer.setAnswer3(answer3);
        }

        if (answer4 != null &&
                answer4.length() > 0 &&
                !Objects.equals(userSecurityAnswer.getAnswer4(), answer4)) { //If provided userName is not the same as the current one established
            userSecurityAnswer.setAnswer4(answer4);
        }
    }
}
