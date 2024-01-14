package odisee.sts.yourappl;

public class DiscountPolicyService {

    public double calcDiscountedPrice(double listPrice,
                               boolean hasDiscountCard,
                               boolean hasStudentCard) {
        if (hasDiscountCard) {
            if (hasStudentCard) return listPrice * 0.85;
            else return listPrice * 0.90;
        } else {
            if (hasStudentCard) return listPrice * 0.88;
            else return listPrice;
        }
    }
}
