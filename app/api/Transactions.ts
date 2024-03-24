import { createClient } from "@/utils/supabase/client";

interface Transaction {
  id: string;
  title: string;
  description: string;
  date: Date;
  amount: string;
}

const supabase = createClient();

export const updateTransaction = async (
  id: string,
  colName: string,
  newValue: string | number
) => {
  "use server";

  await supabase
    .from("Transactions")
    .update({ [colName]: newValue })
    .eq("id", id);
};

export const addTransaction = async (newTitle: string) => {
  "use server";

  await supabase
    .from("Transactions")
    .insert({ id: crypto.randomUUID(), title: newTitle, date: new Date() });
};

export const deleteTransaction = async (id: string) => {
  "use server";

  try {
    await supabase.from("Transactions").delete().eq("id", id);
  } catch (error) {
    throw Error(`Failed to delete transaction: ${error}`);
  }
};

export const getTransaction = async (id: string) => {
  "use server";

  const { data: details } = await supabase
    .from("Transactions")
    .select()
    .eq("id", id);

  return details;
};

export const getTransactions = async () => {
  "use server";

  const { data: transactions } = await supabase.from("Transactions").select();

  return transactions;
};
