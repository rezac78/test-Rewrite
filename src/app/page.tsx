import NavBar from "@/components/NavBar/NavBar";
import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <main className="flex-1">
        <NavbarDash/>
        <ReWrite/>
      </main>
    </div>
  );
}
