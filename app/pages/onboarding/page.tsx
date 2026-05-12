"use client";
import OnboardingStep1 from './components/onboading'
import OnboardingStep2 from './components/onboarding_2'
import OnboardingStep3 from './components/onboarding_3';
import OnboardingStep4 from './components/onboarding_4';
import OnboardingStep5 from './components/onboarding_5';
import OnboardingStep7 from './components/onboarding_7';
import OnboardingStep6 from './components/onboarding_6';
import OnboadingStep8 from './components/onboarding_8';
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';
import "./onboarding.css";

import { useState } from 'react';
import { Form } from 'react-router';




const steps = [
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
  OnboardingStep4,
  OnboardingStep5,
  OnboardingStep6,
  OnboardingStep7,
  OnboadingStep8
]
   
export default function Onboarding({ params, searchParams }: { params?: any, searchParams?: any }) {
 const [step, setStep] = useState(0)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const StepComponent = steps[step]
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
        console.log(e.target)
        const form = e.target as HTMLFormElement;
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const res = await fetch("http://localhost:80/api-signup", {
                method: "POST",
                body : new FormData(form)
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data || {"status":"error", "message":"Signup failed"});
                return;
            }
            setSuccess("Signup successful!");
            setTimeout(() => { 
                window.location.href = "http://127.0.0.1:5500/backend/templates/email_welcome.html";
            }, 1500);
        } catch (err) {
            setError("Network error. Please try again.");
        }
    };

  return (
    <div className='Onboarding'>
      <button className='tilbageLink'
        disabled={step === 0}
        onClick={() => {
          if (step > 0) setStep(step - 1);
        }}
      >
       <FaChevronLeft /> Tilbage
      </button>
      <form onSubmit={handleSubmit}>
        <StepComponent />
      </form>
      <button className='nextButton'
        disabled={step === steps.length - 1}
        onClick={() => {
          if (step < steps.length - 1) setStep(step + 1);
        }}
      >
       <FaArrowRight />
      </button>
       
        
        
     
    </div>
  );
}

