import React from 'react';

export default function Pagination({ offset, setOffset, updateOffsetInUrl }) {
  const handlePreviousClick = () => {
    const newOffset = Math.max(offset - 12, 0);
    setOffset(newOffset);
    updateOffsetInUrl(newOffset);
  };

  const handleNextClick = () => {
    const newOffset = offset + 12;
    setOffset(newOffset);
    updateOffsetInUrl(newOffset);
  };

  return (
    <div className="pagination-buttons">
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
