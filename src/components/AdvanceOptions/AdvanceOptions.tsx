import Dropdown from "../Shared/Dropdown/Dropdown";
import { Options } from '@/Event/Event';
interface AdvanceOptionsProps {
        setSelectedOptions: any;
        selectedOptions: any;
}
export default function AdvanceOptions(props: AdvanceOptionsProps) {
        const handleChange = (optionId: string, newValue: string) => {
                props.setSelectedOptions((prev: any) => ({
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
                                                        selectedValue={props.selectedOptions[e.selected]}
                                                        onChange={(newValue) => handleChange(e.selected, newValue)}
                                                        menuDirection="up"
                                                />
                                        </div>
                                ))}
                        </div>
                </div>
        )
}