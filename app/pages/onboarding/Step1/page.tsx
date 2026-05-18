"use client";
import Image from "next/image";
import { useState } from "react";
import { saveOnboardingData } from "../utils/onboardingStorage";
import "../onboarding.css";
import { StepComponent } from "../components/stepsComponent";
export default function OnboardingStep1() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const isNextDisabled = firstName.trim() === "" || lastName.trim() === "";

    return (
        <>
            <StepComponent currentStep={1} totalSteps={7} isNextDisabled={isNextDisabled} />
            <div className="Onboarding-1">
                <h1 className="title">Indtast navn</h1>
                <div className="inputContainer">
                    <label>Navn</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="Efternavn">Efternavn</label>
                    <input
                        type="text"
                        name="user_last_name"
                        required
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
}
