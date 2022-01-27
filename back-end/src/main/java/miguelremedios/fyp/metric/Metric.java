package miguelremedios.fyp.metric;

import javax.persistence.*;

@Entity(name = "Metric")
@Table(name = "metric")
public class Metric {

    @Id
    @SequenceGenerator(name="metric_sequence", sequenceName = "metric_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "metric_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    @Column(name = "type", nullable = false)
    private String type;
    @Column(name = "description", nullable = false)
    private String description;

    public Metric() {
    }

    public Metric(Long id, String type, String description) {
        this.id = id;
        this.type = type;
        this.description = description;
    }

    public Metric(String type, String description) {
        this.type = type;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Metric{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
