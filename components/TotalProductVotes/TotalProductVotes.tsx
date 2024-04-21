import { useSignal, useSignalEffect } from "@preact/signals";

import { invoke } from "deco-sites/summer-culture/runtime.ts";
import Icon from "deco-sites/summer-culture/components/ui/Icon.tsx";
import { totalVotes } from "deco-sites/summer-culture/sdk/totalVotes.ts";
import { Slide, toast, ToastContainer } from "react-toastify";
import { SendEventOnClick } from "deco-sites/summer-culture/components/Analytics.tsx";

import { useId } from "deco-sites/summer-culture/sdk/useId.ts";

export interface Props {
  productId: string;
}

export default function TotalProductVotes({ productId }: Props) {
  const votes = useSignal<number>(0);
  const clicked = useSignal(false);
  const id = useId();

  useSignalEffect(() => {
    async function addVotes() {
      const data = await invoke["deco-sites/summer-culture"].actions.sendVotes({
        productId: productId,
      });
      if (data.status === "ok") {
        totalVotes.value++;

        toast.success("obrigado pelo voto!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    async function verifyVotes() {
      const res = await invoke["deco-sites/summer-culture"].loaders.GetVotes
        .getProductVotes({
          productId: productId,
        });
      votes.value = res?.product ?? 0;
    }
    setInterval(() => {
      verifyVotes();
    }, 30000);

    if (clicked.value) {
      addVotes();
    }

    verifyVotes();
  });

  // deno-lint-ignore no-explicit-any
  const ToastContainerComponent = ToastContainer as any;

  return (
    <div class="absolute z-10 p-1 rounded border right-4 top-4 cursor-pointer flex items-center flex-row justify-center gap-2 lg:flex-col  ">
      {!clicked.value
        ? (
          <Icon
            class="cursor-pointer"
            id="MoodSmile"
            size={24}
            onClick={() => clicked.value = true}
          />
        )
        : <Icon id="MoodCheck" size={24} />}
      <span class="font-bold text-sm">{votes.value} Votos</span>

      <SendEventOnClick
        id={id}
        event={{
          // @ts-ignore:
          name: "post_score",
          params: {
            // @ts-ignore:
            level: 5,
            score: votes.value + 1,
            character: String(productId),
          },
        }}
      />

      <ToastContainerComponent />
    </div>
  );
}
