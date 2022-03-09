package miguelremedios.fyp.user_training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/users_training")
@CrossOrigin(origins = "*")
public class UserTrainingController {

    private final UserTrainingService userTrainingService;

    @Autowired
    public UserTrainingController(UserTrainingService userTrainingService) {
        this.userTrainingService = userTrainingService;
    }

    @GetMapping
    public List<UserTraining> getTrainingRecords(){
        return userTrainingService.getRecords();
    }

    @PostMapping
    public String registerTrainingRecord(@RequestBody UserTraining record) {
        userTrainingService.addNewRecord(record);
        return "Training record created successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteRecord(@PathVariable("id") Long id) {
        userTrainingService.deleteRecord(id);
        return "Training record deleted successfully!";
    }

    @PutMapping(path = "{id}")
    public String updateTrainingRecord(@PathVariable("id") Long id,
                             @RequestParam(required = false) String stringId,
                             @RequestParam(required = false) Integer ks_kpt,
                             @RequestParam(required = false) Integer md_ct,
                             @RequestParam(required = false) Integer md_cvt,
                             @RequestParam(required = false) Integer md_bct,
                                       @RequestParam(required = false) Integer dom_pv,
                                       @RequestParam(required = false) Integer ks_ts,
                                       @RequestParam(required = false) Integer user_status) {
        userTrainingService.updateRecord(id, stringId, ks_kpt, md_ct, md_cvt, md_bct, dom_pv, ks_ts, user_status);
        return "User training record updated successfully!";
    }
}
