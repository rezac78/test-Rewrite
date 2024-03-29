import MainPart from "@/components/MainPart/MainPart";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <NavBar />
      <MainPart />
    </div>
  );
}
