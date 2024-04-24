import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentSubstrIndex, setCurrentSubstrIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');

  useEffect(() => {
    const typingInterval = 100; // Adjust as needed for typing speed

    const timeout = setTimeout(() => {
      if (currentSubstrIndex < words[currentWordIndex].length) {
        // Type out the word character by character
        setDisplayedWord(words[currentWordIndex].substring(0, currentSubstrIndex + 1));
        setCurrentSubstrIndex(currentSubstrIndex + 1);
      } else {
        // Word fully typed, reset and move to the next word
        setTimeout(() => {
          setCurrentSubstrIndex(0);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setDisplayedWord('');
        }, 1000); // Delay before next word (adjust as needed)
      }
    }, typingInterval);

    return () => clearTimeout(timeout);
  }, [currentSubstrIndex, currentWordIndex, words]);

  return (
    <div>
      <p>{displayedWord}</p>
    </div>
  );
};

export default Typewriter;