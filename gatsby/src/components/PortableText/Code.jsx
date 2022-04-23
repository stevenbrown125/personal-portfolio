import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardCheckIcon, ClipboardCopyIcon } from '@heroicons/react/outline';

export default function Code({ value: { code, language } }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  if (!code) {
    return null;
  }
  return (
    <div className="relative max-w-prose sm:max-w-none">
      <SyntaxHighlighter
        language={language || 'text'}
        lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard
        text={code}
        onCopy={() => handleCopyClick()}
        className="absolute w-6 h-6 top-2 lg:top-2 right-4"
      >
        {isCopied ? <ClipboardCheckIcon className="w-4 h-4 md:h-5 md:w-5 " /> : <ClipboardCopyIcon className="w-4 h-4 md:h-5 md:w-5" />}
      </CopyToClipboard>
    </div>
  );
}

Code.propTypes = {
  value: PropTypes.any.isRequired,
};
