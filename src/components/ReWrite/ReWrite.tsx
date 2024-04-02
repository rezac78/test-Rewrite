import React from 'react';
import { useTextAndOptions } from '@/hooks/useTextAndOptions'; 
import { LanguageSelector } from '@/components/LanguageSelector/LanguageSelector'; 
import { EngineSelector } from '@/components/EngineSelector/EngineSelector'; 
import TextArea from '../Shared/TextArea/TextArea';
import ToggleButton from '../Shared/ToggleButton/ToggleButton';
import AdvanceOptions from '../AdvanceOptions/AdvanceOptions';
import { streamWriteText } from '@/services/Service';
import { isValidJsonString } from '@/utils/utils'; 
const initialState = {
        selectedLeng: 'Auto',
        selectedVoice: 'Professional',
        selectedCreativity: 'Original',
        selectedPoint: 'Default',
};
interface ReWriteProps {
        setScript: any;
        isShortViewport: boolean;
        resetDisplay: any;
}
export default function ReWrite(props: ReWriteProps) {
        const {
                text,
                setText,
                selectedOptions,
                setSelectedOptions
        } = useTextAndOptions('', initialState);
        const [selectedLanguage, setSelectedLanguage] = React.useState('English');
        const [isEnabled, setIsEnabled] = React.useState(false);
        const [selectedEngine, setSelectedEngine] = React.useState('GPT-3.5');
        const toggleEnabled = () => setIsEnabled(!isEnabled);
        const handleSendForm = async () => {
                props.resetDisplay();
                const reader = await streamWriteText(
                        text,
                        selectedLanguage,
                        selectedOptions.selectedVoice,
                        selectedOptions.selectedCreativity,
                        selectedOptions.selectedPoint,
                        selectedOptions.selectedLeng
                );
                let allDeltaContents: any[] = [];
                if (reader) {
                        reader.read().then(function processText({ done, value }) {
                                if (done) {
                                        const finalContent = allDeltaContents.join(' ');
                                        props.setScript(finalContent);
                                        return;
                                }
                                let chunkText = new TextDecoder().decode(value);
                                const rawJsonStrings = chunkText.split('data:').filter(str => str.trim());
                                rawJsonStrings.forEach(rawJson => {
                                        try {
                                                let cleanJson = rawJson.trim();
                                                const doneMarkerIndex = cleanJson.indexOf('[DONE]');
                                                if (doneMarkerIndex !== -1) {
                                                        cleanJson = cleanJson.substring(0, doneMarkerIndex).trim();
                                                }

                                                if (isValidJsonString(cleanJson) && cleanJson.startsWith('{')) {
                                                        const dataObj = JSON.parse(cleanJson);
                                                        const deltaContents = dataObj.choices.map((choice: { delta: { content: any; }; }) => choice.delta.content).join(' ');
                                                        allDeltaContents.push(deltaContents);
                                                }
                                        } catch (parseError) {
                                                console.error('Error parsing a JSON string:', parseError, 'Raw JSON:', rawJson);
                                        }
                                });
                                const tempContent = allDeltaContents.join(' ');
                                props.setScript(tempContent);
                                reader.read().then(processText);
                        });
                }
        };
        return (
                <div className="flex flex-col flex-1 bg-custom-gray border-r border-gray-200 w-2/4">
                        <div className="border-b border-gray-200"></div>
                        <div className="flex-none px-6 py-4">
                                <TextArea isShortViewport={props.isShortViewport} label="Target Text" Value={text} setValue={setText} characterLimit={200} />
                                <div className="text-sm text-gray-500">
                                        {text.length}/200
                                </div>
                        </div>
                        <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                        <div className="flex-none px-6 py-2">
                                <ToggleButton isShortViewport={props.isShortViewport}
                                        isEnabled={isEnabled} toggleEnabled={toggleEnabled} />
                        </div>
                        {isEnabled && <div className="flex-none px-6 py-2"> <AdvanceOptions isShortViewport={props.isShortViewport} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} /></div>}
                        <EngineSelector selectedEngine={selectedEngine} setSelectedEngine={setSelectedEngine} handleSendForm={handleSendForm} isShortViewport={props.isShortViewport} />
                </div>
        );
};