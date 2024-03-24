// Event listener needs to be client-side
"use client";

import { useState } from "react"; // control field state

export const SaveButton = ({
  updateTransaction,
  currentValue,
}: {
  updateTransaction: (newValue: string) => void;
  currentValue: string | null;
}) => {
  const [value, setValue] = useState(currentValue ?? "");

  // user can edit and save each field separately
  return (
    <>
      <input
        type="text"
        id="fname"
        name="fname"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        onClick={() => updateTransaction(value)}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Save
      </button>
    </>
  );
};
