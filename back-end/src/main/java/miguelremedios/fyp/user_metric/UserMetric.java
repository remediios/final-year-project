package miguelremedios.fyp.user_metric;

import javax.persistence.*;

@Entity(name = "UserMetric")
@Table(name="user_metric")
public class UserMetric {

    @Id
    @SequenceGenerator(name="user_metric_sequence", sequenceName = "user_metric_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_metric_sequence")
    @Column(name = "id", updatable = false)
    private Integer id;
    @Column(name = "user_id", nullable = false)
    private Integer userId;
    @Column(name = "metric_id", nullable = false)
    private Integer metricId;
    @Column(name = "value", nullable = true)
    private String value;

    public UserMetric() {
    }

    public UserMetric(Integer userId, Integer metricId, String value) {
        this.userId = userId;
        this.metricId = metricId;
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getMetricId() {
        return metricId;
    }

    public void setMetricId(Integer metricId) {
        this.metricId = metricId;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "UserMetric{" +
                "id=" + id +
                ", userId=" + userId +
                ", metricId=" + metricId +
                ", value='" + value + '\'' +
                '}';
    }
}
