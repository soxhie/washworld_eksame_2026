"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveOnboardingData } from "../utils/onboardingStorage";
import { FaArrowRight } from "react-icons/fa";
import PinInput from "../components/pinInput";
import "../onboarding.css";
import Progress from "../components/progress";
import BackButton from "@/app/components/layout/BackButton";


export default function OnboardingStepInProgress() {
  const router = useRouter();
  
 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pinCode, setPinCode] = useState("");
  const validateEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      saveOnboardingData({ user_pin_code: pinCode });
      setTimeout(() => {
        router.push("/pages/onboarding/step3");
      }, 1500);
    } catch (err) {
      setError("Network error. Please try igen.");
    }
  };
  return (
    <div>
    <form className="Onboarding-1" onSubmit={validateEmail} action="#" autoComplete="off">
     
        <BackButton/>
      <h1 className="title">Indtast PIN-kode</h1>
      
      <PinInput/>
      {success && <div style={{ color: 'green', marginTop: 4 }}>{success}</div>}
     
      <button className='nextButton' type="submit">
        <FaArrowRight />
      </button>
    </form>
    <Progress/>
    </div>
  );
}