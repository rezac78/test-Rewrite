"use client"
import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";
import { useState } from "react";
import HistoryWindow from "../HistoryWindow/HistoryWindow";

export default function MainPart() {
        const [isHistoryVisible, setHistoryVisible] = useState(false);
        const toggleHistoryWindow = () => {
                setHistoryVisible(!isHistoryVisible);
        };
        
        return (
                <div className="flex flex-col flex-1">
                        <NavbarDash isHistoryVisible={isHistoryVisible} onClick={toggleHistoryWindow} />
                        <ReWrite />
                        <HistoryWindow
                                isVisible={isHistoryVisible}
                                onClose={() => setHistoryVisible(false)}
                        />
                </div>
        );
}
