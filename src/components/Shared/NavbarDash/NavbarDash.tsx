"use client"
import React from 'react';
import ImagePart from '../ImagePart/ImagePart';
import ButtonPart from '../ButtonPart/ButtonPart';
export default function NavbarDash({ onClick, isHistoryVisible }: any) {
        return (
                <>
                        <div className="flex justify-between items-center p-5 bg-custom-gray">
                                <button className="flex items-center justify-center p-2.5 rounded-md text-gray-700">
                                        <ImagePart src="img/icon/menu.svg" width={24} height={24} />
                                </button>
                                <div className="flex items-center">
                                        <ButtonPart Click={onClick} className={`flex items-center justify-center p-2 border border-gray-150 rounded-md text-gray-700 mr-4 ${isHistoryVisible ? "bg-[#F2EEFD]" : null}`} IdName={'History'}>
                                                <ImagePart src="img/icon/Vector.svg" width={20} height={20} />
                                                <span className={`ml-2 ${isHistoryVisible ? "text-custom-purple" : null}`}>History</span>
                                        </ButtonPart>
                                        <ButtonPart IdName={'Share'} className="flex items-center justify-center p-2 border border-gray-150 rounded-md text-gray-700">
                                                <ImagePart src="img/icon/Vector (1).svg" width={20} height={20} />
                                                <span className="ml-2">Share</span>
                                        </ButtonPart>
                                </div>
                        </div>
                        <div className="border-b border-gray-200"></div>
                </>
        );
};