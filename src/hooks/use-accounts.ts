import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Account } from "models/account";
import { COLORS } from "consts";

function withColors(accounts: Account[]) {
  return accounts?.reverse().map((account, index) => ({
    ...account,
    color: COLORS[index],
  }));
}

const fetchAccounts = async () => {
  const { data } = await axios.get<Account[]>(`/api/accounts`);

  const connected = data?.filter(
    (account) => account.was_connected && account.status !== "error"
  );

  return withColors(connected);
};

export function useAccounts() {
  const [isSyncingNewData, setIsSyncingNewData] = useState(false);

  const { data, ...query } = useQuery(["accounts"], fetchAccounts, {
    refetchInterval: isSyncingNewData ? 5000 : false,
  });

  const isSynced = (account: Account) =>
    account?.availability?.activities?.status === "synced";

  useEffect(() => {
    const syncedAccounts = data?.every(isSynced);

    if (!syncedAccounts && !isSyncingNewData) {
      setIsSyncingNewData(true);
    }

    if (syncedAccounts && isSyncingNewData) {
      setIsSyncingNewData(false);
    }
  }, [data, isSyncingNewData]);

  return { data, ...query, isSyncingNewData };
}
