package miguelremedios.fyp.user_data;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserDataService {

    private final UserDataRepository userDataRepository;

    public UserDataService(UserDataRepository userDataRepository) {
        this.userDataRepository = userDataRepository;
    }

    public List<UserData> getRecords() {
        return userDataRepository.findAll();
    }

    public void addNewRecord(UserData record) {
        userDataRepository.save(record);
    }

    public void deleteRecord(Long id) {
        boolean exists = userDataRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("ID " + id + " does not exist!");
        }
        userDataRepository.deleteById(id);
    }

    @Transactional
    public void updateRecord(Long id, String stringId, Integer ks_kpt, Integer md_ct, Integer md_cvt, Integer md_bct, Integer dom_pv, Integer ks_ts, Integer user_status) {
        UserData userDataRecord = userDataRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("ID " + id + " does not exist!"));

        if (stringId != null &&
                stringId.length() > 0 &&
                !Objects.equals(userDataRecord.getStringId(), stringId)) { //If provided ID is not the same as the current one established

            Optional<UserData> userIdOptional = userDataRepository.findUserById(stringId);
            if (userIdOptional.isPresent()) {
                throw new IllegalStateException("User ID already registered!");
            }
            userDataRecord.setStringId(stringId);
        }

        if (ks_kpt != null &&
                ks_kpt > 0 &&
                !Objects.equals(userDataRecord.getKs_kpt(), ks_kpt)) { //If provided userName is not the same as the current one established
            userDataRecord.setKs_kpt(ks_kpt);
        }

        if (md_ct != null &&
                md_ct > 0 &&
                !Objects.equals(userDataRecord.getMd_ct(), md_ct)) { //If provided userName is not the same as the current one established
            userDataRecord.setMd_ct(md_ct);
        }

        if (md_cvt != null &&
                md_cvt > 0 &&
                !Objects.equals(userDataRecord.getMd_cvt(), md_cvt)) { //If provided userName is not the same as the current one established
            userDataRecord.setMd_cvt(md_cvt);
        }

        if (md_bct != null &&
                md_bct > 0 &&
                !Objects.equals(userDataRecord.getMd_bct(), md_bct)) { //If provided userName is not the same as the current one established
            userDataRecord.setMd_bct(md_bct);
        }

        if (dom_pv != null &&
                dom_pv > 0 &&
                !Objects.equals(userDataRecord.getDom_pv(), dom_pv)) { //If provided userName is not the same as the current one established
            userDataRecord.setDom_pv(dom_pv);
        }

        if (ks_ts != null &&
                ks_ts > 0 &&
                !Objects.equals(userDataRecord.getKs_ts(), ks_ts)) { //If provided userName is not the same as the current one established
            userDataRecord.setKs_ts(ks_ts);
        }

        if (user_status != null &&
                user_status > 0 &&
                !Objects.equals(userDataRecord.getUser_status(), user_status)) { //If provided userName is not the same as the current one established
            userDataRecord.setUser_status(user_status);
        }
    }
}
