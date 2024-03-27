import { Languages } from "@/types/types";
import { useState } from "react";
import ImagePart from "../ImagePart/ImagePart";

interface DropdownProps {
        id: string;
        selectedValue: string;
        onChange: (value: any) => void;
        options: Languages[];
        menuDirection: string;
}
export default function Dropdown(props: DropdownProps) {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownPositionClass =
                props.menuDirection === 'up'
                        ? 'top-0 translate-y-[-100%]'
                        : 'top-full translate-y-0';
        return (
                <div className="relative">
                        <button
                                id={props.id}
                                className="flex items-center justify-between bg-gray-200 text-gray-700 py-3 rounded-md text-lg w-full"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                                <div className="flex items-center">
                                        <span className="ml-2">{props.selectedValue}</span>
                                </div>
                                <div className="flex items-center px-3">
                                        {props.id === "engine-dropdown" && <ImagePart src="img/icon/settings.svg" width={24} height={24} />}
                                        <ImagePart
                                                src={isDropdownOpen ? "img/icon/UpDrop.svg" : "img/icon/DownDrop.svg"}
                                                width={24}
                                                height={24}
                                                className="ml-2"
                                        />
                                </div>
                        </button>
                        {isDropdownOpen && (
                                <div className={`absolute z-10 ${dropdownPositionClass} w-full bg-white shadow-lg rounded-md`}>
                                        {props.options.map((option) => (
                                                <div
                                                        key={option.id}
                                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => {
                                                                props.onChange(option.label);
                                                                setIsDropdownOpen(false);
                                                        }}
                                                >
                                                        {option.label}
                                                </div>
                                        ))}
                                </div>
                        )}
                </div>
        )
}