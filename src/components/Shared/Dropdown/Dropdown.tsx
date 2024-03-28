import { Languages } from "@/types/types";
import { useState } from "react";
import ImagePart from "../ImagePart/ImagePart";
import SearchPart from "../SearchPart/SearchPart";

interface DropdownProps {
        id: string;
        selectedValue: string;
        onChange: (value: string) => void;
        options: Languages[];
        menuDirection: string;
}
export default function Dropdown(props: DropdownProps) {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownPositionClass =
                props.menuDirection === 'up'
                        ? 'top-0 translate-y-[-100%]'
                        : 'top-16 translate-y-0';
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
                                <div className={`absolute z-10 border border-black rounded-full ${dropdownPositionClass} w-full bg-white shadow-lg rounded-md`}>
                                        {props.id === "language-dropdown" ? <SearchPart className="relative flex-grow w-11/12 m-auto mt-3" /> : null}
                                        {props.options.map((option) => (
                                                <div
                                                        key={option.id}
                                                        className={`px-3 flex justify-between rounded-full py-2 my-3 ${props.id === "language-dropdown" ? "mx-8" : "mx-2"}  text-sm text-gray-700 ${props.selectedValue === option.label ? 'bg-gray-200' : 'hover:bg-gray-100'} cursor-pointer`}
                                                        onClick={() => {
                                                                props.onChange(option.label);
                                                                setIsDropdownOpen(false);
                                                        }}
                                                >
                                                        <div className="flex items-center">
                                                                {props.id === "engine-dropdown" && option.icon && <ImagePart src={option.icon} width={24} height={24} className="mr-2" />}
                                                                {option.label}
                                                        </div>
                                                        {props.selectedValue === option.label ? <ImagePart src='img/icon/tick.svg' width={20} height={20} className="mr-2" /> : null}
                                                </div>
                                        ))}
                                </div>
                        )}
                </div>
        )
}