// Event listener is client-side
"use client";

import { useState } from "react"; //control state of the field value

export default function EditField({
  editAttribute,
  id,
  colName,
}: {
  editAttribute: (id: number, colName: string) => void;
  id: number;
  colName: string;
}) {
  const [title, setTitle] = useState("");

  // user input field
  return (
    <>
      <input
        type="text"
        id="fname"
        name="fname"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </>
  );
}
