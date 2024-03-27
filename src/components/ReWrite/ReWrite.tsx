"use client"
import React, { useState } from 'react';
import ImagePart from '../Shared/ImagePart/ImagePart';
import { LanguageDrop } from '@/Event/Event';
export default function ReWrite() {
        const [text, setText] = useState('');
        const characterLimit = 200;
        const [selectedLanguage, setSelectedLanguage] = useState('en');
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleEnabled = () => setIsEnabled(!isEnabled);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [selectedEngine, setSelectedEngine] = useState('Engine 1');
        const engines = ['Engine 1', 'Engine 2', 'Engine 3'];
        return (
                <div className="flex">
                        <div className="flex flex-col bg-custom-gray border-r border-gray-200">
                                <div className="flex items-center space-x-2 px-8 py-5">
                                        <ImagePart src="img/icon/writing.svg" width={40} height={40} />
                                        <h1 className="font-sans text-2xl font-medium leading-tight text-left">ReWrite</h1>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="px-8 pt-8">
                                        <label htmlFor="targetText" className="block font-medium text-sm leading-5 text-custom-dark mb-2">Target Text</label>
                                        <textarea
                                                id="targetText"
                                                className="form-textarea mt-1 block w-[35rem] border-2 border-gray-300 rounded-lg p-4 text-lg text-gray-700 placeholder-gray-400 bg-[#F8F8F8]"
                                                rows={9}
                                                placeholder="paste your text that you wish to rewrite or improve ... "
                                                value={text}
                                                onChange={(e) => setText(e.target.value.slice(0, characterLimit))}
                                        ></textarea>
                                </div>
                                <div className="text-sm text-gray-500 px-8">
                                        {text.length}/{characterLimit}
                                </div>
                                <div className="p-8">
                                        <label htmlFor="language-dropdown" className="block mb-2 font-medium text-sm leading-5 text-custom-dark">Language</label>
                                        <select
                                                id="language-dropdown"
                                                value={selectedLanguage}
                                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                                className="bg-[#F8F8F8] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                        >
                                                {LanguageDrop.map((language) => (
                                                        <option key={language.code} value={language.code}>
                                                                {language.label}
                                                        </option>
                                                ))}
                                        </select>
                                </div>
                                <div className="p-8">
                                        <div className="flex items-center">
                                                <button
                                                        onClick={toggleEnabled}
                                                        className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${isEnabled ? 'bg-blue-600 justify-end' : 'bg-gray-200 justify-start'
                                                                }`}
                                                >
                                                        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                                                </button>
                                                <span className="ml-3 font-medium text-sm leading-5 text-custom-dark">Advanced</span>
                                        </div>
                                        <div className="text-base font-normal leading-6 text-gray-400 px-14">
                                                More access for more accurate results.
                                        </div>
                                </div>
                                <div className="p-8 pb-16">
                                        <label htmlFor="engine-dropdown" className="block mb-3 font-medium text-lg leading-6 text-custom-dark">Engine</label>
                                        <div className="flex flex-col sm:flex-row items-center  space-y-4 sm:space-y-0 sm:space-x-4">
                                                <div className="flex justify-between items-center w-full">
                                                        <div className="relative flex-grow">
                                                                <button
                                                                        className="flex items-center justify-between bg-gray-200 text-gray-700 py-3 rounded-md text-lg w-full"
                                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                                >
                                                                        <div className="flex items-center">
                                                                                <span className="ml-2">{selectedEngine}</span>
                                                                        </div>
                                                                        <div className="flex items-center px-3">
                                                                                <ImagePart src="img/icon/settings.svg" width={32} height={32} />
                                                                                <ImagePart src="img/icon/DownDrop.svg" width={20} height={20} className="ml-2" />
                                                                        </div>
                                                                </button>
                                                                {isDropdownOpen && (
                                                                        <div className="absolute z-10 -top-2 mt-1 w-full bg-white shadow-lg rounded-md translate-y-[-100%]">
                                                                                {engines.map((engine) => (
                                                                                        <div
                                                                                                key={engine}
                                                                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                                                                onClick={() => {
                                                                                                        setSelectedEngine(engine);
                                                                                                        setIsDropdownOpen(false);
                                                                                                }}
                                                                                        >
                                                                                                {engine}
                                                                                        </div>
                                                                                ))}
                                                                        </div>
                                                                )}
                                                        </div>
                                                </div>
                                                <button className="bg-custom-purple text-white font-bold py-3 px-6 rounded-md text-lg w-11/12 ">
                                                        Rewrite
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};