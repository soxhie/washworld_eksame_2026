
import { StepComponent } from "../components/stepsComponent";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
export default function OnboardingStep7() {
    return (
       
            <div className="Onboarding-7">
                <button
                          className='tilbageLink'
                          type="button"
                         
                        >
                          <FaChevronLeft /> Tilbage
                        </button> 
                <h1>Velkommen til Wash World</h1>
                <h2>Du er nu medlem!</h2>
                <p>Din bil er nu klar til vask!</p>
                <p>God tur!</p>
                 <button
                          className='nextButton'
                          type="button"
                          onClick={() => {
                           
                          }}
                        >
                          <FaArrowRight />
                        </button>
            </div>
       
    );
}