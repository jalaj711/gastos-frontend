import Card from "./Card";
import colors from "../utils/colors";
import { MouseEventHandler } from "react";
import { WalletType } from "../utils/types";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function WalletCard(props: {
  data: WalletType;
  selected?: boolean;
  small?: boolean;
  onClick?: MouseEventHandler;
}) {
  // const colors = [
  //   "#6bc4abc7",
  //   "#6b8ac4c7",
  //   "#a46bc4c7",
  //   "#c4be6bc7",
  //   "#a46bc4c7",
  // ];
  return (
    <Card
      small={props.small}
      extraStyles="min-width: 300px"
      backgroundColor={props.selected ? colors.dark : undefined}
      onClick={props.onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>${props.data.balance}</h1>
        <div className="content">
          <h3>{props.data.name}</h3>
          {!props.small && (
            <p style={{ color: "#fff6" }}>{props.data.description}</p>
          )}
        </div>
        { /** TODO: Show created_on here */}
      </div>
      <style jsx>{`
        .content {
          margin: 0 8px;
        }
      `}</style>
    </Card>
  );
}
