import DeployButton from "../components/AddButton";
//import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
//import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
//import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
//import Header from "@/components/Header";
import Link from "next/link";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    //<div className="flex-1 w-full flex flex-col gap-20 items-center"></div>
    <>
      <div className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
        <Link href="/transactions">Transactions</Link>
      </div>
    </>
  );
}
