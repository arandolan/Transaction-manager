import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from "@/app/api/Transactions";
import AddButton from "@/components/AddButton";
import { DeleteButton } from "@/components/DeleteButton";
import Link from "next/link";

interface Transaction {
  id: number;
  title: string;
}

// List all transactions in the database
export default async function ListTransactions() {
  const transactions = await getTransactions();

  if (transactions === null) return <h1>Call Failed</h1>;

  //Calculate total amount (sum amount across all transactions)
  let sum = 0;
  const amounts = transactions.map((t) => t.amount);
  sum = amounts.reduce((a, b) => a + b, 0);

  return (
    <pre>
      <h1 className="text-3xl font-bold underline">Transaction List</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">{t.title}</p>
                  <p className="text-slate-500 font-medium">{t.description}</p>
                </div>
                <DeleteButton
                  deleteTransaction={async () => {
                    "use server";
                    await deleteTransaction(t.id);
                  }}
                />
                <Link href={`/transactions/${t.id}`}>Transaction details</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <AddButton
        addTransaction={async (newTitle: string) => {
          "use server";
          await addTransaction(newTitle);
        }}
      />
      <h2>Total spent: {sum}</h2>
    </pre>
  );
}
