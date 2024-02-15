import React from 'react';

function Display({ input }) {
  return (
    <div className="display">
      {input || "0"}
    </div>
  );
}

export default Display;
