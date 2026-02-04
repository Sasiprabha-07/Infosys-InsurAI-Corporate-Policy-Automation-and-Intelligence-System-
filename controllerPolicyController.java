@RestController
@RequestMapping("/api/policies")
public class PolicyController {

    @GetMapping
    public List<Policy> getAllPolicies() {

        List<Policy> list = new ArrayList<>();

        Policy p1 = new Policy();
        p1.setPolicyId(1);
        p1.setPolicyName("Health Insurance");
        p1.setCoverage("5 Lakhs");

        Policy p2 = new Policy();
        p2.setPolicyId(2);
        p2.setPolicyName("Life Insurance");
        p2.setCoverage("10 Lakhs");

        list.add(p1);
        list.add(p2);

        return list;
    }
}
