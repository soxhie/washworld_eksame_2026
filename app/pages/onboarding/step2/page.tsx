"use client";
import { useState } from "react";
import Toggle from "../components/toggle";
import "../onboarding.css"
import PasswordRequirements from "../components/passwordRequirements";
import { StepComponent } from "../components/stepsComponent";
export default function OnboardingStep2() {
   
    return (
        <>
            <StepComponent currentStep={2} totalSteps={7} />
            <div className="Onboarding-2">
                <h1>Opret bruger</h1>
                <div className="inputContainer">
                    <label>Email</label>
                    <input
                        name="user_email"
                        type="text"
                    />
                </div>
                <PasswordRequirements />
                <Toggle/>
            </div>
        </>
    );
}
