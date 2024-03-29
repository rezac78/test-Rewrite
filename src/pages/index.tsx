import HistoryWindow from "@/components/HistoryWindow/HistoryWindow";
import MainPart from "@/components/MainPart/MainPart";
import NavBar from "@/components/NavBar/NavBar";
import { useState } from "react";

export default function Home() {
  const [isHistoryVisible, setHistoryVisible] = useState(false);
  const toggleHistoryWindow = () => {
    setHistoryVisible(!isHistoryVisible);
  };
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <NavBar />
      <MainPart toggleHistoryWindow={toggleHistoryWindow} isHistoryVisible={isHistoryVisible} />
      <div className="relative min-h-screen">
        <HistoryWindow
          isVisible={isHistoryVisible}
          onClose={() => setHistoryVisible(false)}
        />
      </div>
    </div>
  );
}
