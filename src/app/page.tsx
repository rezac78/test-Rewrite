import NavBar from "@/components/NavBar/NavBar";
import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <NavBar />
      <div className="flex flex-col flex-1">
        <NavbarDash />
        <ReWrite />
      </div>
    </div>
  );
}
