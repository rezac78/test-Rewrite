"use client"
import React, { useEffect, useState } from 'react';
import ImagePart from '../Shared/ImagePart/ImagePart';
import { LanguageDrop, EngineDrop } from '@/Event/Event';
import TextArea from '../Shared/TextArea/TextArea';
import Dropdown from '../Shared/Dropdown/Dropdown';
import ToggleButton from '../Shared/ToggleButton/ToggleButton';
import AdvanceOptions from '../AdvanceOptions/AdvanceOptions';
import ButtonPart from '../Shared/ButtonPart/ButtonPart';
import { WriteText } from '@/services/Service';
import CodeConsole from '../CodeConsole/CodeConsole';
interface SelectedOptionsType {
        [key: string]: string;
}
const initialState: SelectedOptionsType = {
        selectedLeng: 'Auto',
        selectedVoice: 'Auto',
        selectedCreativity: 'Repetitive',
        selectedPoint: 'Default',
};
export default function ReWrite() {

        const [text, setText] = useState('');
        const [script, setScript] = useState('');
        const characterLimit = 200;
        const [selectedLanguage, setSelectedLanguage] = useState('English');
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleEnabled = () => setIsEnabled(!isEnabled);
        const [selectedEngine, setSelectedEngine] = useState('GPT-3.5');
        const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>(initialState);
        const handleSendForm = async () => {
                try {
                        const data = await WriteText(text);
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
                        setScript(finalContent);
                } catch (error) {
                        console.error('Error handling form submission:', error);
                }
        };
        console.log(script)
        return (
                <div className="flex">
                        <div className="flex-1 overflow-auto bg-custom-gray border-r border-gray-200 md:w-2/4">
                                <div className="flex items-center space-x-2 px-8 py-5">
                                        <ImagePart src="img/icon/writing.svg" className="gray-filter" width={40} height={40} />
                                        <h1 className="font-sans text-2xl font-medium leading-tight text-left">ReWrite</h1>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="px-8 pt-8">
                                        <TextArea label="Target Text" Value={text} setValue={setText} characterLimit={characterLimit} />
                                        <div className="text-sm text-gray-500">
                                                {text.length}/{characterLimit}
                                        </div>
                                </div>
                                <div className="p-8">
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
                                <div className="p-8">
                                        <ToggleButton isEnabled={isEnabled} toggleEnabled={toggleEnabled} />
                                </div>
                                {isEnabled ? <AdvanceOptions selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} /> : null}
                                <div className="p-8">
                                        <label className="block mb-2 font-medium text-sm leading-5 text-custom-dark">
                                                Engine
                                        </label>
                                        <div className="flex flex-col sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-4">
                                                <div className="w-11/12">
                                                        <Dropdown
                                                                id="engine-dropdown"
                                                                options={EngineDrop}
                                                                selectedValue={selectedEngine}
                                                                onChange={(newValue) => setSelectedEngine(newValue)}
                                                                menuDirection="up"
                                                        />
                                                </div>
                                                <ButtonPart Click={handleSendForm} IdName="Rewrite" className="bg-custom-purple text-white font-bold py-3 px-6 rounded-md text-lg w-11/12 ">Rewrite</ButtonPart>
                                        </div>
                                </div>
                        </div>
                        <div className="w-2/4 bg-white">
                                <CodeConsole script={script}/>
                        </div>
                </div>
        );
};