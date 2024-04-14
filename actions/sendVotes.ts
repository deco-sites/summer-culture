export interface Props {
  productId: string;
}

export interface Result {
  status: "ok" | "failed";
}

const sendVotes = async (
  props: Props,
): Promise<Result> => {
  const fetchSendVotes = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "summer-culture",
    },
    body: JSON.stringify({
      productId: props.productId,
    }),
  });

  if (fetchSendVotes.ok) {
    return {
      status: "ok",
    };
  }
  return { status: "failed" };
};

export default sendVotes;
