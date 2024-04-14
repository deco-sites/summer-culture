import { invoke } from "deco-sites/summer-culture/runtime.ts";
import { totalVotes } from "../../sdk/totalVotes.ts";

import { useSignalEffect } from "@preact/signals";

export default function TotalVotes() {
  useSignalEffect(() => {
    async function getVotes() {
      const response = await invoke["deco-sites/summer-culture"].loaders
        .GetVotes.getVotes();

      totalVotes.value = response.total;
    }

    if (totalVotes.value) {
      getVotes();
    }

    setInterval(() => {
      getVotes();
    }, 30000);

    getVotes();
  });

  return (
    <>
      {totalVotes.value}
    </>
  );
}
