"use client";
import OnboardingStep1 from './components/onboading'
import OnboardingStep2 from './components/onboarding_2'
import OnboardingStep3 from './components/onboarding_3';
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';
import '../../globals.css'
import { useState } from 'react';

const steps = [
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3
]

export default function Onboarding() {
 const [step, setStep] = useState(0)

  const StepComponent = steps[step]

  return (
    <div className='Onboarding'>

      

      <a className='tilbageLink'
        disabled={step === 0}
        onClick={() => setStep(step - 1)}
      >
       <FaChevronLeft /> Tilbage
      </a>
        <StepComponent />
      <a  className='nextButton'
        onClick={() => setStep(step + 1)}
      >
       <FaArrowRight />
      </a>
       
        
        
     
    </div>
  );
}

