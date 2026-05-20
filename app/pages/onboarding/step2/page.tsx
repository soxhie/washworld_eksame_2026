"use client";

import { useState } from "react";

import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import "../onboarding.css"
export default function OnboardingStep2() {
   
    return (
        
            <div className="Onboarding-2">
                <h1>Tilføj nummerplade</h1>
                <p>Vi bruger nummerpladen til automatisk genkendelse</p>
                <label htmlFor="">Nummerplade</label>
                <input type="text" />
                <button> <FaPlus/>Tilføj endnu en bil</button>
            </div>
        
    );
}