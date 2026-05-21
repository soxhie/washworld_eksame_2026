"use client";

import { useState } from "react";

import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "../onboarding.css"
export default function OnboardingStep2() {
    
    return (

        
            <div className="Onboarding-2">
                 <button
                    className='tilbageLink'
                    type="button"
                >
                    <FaChevronLeft /> Tilbage
                </button>
            <h1>Tilføj nummerplade</h1>
            <p>Vi bruger nummerpladen til</p>
            <p>automatisk genkendelse</p>
            <label htmlFor="">Nummerplade</label>
            <input type="text" />
            <button className="button"><FaPlus/>Tilføj endnu en bil</button>
             <button
                      className='nextButton'
                      type="button"

                    >
                      <FaArrowRight />
                    </button>
            </div>
        
    );
}