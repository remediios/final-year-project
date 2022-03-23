package miguelremedios.fyp.user_data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/user/data")
@CrossOrigin(origins = "*")
public class UserDataController {

    private final UserDataService userDataService;

    @Autowired
    public UserDataController(UserDataService userDataService) {
        this.userDataService = userDataService;
    }

    @GetMapping
    public List<UserData> getTrainingRecords(){
        return userDataService.getRecords();
    }

    @PostMapping
    public String registerTrainingRecord(@RequestBody UserData record) {
        userDataService.addNewRecord(record);
        return "Training record created successfully!";
    }

    @DeleteMapping(path = "{id}")
    public String deleteRecord(@PathVariable("id") Long id) {
        userDataService.deleteRecord(id);
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
        userDataService.updateRecord(id, stringId, ks_kpt, md_ct, md_cvt, md_bct, dom_pv, ks_ts, user_status);
        return "User training record updated successfully!";
    }
}
