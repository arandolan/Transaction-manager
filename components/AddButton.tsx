"use client";

import { useState } from "react";

export default function AddButton({
  addTransaction,
}: {
  addTransaction: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        type="text"
        id="fname"
        name="fname"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        disabled={title === ""}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        onClick={() => {
          addTransaction(title);
          setTitle("");
        }}
      >
        Add Transaction
      </button>
    </>
  );
}
