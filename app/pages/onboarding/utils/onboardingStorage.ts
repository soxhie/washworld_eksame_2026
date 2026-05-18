// utils/onboardingStorage.ts
export function saveOnboardingData(formData: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem("onboardingData", JSON.stringify(formData));
  }
}

export function loadOnboardingData() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("onboardingData");
    return data ? JSON.parse(data) : {};
  }
  return {};
}