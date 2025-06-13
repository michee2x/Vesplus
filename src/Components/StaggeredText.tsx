import { forwardRef } from "react";

type Props = {
  text: string;
  className?: string;
};

const StaggeredText = forwardRef<HTMLHeadingElement, Props>(
  ({ text, className }, ref) => {
    return (
      <h1
        ref={ref}
        className={`flex flex-wrap gap-2 lg:gap-6 overflow-hidden ${className}`}
      >
        {text.split(" ").map((word, wordIdx) => (
          <span key={wordIdx} className="flex">
            {word.split("").map((char, charIdx) => (
              <span key={charIdx} className="char inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    );
  }
);

export default StaggeredText;
 