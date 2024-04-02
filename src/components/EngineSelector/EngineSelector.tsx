import React from 'react';
import Dropdown from '../Shared/Dropdown/Dropdown';
import { EngineDrop } from '@/Event/Event';
import ButtonPart from '../Shared/ButtonPart/ButtonPart';

interface EngineSelectorProps {
        selectedEngine: string;
        setSelectedEngine: (value: string) => void;
        handleSendForm: () => void;
        isShortViewport: boolean;
}

export const EngineSelector: React.FC<EngineSelectorProps> = ({ selectedEngine, setSelectedEngine, handleSendForm, isShortViewport }) => (
        <div className='flex-none px-6 py-2'>
                <label className="block mb-2 font-medium text-sm leading-5 text-custom-dark">
                        Engine
                </label>
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="w-11/12">
                                <Dropdown
                                        id="engine-dropdown"
                                        options={EngineDrop}
                                        selectedValue={selectedEngine}
                                        onChange={setSelectedEngine}
                                        menuDirection="up"
                                        isShortViewport={isShortViewport}
                                />
                        </div>
                        <ButtonPart Click={handleSendForm} IdName="Rewrite" className={`bg-custom-purple text-white font-bold ${isShortViewport ? "py-2" : "py-3"} px-6 rounded-md text-lg w-11/12 `}>Rewrite</ButtonPart>
                </div>
        </div>
);
