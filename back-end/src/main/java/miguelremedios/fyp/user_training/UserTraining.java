package miguelremedios.fyp.user_training;

import javax.persistence.*;

@Entity(name = "UserTraining")
public class UserTraining {

    @Id
    @SequenceGenerator(name="user_training_sequence", sequenceName = "user_training_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_training_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    @Column(name = "string_id", unique = true, length = 28)
    private String stringId;
    @Column(name = "ks_kpt", nullable = false)
    private Integer ks_kpt;
    @Column(name = "md_ct", nullable = false)
    private Integer md_ct;
    @Column(name = "md_cvt", nullable = false)
    private Integer md_cvt;
    @Column(name = "md_bct", nullable = false)
    private Integer md_bct;
    @Column(name = "dom_pv", nullable = false)
    private Integer dom_pv;
    @Column(name = "ks_ts", nullable = false)
    private Integer ks_ts;
    @Column(name = "user_status", nullable = false)
    private Integer user_status;

    public UserTraining() {
    }

    public UserTraining(String stringId, Integer ks_kpt, Integer md_ct, Integer md_cvt, Integer md_bct, Integer dom_pv, Integer ks_ts, Integer user_status) {
        this.stringId = stringId;
        this.ks_kpt = ks_kpt;
        this.md_ct = md_ct;
        this.md_cvt = md_cvt;
        this.md_bct = md_bct;
        this.dom_pv = dom_pv;
        this.ks_ts = ks_ts;
        this.user_status = user_status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStringId() {
        return stringId;
    }

    public void setStringId(String stringId) {
        this.stringId = stringId;
    }

    public Integer getKs_kpt() {
        return ks_kpt;
    }

    public void setKs_kpt(Integer ks_kpt) {
        this.ks_kpt = ks_kpt;
    }

    public Integer getMd_ct() {
        return md_ct;
    }

    public void setMd_ct(Integer md_ct) {
        this.md_ct = md_ct;
    }

    public Integer getMd_cvt() {
        return md_cvt;
    }

    public void setMd_cvt(Integer md_cvt) {
        this.md_cvt = md_cvt;
    }

    public Integer getMd_bct() {
        return md_bct;
    }

    public void setMd_bct(Integer md_bct) {
        this.md_bct = md_bct;
    }

    public Integer getDom_pv() {
        return dom_pv;
    }

    public void setDom_pv(Integer dom_pv) {
        this.dom_pv = dom_pv;
    }

    public Integer getKs_ts() {
        return ks_ts;
    }

    public void setKs_ts(Integer ks_ts) {
        this.ks_ts = ks_ts;
    }

    public Integer getUser_status() {
        return user_status;
    }

    public void setUser_status(Integer user_status) {
        this.user_status = user_status;
    }

    @Override
    public String toString() {
        return "UserTraining{" +
                "id=" + id +
                ", stringId='" + stringId + '\'' +
                ", ks_kpt=" + ks_kpt +
                ", md_ct=" + md_ct +
                ", md_cvt=" + md_cvt +
                ", md_bct=" + md_bct +
                ", dom_pv=" + dom_pv +
                ", ks_ts=" + ks_ts +
                ", user_status=" + user_status +
                '}';
    }
}
