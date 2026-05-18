"use client";

import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import "../onboarding.css";



interface StepComponentProps {
  currentStep: number;
  totalSteps?: number;
}

export function StepComponent({ currentStep, totalSteps = 7 }: StepComponentProps) {

  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < totalSteps) {
      router.push(`/pages/onboarding/step${currentStep + 1}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      router.push(`/pages/onboarding/step${currentStep - 1}`);
    }
  };

  return (
    <>
      <div>
        <button
          className='tilbageLink'
          type="button"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          <FaChevronLeft /> Tilbage
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button
          className='nextButton'
          type="button"
          onClick={handleNext}
          
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
