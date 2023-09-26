import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const languages = [
    'English',
    'Chinese',
    'Japanese',
    // Add more languages as needed
  ];

  return (
    <div>
      <h3>Select a Language:</h3>
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">Select a language</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      {selectedLanguage && (
        <p>You selected: {selectedLanguage}</p>
      )}
    </div>
  );
};

export default LanguageSelector;
