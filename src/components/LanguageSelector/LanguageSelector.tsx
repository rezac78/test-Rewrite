import React from 'react';
import Dropdown from '../Shared/Dropdown/Dropdown';
import { LanguageDrop } from '@/Event/Event';

interface LanguageSelectorProps {
    selectedLanguage: string;
    setSelectedLanguage: (value: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, setSelectedLanguage }) => (
    <div className="flex-none px-6 ">
        <label className="block mb-2 font-medium text-sm leading-5 text-custom-dark">
            Language
        </label>
        <Dropdown
            id="language-dropdown"
            selectedValue={selectedLanguage}
            onChange={setSelectedLanguage}
            options={LanguageDrop}
            menuDirection="down"
        />
    </div>
);
