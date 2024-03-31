import Dropdown from "../Shared/Dropdown/Dropdown";
import { Options } from '@/Event/Event';
interface AdvanceOptionsProps {
        setSelectedOptions: any;
        selectedOptions: any;
        isShortViewport: boolean;
}
export default function AdvanceOptions(props: AdvanceOptionsProps) {
        const handleChange = (optionId: string, newValue: string) => {
                props.setSelectedOptions((prev: any) => ({
                        ...prev,
                        [optionId]: newValue,
                }));
        };
        const gridClasses = `grid gap-4 grid-cols-2`;
        return (
                <div className={gridClasses}>
                        {Options.map((e) => (
                                <div key={e.id}>
                                        <label className={`block mb-2 font-medium ${props.isShortViewport ? 'text-xs' : 'text-sm'} leading-5 text-custom-dark`}>
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
        )
}