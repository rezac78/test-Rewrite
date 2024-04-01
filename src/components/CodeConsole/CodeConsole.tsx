import React from 'react';
interface KeywordClassType {
  [key: string]: string;
}
export default function CodeConsole({ script }: { script: string }) {
  const isKeyword = (word: string): boolean => ['import', 'print'].includes(word);
  const keywordClass: KeywordClassType = { import: 'text-blue-500 mr-2', print: 'text-yellow-500' };

  const processLine = (line: string, isCodeBlock: boolean) => line.split(/\s+/).map((word: string, index: number) => {
    const space = index < line.split(/\s+/).length - 1 ? ' ' : '';
    if (!isCodeBlock) return `${word}${space}`;

    if (word.startsWith('#')) {
      return <span key={index} className="text-gray-500">{line.substring(line.indexOf('#'))}</span>;
    } else if (isKeyword(word)) {
      return <span key={index} className={keywordClass[word] as string}>{word}</span>;
    }
    return `${word}${space}`;
  });

  const renderCodeBlock = (part: string, language: string) => (
    <div className="bg-gray-900 my-5 rounded-lg max-h-[80vh] overflow-y-auto">
      <div className="bg-gray-700 py-2 rounded-t-lg">
        <div className="flex justify-between px-3">
          <strong className="text-white">{language}</strong>
          <span className="text-white cursor-pointer">copy</span>
        </div>
      </div>
      <div className="px-3 py-4">
        <span className="text-white" style={{ whiteSpace: 'pre-wrap' }}>
          {part.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {processLine(line, true)}
              {index < part.split('\n').length - 1 ? <br /> : ''}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );

  const renderText = (text: string) => text.split('```').map((part: string, index: number) => {
    const isCodeBlock = index % 2 !== 0;
    if (!isCodeBlock) return <span key={index} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>;

    const firstNewLineIndex = part.indexOf('\n');
    const language = part.substring(0, firstNewLineIndex).trim() || 'Code';
    const restOfText = part.substring(firstNewLineIndex + 1);

    return renderCodeBlock(restOfText, language);
  });

  return <div className="flex flex-col flex-1 justify-center items-center w-full md:w-2/4 h-[80vh]">
    <div className="w-full flex-none max-w-4xl mx-auto overflow-y-auto px-5" style={{ maxHeight: '80vh' }}>
      {renderText(script)}
    </div>
  </div>;
}
