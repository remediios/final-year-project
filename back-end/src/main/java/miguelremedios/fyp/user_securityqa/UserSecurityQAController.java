package miguelremedios.fyp.user_securityqa;

import miguelremedios.fyp.user_training.UserTraining;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/security_qa")
@CrossOrigin(origins = "*")
public class UserSecurityQAController {

    private final UserSecurityQAService securityQAService;

    @Autowired
    public UserSecurityQAController(UserSecurityQAService securityQAService) {
        this.securityQAService = securityQAService;
    }

    @GetMapping
    public List<UserSecurityQA> getAnswers(){
        return securityQAService.getAnswers();
    }

    @PostMapping
    public String registerAnswer(@RequestBody UserSecurityQA answer) {
        securityQAService.addNewAnswer(answer);
        return "Security answer created successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteAnswer(@PathVariable("id") Long id) {
        securityQAService.deleteAnswer(id);
        return "Security answer deleted successfully!";
    }

    @PutMapping(path = "{id}")
    public String updateAnswer(@PathVariable("id") Long id,
                               @RequestParam(required = false) String stringId,
                               @RequestParam(required = false) String answer1,
                               @RequestParam(required = false) String answer2,
                               @RequestParam(required = false) String answer3,
                               @RequestParam(required = false) String answer4) {
        securityQAService.updateAnswer(id, stringId, answer1, answer2, answer3, answer4);
        return "Security answer updated successfully!";
    }
}
