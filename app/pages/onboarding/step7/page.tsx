
import { StepComponent } from "../components/stepsComponent";

export default function OnboardingStep7() {
    return (
        <>
            <StepComponent currentStep={7} totalSteps={7}/>
            <div className="Onboarding-7">
                <h1>Velkommen til Wash World</h1>
                <h2>Du er nu medlem!</h2>
                <p>Din bil er nu klar til vask!</p>
                <p>God tur!</p>
            </div>
        </>
    );
}