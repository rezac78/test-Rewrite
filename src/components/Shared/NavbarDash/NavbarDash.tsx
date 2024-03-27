"use client"
import React from 'react';
import ImagePart from '../ImagePart/ImagePart';
export default function NavbarDash() {
        return (
                <>
                        <div className="flex justify-between items-center p-5 bg-custom-gray">
                                <button className="flex items-center justify-center p-2.5 rounded-md text-gray-700">
                                        <ImagePart src="img/icon/menu.svg" width={24} height={24} />
                                </button>
                                <div className="flex items-center">
                                        <button className="flex items-center justify-center p-2 border border-gray-150 rounded-md text-gray-700 mr-4">
                                                <ImagePart src="img/icon/Vector.svg" width={20} height={20} />
                                                <span className="ml-2">History</span>
                                        </button>
                                        <button className="flex items-center justify-center p-2 border border-gray-150 rounded-md text-gray-700">
                                                <ImagePart src="img/icon/Vector (1).svg" width={20} height={20} />
                                                <span className="ml-2">Share</span>
                                        </button>
                                </div>
                        </div>
                        <div className="border-b border-gray-200"></div>
                </>
        );
};