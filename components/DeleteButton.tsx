// Event listener is client-side
"use client";

interface DeleteButtonProps {
  deleteTransaction: () => void;
}

// Delete the transaction from the database
export const DeleteButton = ({ deleteTransaction }: DeleteButtonProps) => {
  return (
    <button
      onClick={() => deleteTransaction()}
      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
    >
      Delete
    </button>
  );
};
