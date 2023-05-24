import React from "react";

interface TextTruncateProps {
  text: string;
  maxLength: number;
  className?: string;
}

const TextTruncate: React.FC<TextTruncateProps> = ({
  text,
  maxLength,
  className,
}) => {
  if (text.length <= maxLength) {
    return <div>{text}</div>;
  }

  const truncatedText = text.slice(0, maxLength) + "...";

  return <div className={className}>{truncatedText}</div>;
};

export default TextTruncate;
