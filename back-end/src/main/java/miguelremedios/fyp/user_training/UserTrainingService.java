package miguelremedios.fyp.user_training;

import miguelremedios.fyp.user.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserTrainingService {

    private final UserTrainingRepository userTrainingRepository;

    public UserTrainingService(UserTrainingRepository userTrainingRepository) {
        this.userTrainingRepository = userTrainingRepository;
    }

    public List<UserTraining> getRecords() {
        return userTrainingRepository.findAll();
    }

    public void addNewRecord(UserTraining record) {
        userTrainingRepository.save(record);
    }

    public void deleteRecord(Long id) {
        boolean exists = userTrainingRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("ID " + id + " does not exist!");
        }
        userTrainingRepository.deleteById(id);
    }

    @Transactional
    public void updateRecord(Long id, String stringId, Integer ks_kpt, Integer md_ct, Integer md_cvt, Integer md_bct, Integer dom_pv, Integer ks_ts, Integer user_status) {
        UserTraining userTrainingRecord = userTrainingRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID " + id + " does not exist!"));

        if (stringId != null &&
                stringId.length() > 0 &&
                !Objects.equals(userTrainingRecord.getStringId(), stringId)) { //If provided ID is not the same as the current one established

            Optional<UserTraining> userIdOptional = userTrainingRepository.findUserById(stringId);
            if (userIdOptional.isPresent()) {
                throw new IllegalStateException("User ID already registered!");
            }
            userTrainingRecord.setStringId(stringId);
        }

        if (ks_kpt != null &&
                ks_kpt > 0 &&
                !Objects.equals(userTrainingRecord.getKs_kpt(), ks_kpt)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setKs_kpt(ks_kpt);
        }

        if (md_ct != null &&
                md_ct > 0 &&
                !Objects.equals(userTrainingRecord.getMd_ct(), md_ct)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setMd_ct(md_ct);
        }

        if (md_cvt != null &&
                md_cvt > 0 &&
                !Objects.equals(userTrainingRecord.getMd_cvt(), md_cvt)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setMd_cvt(md_cvt);
        }

        if (md_bct != null &&
                md_bct > 0 &&
                !Objects.equals(userTrainingRecord.getMd_bct(), md_bct)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setMd_bct(md_bct);
        }

        if (dom_pv != null &&
                dom_pv > 0 &&
                !Objects.equals(userTrainingRecord.getDom_pv(), dom_pv)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setDom_pv(dom_pv);
        }

        if (ks_ts != null &&
                ks_ts > 0 &&
                !Objects.equals(userTrainingRecord.getKs_ts(), ks_ts)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setKs_ts(ks_ts);
        }

        if (user_status != null &&
                user_status > 0 &&
                !Objects.equals(userTrainingRecord.getUser_status(), user_status)) { //If provided userName is not the same as the current one established
            userTrainingRecord.setUser_status(user_status);
        }
    }
}
