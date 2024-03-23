import { updateTransaction } from "@/app/api/Transactions";
import { SaveButton } from "@/components/SaveButton";
import { createClient } from "@/utils/supabase/server";

async function getDetails(id: string) {
  "use server";

  const supabase = createClient();

  const { data: details } = await supabase
    .from("Transactions")
    .select()
    .eq("id", id);

  return details;
}

async function editAttribute(id: number, newTitle: string) {
  "use server";

  const supabase = createClient();

  await supabase.from("Transactions").update({ title: newTitle }).eq("id", id);
}

interface TxDetailsProps {
  params: { id: string };
}

export default async function TransactionDetails({ params }: TxDetailsProps) {
  console.log("id: ", params.id);
  const transactionDetails = await getDetails(params.id);
  const transaction = transactionDetails?.[0];

  if (transaction === null || transaction === undefined)
    return <h1>Failed to retrieve transaction details</h1>;

  const { id, title, description, date, amount } = transaction;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Transaction Details</h1>

      <ul>
        <li>title: </li>
        <SaveButton
          updateTransaction={async (newValue: string) => {
            "use server";
            await updateTransaction(id, "title", newValue);
          }}
          currentValue={title}
        />
        <li>description: </li>
        <SaveButton
          updateTransaction={async (newValue: string) => {
            "use server";
            await updateTransaction(id, "description", newValue);
          }}
          currentValue={description}
        />
        <li>date: {date}</li>
        <li>amount: </li>
        <SaveButton
          updateTransaction={async (newValue: string) => {
            "use server";
            await updateTransaction(
              id,
              "amount",
              Number.parseInt(newValue) // TODO check a number
            );
          }}
          currentValue={amount?.toString()}
        />
      </ul>
    </>
  );
}
