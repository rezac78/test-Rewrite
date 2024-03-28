"use client"
import React, { useState } from 'react';
import { navbarIcons } from '@/Event/Event';
import ImagePart from '../Shared/ImagePart/ImagePart';
export default function NavBar() {
        const [activeId, setActiveId] = useState('ReWrite');
        return (
                <div className="flex flex-col bg-custom-gray text-white border-r border-gray-200">
                        <div className="flex flex-col flex-1">
                                <div className="flex p-5">
                                        <ImagePart src="img/brand-openai.svg" width={44} height={44} />
                                        <span className="ml-2 mt-2 font-sans text-2xl font-bold leading-tight text-left text-custom-gradient">Logo Brand</span>
                                </div>
                                <div className="border-b border-gray-200"></div>
                                <div className="flex flex-col flex-1 mb-10 p-1">
                                        {navbarIcons.map((e) => (
                                                <div key={e.id} onClick={() => setActiveId(e.name)} className={`flex items-center px-4 py-3 cursor-pointer ${activeId === e.name ? 'py-2 border-l-3 bg-custom-gradient border-custom-purple' : ''}`}>
                                                        <ImagePart className={`${activeId === e.name ? 'text-red-500' : 'text-blue-600'}`}
                                                                src={e.icon} width={24} height={24} />

                                                        <span className="ml-2 font-sans text-sm font-normal leading-5 text-nav-title">{e.name}</span>
                                                </div>
                                        ))}
                                </div>
                                <div className="border-t border-gray-200"></div>
                                <div className="flex items-center justify-between p-5">
                                        <div className="flex items-center">
                                                <ImagePart src="img/Avatar Style 6.svg" width={50} height={50} className="rounded-full" />
                                                <div className="flex flex-col ml-2">
                                                        <span className="font-dm font-medium text-sm leading-5 text-right text-gray-900">Sara Moradi</span>
                                                        <span className="text-gray-500 font-dm font-normal text-xs leading-4 text-left">Lorem</span>
                                                </div>
                                        </div>
                                        <div className="flex items-center ml-4">
                                                <ImagePart src="img/icon/bell.svg" width={24} height={24} className="mr-2" />
                                                <ImagePart src="img/icon/info.svg" width={24} height={24} />
                                        </div>
                                </div>
                        </div>
                </div>

        );
};