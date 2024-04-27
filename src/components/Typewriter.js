import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentSubstrIndex, setCurrentSubstrIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = 100; // Adjust as needed for typing speed
    const deleteInterval = 50; // Adjust as needed for delete speed
    const word = words[currentWordIndex];
  
    const timeout = setTimeout(() => {
      if (!deleting && currentSubstrIndex < word.length) {
        // Type out the word character by character
        setDisplayedWord(word.substring(0, currentSubstrIndex + 1));
        setCurrentSubstrIndex(currentSubstrIndex + 1);
      } else if (!deleting && currentSubstrIndex === word.length) {
        // Start deleting the word after a delay
        setTimeout(() => {
          setDeleting(true);
        }, 6000); // 6 seconds delay
      } else if (deleting && currentSubstrIndex >= 0) {
        // Delete the word character by character
        setDisplayedWord(word.substring(0, currentSubstrIndex));
        setCurrentSubstrIndex(currentSubstrIndex - 1);
      } else {
        // Word fully deleted, move to the next word
        setDeleting(false);
        setCurrentSubstrIndex(0);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setDisplayedWord('');
      }
    }, deleting ? deleteInterval : typingInterval);
  
    return () => clearTimeout(timeout);
  }, [currentSubstrIndex, currentWordIndex, deleting, words]);
  
  // Blinking caret
  const caret = deleting ? '' : '|';

  return (
    <div>
      <p>{displayedWord}{caret}</p>
    </div>
  );
};

export default Typewriter;