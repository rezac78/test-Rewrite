import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";
import { useState } from "react";
import CodeConsole from "../CodeConsole/CodeConsole";
interface MainPartProps {
        toggleHistoryWindow: (value: string) => void;
        isHistoryVisible: boolean;
}
export default function MainPart(props: MainPartProps) {
        const [script, setScript] = useState('');
        return (
                <div className="flex flex-col flex-1">
                        <NavbarDash isHistoryVisible={props.isHistoryVisible} onClick={props.toggleHistoryWindow} />
                        <div className="flex flex-1 ">
                                <ReWrite setScript={setScript} />
                                <CodeConsole script={script} />
                        </div>
                </div>
        );
}