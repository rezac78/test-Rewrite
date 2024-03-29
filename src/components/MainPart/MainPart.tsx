"use client"
import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";
import { useState } from "react";
import HistoryWindow from "../HistoryWindow/HistoryWindow";
import CodeConsole from "../CodeConsole/CodeConsole";

export default function MainPart() {
        const [isHistoryVisible, setHistoryVisible] = useState(false);
        const toggleHistoryWindow = () => {
                setHistoryVisible(!isHistoryVisible);
        };
        const [script, setScript] = useState('');

        return (
                <div className="flex flex-col flex-1">
                        <NavbarDash isHistoryVisible={isHistoryVisible} onClick={toggleHistoryWindow} />
                        <div className="flex flex-1 ">
                                <ReWrite setScript={setScript} />
                                <CodeConsole script={script} />
                        </div>
                        <HistoryWindow
                                isVisible={isHistoryVisible}
                                onClose={() => setHistoryVisible(false)}
                        />
                </div>
        );
}