import { useState } from "react";
import Dropdown from "../Shared/Dropdown/Dropdown";
import { Options } from '@/Event/Event';

interface SelectedOptionsType {
        [key: string]: string;
}

const initialState: SelectedOptionsType = {
        selectedLeng: 'Auto',
        selectedVoice: 'Auto',
        selectedCreativity: 'Repetitive',
        selectedPoint: 'Default',
};
export default function AdvanceOptions() {
        const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(initialState);
        const handleChange = (optionId: string, newValue: string) => {
                setSelectedOptions((prev) => ({
                        ...prev,
                        [optionId]: newValue,
                }));
        };
        return (
                <div className="p-8">
                        <div className="grid sm:grid-cols-2 lg:flex-row gap-4">
                                {Options.map((e) => (
                                        <div key={e.id}>
                                                <label className="block mb-2 font-medium text-sm leading-5 text-custom-dark">
                                                        {e.label}
                                                </label>
                                                <Dropdown
                                                        id={e.NameId}
                                                        options={e.Data}
                                                        selectedValue={selectedOptions[e.selected]}
                                                        onChange={(newValue) => handleChange(e.selected, newValue)}
                                                        menuDirection="up"
                                                />
                                        </div>
                                ))}
                        </div>
                </div>
        )
}