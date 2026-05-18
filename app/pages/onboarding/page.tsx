"use client";
import OnboardingStep1 from "./step1/page";
import OnboardingStep2 from "./step2/page";
import OnboardingStep4 from "./step4/page";
import OnboardingStep5 from "./step5/page";
import OnboardingStep6 from "./step6/page";
import OnboardingStep7 from "./step7/page";

import { StepComponent } from "./components/stepsComponent";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';
import "./onboarding.css";
import { useState, useEffect } from 'react';

const Steps = [
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep4,
  OnboardingStep5,
  OnboardingStep6,
  OnboardingStep7,
 
];


export default function Onboarding() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue]=useState("")
 
  return (
    <div className='Onboarding'>
     
    
      
    </div>
  );
}

