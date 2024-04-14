import { signal } from "@preact/signals";
import { effect } from "@preact/signals";

export const totalVotes = signal<number>(0);

effect(() => {
  totalVotes.value;
  const intervalId = setInterval(() => {
    totalVotes.value;
  }, 30000);

  return () => {
    clearInterval(intervalId);
  };
});
