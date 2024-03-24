import { createClient } from "@supabase/supabase-js";

interface Transaction {
  id: string;
  title: string;
  description: string;
  date: Date;
  amount: string;
}

// connect to database
const supabase = createClient(
  "https://npewwvqsrtjptihtemix.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZXd3dnFzcnRqcHRpaHRlbWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMjU4NzAsImV4cCI6MjAyNjYwMTg3MH0.stRWT2sVGNjncydJ4o_9Eu5TjyhKXsvRgAWtWT1yiCk"
);

// amend a value in the Transactions database table
export const updateTransaction = async (
  id: string,
  colName: string,
  newValue: string | number // input by user
) => {
  "use server";

  await supabase
    .from("Transactions")
    .update({ [colName]: newValue })
    .eq("id", id);
};

// insert a row in Transactions table
export const addTransaction = async (newTitle: string) => {
  "use server";

  await supabase
    .from("Transactions")
    .insert({ id: crypto.randomUUID(), title: newTitle, date: new Date() });
};

// remove a row from Transactions
export const deleteTransaction = async (id: string) => {
  "use server";

  try {
    await supabase.from("Transactions").delete().eq("id", id);
  } catch (error) {
    throw Error(`Failed to delete transaction: ${error}`);
  }
};

// retrieve a transaction from the database
export const getTransaction = async (id: string) => {
  "use server";

  const { data: details } = await supabase
    .from("Transactions")
    .select()
    .eq("id", id);

  return details;
};

// retrieve all transactions
export const getTransactions = async () => {
  "use server";

  const { data: transactions } = await supabase.from("Transactions").select();

  return transactions;
};
