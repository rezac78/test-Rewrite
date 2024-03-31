import React, { useEffect, useState } from 'react';
import ImagePart from '../Shared/ImagePart/ImagePart';
import { LanguageDrop, EngineDrop } from '@/Event/Event';
import TextArea from '../Shared/TextArea/TextArea';
import Dropdown from '../Shared/Dropdown/Dropdown';
import ToggleButton from '../Shared/ToggleButton/ToggleButton';
import AdvanceOptions from '../AdvanceOptions/AdvanceOptions';
import ButtonPart from '../Shared/ButtonPart/ButtonPart';
import { WriteText } from '@/services/Service';
interface SelectedOptionsType {
        [key: string]: string;
}
const initialState: SelectedOptionsType = {
        selectedLeng: 'Auto',
        selectedVoice: 'Professional',
        selectedCreativity: 'Original',
        selectedPoint: 'Default',
};
interface ReWriteProps {
        setScript: (value: string) => void;
        isShortViewport: boolean;
}
export default function ReWrite(props: ReWriteProps) {
        const [text, setText] = useState('');
        const characterLimit = 200;
        const [selectedLanguage, setSelectedLanguage] = useState('English');
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleEnabled = () => setIsEnabled(!isEnabled);
        const [selectedEngine, setSelectedEngine] = useState('GPT-3.5');
        const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(initialState);

        const handleSendForm = async () => {
                try {
                        const data = await WriteText(text, selectedLanguage, selectedOptions.selectedVoice, selectedOptions.selectedCreativity, selectedOptions.selectedPoint, selectedOptions.selectedLeng);
                        let allDeltaContents: any[] = [];
                        const rawJsonStrings = data.split('data:').filter((str: string) => str.trim());
                        rawJsonStrings.forEach((rawJson: string) => {
                                try {
                                        let cleanJson = rawJson.trim();
                                        const doneMarkerIndex = cleanJson.indexOf('[DONE]');
                                        if (doneMarkerIndex !== -1) {
                                                cleanJson = cleanJson.substring(0, doneMarkerIndex).trim();
                                        }
                                        if (cleanJson.startsWith('{')) {
                                                const dataObj = JSON.parse(cleanJson);
                                                const deltaContents = dataObj.choices.map((choice: { delta: { content: any; }; }) => choice.delta.content).join(' ');
                                                allDeltaContents.push(deltaContents);
                                        }
                                } catch (parseError) {
                                        console.error('Error parsing a JSON string:', parseError, 'Raw JSON:', rawJson);
                                }
                        });
                        const finalContent = allDeltaContents.join(' ');
                        props.setScript(finalContent);
                } catch (error) {
                        console.error('Error handling form submission:', error);
                }
        };
        return (
                <div className="flex flex-col flex-1 bg-custom-gray border-r border-gray-200 w-2/4">
                        <div className="border-b border-gray-200"></div>
                        <div className="flex-none px-6 py-4">
                                <TextArea isShortViewport={props.isShortViewport} label="Target Text" Value={text} setValue={setText} characterLimit={characterLimit} />
                                <div className="text-sm text-gray-500">
                                        {text.length}/{characterLimit}
                                </div>
                        </div>
                        <div className="flex-none px-6 ">
                                <label className="block mb-2 font-medium text-sm leading-5 text-custom-dark">
                                        Language
                                </label>
                                <Dropdown
                                        id="language-dropdown"
                                        selectedValue={selectedLanguage}
                                        onChange={(newValue) => setSelectedLanguage(newValue)}
                                        options={LanguageDrop}
                                        menuDirection="down"
                                />
                        </div>
                        <div className="flex-none px-6 py-2">
                                <ToggleButton isShortViewport={props.isShortViewport}
                                        isEnabled={isEnabled} toggleEnabled={toggleEnabled} />
                        </div>
                        {isEnabled ? <div className="flex-none px-6 py-2">
                                <AdvanceOptions isShortViewport={props.isShortViewport} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                        </div> : null}
                        <div className={`${isEnabled ? "mt-auto" : ""}`}>
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
                                                                onChange={(newValue) => setSelectedEngine(newValue)}
                                                                menuDirection="up"
                                                                isShortViewport={props.isShortViewport}
                                                        />
                                                </div>
                                                <ButtonPart Click={handleSendForm} IdName="Rewrite" className={`bg-custom-purple text-white font-bold ${props.isShortViewport ? "py-2" : "py-3"} px-6 rounded-md text-lg w-11/12 `}>Rewrite</ButtonPart>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};