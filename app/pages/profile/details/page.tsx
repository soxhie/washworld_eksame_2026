"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppHeader from "../../../components/layout/AppHeader";
import BottomNav from "../../../components/layout/BottomNav";
import ProfileDetailsForm from "../components/ProfileDetailsForm";
import "../profile.css";

export default function ProfileDetailsPage() {
  const router = useRouter();
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [detailsForm, setDetailsForm] = useState({
    phone: "+45 11 22 33 44",
    email: "filip@email.dk",
    password: "********",
    paymentMethod: "**** 4242",
    address: "Jagtvej 123, 2200 Kobenhavn N",
    plateNumber: "AB 12 456",
  });

  return (
    <main className="ProfilePage">
      <AppHeader variant="brand" />
      <ProfileDetailsForm
        detailsForm={detailsForm}
        onChange={(field, value) =>
          setDetailsForm((prev) => ({ ...prev, [field]: value }))
        }
        onSubmit={(e) => {
          e.preventDefault();
          setSaveMessage("Dine oplysninger er opdateret.");
        }}
        onBack={() => router.push("/pages/profile")}
        saveMessage={saveMessage}
      />
      <BottomNav activeTab="profile" variant="angled" />
    </main>
  );
}
