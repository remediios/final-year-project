package miguelremedios.fyp.user_securityqa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/user/security_qas")
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

    @GetMapping(path = "{id}")
    public Optional<UserSecurityQA> getAnswersByID(@PathVariable("id") Long id){
        return securityQAService.getAnswersByID(id);
    }

    @GetMapping(path = "/user/{stringId}")
    public Optional<UserSecurityQA> getAnswerbyStringId(@PathVariable("stringId") String stringId){
        return securityQAService.getAnswersByStringID(stringId);
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
