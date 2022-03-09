package miguelremedios.fyp.user_securityqa;

import javax.persistence.*;

@Entity(name = "UserSecurityQA")
public class UserSecurityQA {
    @Id
    @SequenceGenerator(name="user_securityqa_sequence", sequenceName = "user_securityqa_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_securityqa_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    @Column(name = "string_id", length = 28)
    private String stringId;
    @Column(name = "answer1", nullable = false)
    private String answer1;
    @Column(name = "answer2", nullable = false)
    private String answer2;
    @Column(name = "answer3", nullable = false)
    private String answer3;
    @Column(name = "answer4", nullable = false)
    private String answer4;

    public UserSecurityQA() {
    }

    public UserSecurityQA(String stringId, String answer1, String answer2, String answer3, String answer4) {
        this.stringId = stringId;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
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

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

    public void setAnswer3(String answer3) {
        this.answer3 = answer3;
    }

    public String getAnswer4() {
        return answer4;
    }

    public void setAnswer4(String answer4) {
        this.answer4 = answer4;
    }

    @Override
    public String toString() {
        return "UserSecurityQA{" +
                "id=" + id +
                ", stringId='" + stringId + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", answer3='" + answer3 + '\'' +
                ", answer4='" + answer4 + '\'' +
                '}';
    }
}
