import { useState } from 'react';

export const useTextAndOptions = (initialText: string = '', initialOptions: any) => {
    const [text, setText] = useState(initialText);
    const [selectedOptions, setSelectedOptions] = useState(initialOptions);
    return {
        text,
        setText,
        selectedOptions,
        setSelectedOptions
    };
};
