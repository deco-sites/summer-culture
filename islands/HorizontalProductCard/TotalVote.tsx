import { invoke } from "deco-sites/summer-culture/runtime.ts";
import { totalVotes } from "../../sdk/totalVotes.ts";

import Icon from "deco-sites/summer-culture/components/ui/Icon.tsx";
export interface Props {
  productId: string;
}

export default function TotalVote({ productId }: Props) {
  const handleClick = async () => {
  };

  return (
    <div>
      {totalVotes.value === 0
        ? <Icon size={24} id="MoodSmile" onClick={() => handleClick()} />
        : <Icon size={24} id="MoodCheck" onClick={() => totalVotes.value--} />}
    </div>
  );
}
