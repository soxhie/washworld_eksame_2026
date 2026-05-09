"use client";
import Image from "next/image";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function OnboardingStep1() {

  return (
   <div className="Onboarding-1">
     
        <h1 className="title">Indtast navn</h1>
    
    <div className="inputContainer">
        <label>Navn</label>
        <input type="text" name="user_name" required />
    </div>
    <div className="inputContainer">
        <label htmlFor="Efternavn">Efternavn</label>
        <input type="text" name="user_last_name" required/>
    </div>
    
   </div>
   
  );
}
