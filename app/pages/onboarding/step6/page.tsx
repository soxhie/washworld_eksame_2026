import { CiCreditCard1 } from "react-icons/ci";
import MobilePayInput from "../components/MobilepayInput";
import CardInput from "../components/cardInput";

export default function OnboardingStep6() {

    const [formData, setFormData] = useState({
        transaction_gateway_fk: "",
    });
    return (
        <div className="Onboarding-6">
            <h1>Betalingsmetode</h1>
            <div className="button">
                <input
                    type="radio"
                    name="paymentMethod"
                    id="card"
                   
                />
                <CiCreditCard1 size={39} />
                <div>
                    <h3>Kort</h3>
                    <h4>Visa/Mastercard</h4>
                </div>
            </div>
            <div className="button">
                <input
                    type="radio"
                    name="paymentMethod"
                    id="mobilepay"
                  
                />
                <CiCreditCard1 size={39} />
                <h3>MobilePay</h3>
            </div>
            {formData.transaction_gateway_fk === "card" && <CardInput />}
            {formData.transaction_gateway_fk === "mobilepay" && <MobilePayInput />}
        </div>
    );
}


