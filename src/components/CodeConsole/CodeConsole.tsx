import React, { useState, useEffect } from 'react';

interface KeywordClassType {
  [key: string]: string;
}
interface CodeConsoleProps {
  script: string;
  setTypingIndex: (value: number) => void;
  typingIndex: number;
  displayedScript: string;
  setDisplayedScript: any;
}
export default function CodeConsole(props: CodeConsoleProps) {
  const keywordClass: KeywordClassType = {
    import: 'text-blue-500',
    print: 'text-yellow-500',
  };

  const isKeyword = (word: string): boolean => Object.keys(keywordClass).includes(word);
  useEffect(() => {
    if (props.typingIndex < props.script.length) {
      const timeoutId = setTimeout(() => {
        props.setDisplayedScript((prev: string) => prev + props.script.charAt(props.typingIndex));
        props.setTypingIndex(props.typingIndex + 1);
      }, 20);
      return () => clearTimeout(timeoutId);
    }
  }, [props.typingIndex, props.script]);
  const processLine = (line: string, isCodeBlock: boolean) => {
    if (!isCodeBlock) {
      return <span>{line}</span>;
    }
    return line.split(' ').map((word, index) => {
      if (word.startsWith('#')) {
        return <span key={index} className="text-gray-500">{line.substring(line.indexOf('#'))}</span>;
      } else if (isKeyword(word)) {
        return <span key={index} className={keywordClass[word]}>{word}</span>;
      } else {
        return <span key={index}>{word}</span>;
      }
    }).reduce((prev, curr): any => [prev, ' ', curr]);
  };
  const renderContent = (text: string) =>
    text.split('```').map((part, index) => {
      const isCodeBlock = index % 2 !== 0;
      if (!isCodeBlock) {
        return <span key={index} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;
      }
      const firstNewLineIndex = part.indexOf('\n');
      const language = part.substring(0, firstNewLineIndex).trim() || 'Code';
      const restOfText = part.substring(firstNewLineIndex + 1);
      return (
        <div key={index} className="bg-gray-900 my-5 rounded-lg max-h-[80vh] overflow-y-auto">
          <div className="bg-gray-700 py-2 rounded-t-lg">
            <div className="flex justify-between px-3">
              <strong className="text-white">{language}</strong>
              <span className="text-white cursor-pointer">copy</span>
            </div>
          </div>
          <div className="px-3 py-4">
            <span className="text-white" style={{ whiteSpace: 'pre-wrap' }}>
              {restOfText.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {processLine(line, true)}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      );
    });
  return (
    <div className="flex flex-col flex-1 justify-center items-center w-full md:w-2/4 h-[80vh]">
      <div className="w-full flex-none max-w-4xl mx-auto overflow-y-auto px-5" style={{ maxHeight: '80vh' }}>
        {renderContent(props.displayedScript)}
      </div>
    </div>
  );
}