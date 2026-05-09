"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

export default function OnboardingStep3() {
const [showPassword, setShowPassword] = useState(false);

  return (
   <div className="Onboarding-3">
     
        <h1>Indtast kode</h1>
        <p>Indtast den kode, der er sendt til din e-mail. (Tjek også din spam-mappe)</p>
        <div className="pinInputContainer">
         
        </div>
   </div>
   
  );
}
