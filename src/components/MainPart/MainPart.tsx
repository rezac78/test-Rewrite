import ReWrite from "@/components/ReWrite/ReWrite";
import NavbarDash from "@/components/Shared/NavbarDash/NavbarDash";
import { useEffect, useState } from "react";
import CodeConsole from "../CodeConsole/CodeConsole";
import HeaderTitle from "../Shared/HeaderTitle/HeaderTitle";
interface MainPartProps {
        toggleHistoryWindow: (value: string) => void;
        isHistoryVisible: boolean;
}
export default function MainPart(props: MainPartProps) {
        const [script, setScript] = useState('');
        const [isShortViewport, setIsShortViewport] = useState(false);
        useEffect(() => {
                const handleResize = () => {
                        if (window.innerHeight < 920) {
                                setIsShortViewport(true);
                        } else {
                                setIsShortViewport(false);
                        }
                };
                window.addEventListener('resize', handleResize);
                handleResize();
                return () => window.removeEventListener('resize', handleResize);
        }, []);
        return (
                <div className="flex flex-col flex-1 h-screen">
                        <NavbarDash isHistoryVisible={props.isHistoryVisible} onClick={props.toggleHistoryWindow} />
                        <HeaderTitle Title="ReWrite" isShortViewport={isShortViewport} />
                        <div className="flex flex-1 ">
                                <ReWrite setScript={setScript} isShortViewport={isShortViewport} />
                                <CodeConsole script={script} />
                        </div>
                </div>
        );
}