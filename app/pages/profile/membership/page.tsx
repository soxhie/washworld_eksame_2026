"use client";

import { useRouter } from "next/navigation";
import AppHeader from "../../../components/layout/AppHeader";
import BottomNav from "../../../components/layout/BottomNav";
import MembershipOptions from "../components/MembershipOptions";
import "../profile.css";

export default function ProfileMembershipPage() {
  const router = useRouter();

  return (
    <main className="ProfilePage">
      <AppHeader variant="brand" />
      <MembershipOptions
        onBack={() => router.push("/pages/profile")}
        onExistingMembershipClick={() => router.push("/pages/profile/membership/details")}
        onCreateMembershipClick={() => router.push("/pages/profile/membership/create")}
      />
      <BottomNav activeTab="profile" variant="angled" />
    </main>
  );
}
