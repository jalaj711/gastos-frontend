import Card from "./Card";
import dynamic from "next/dynamic";

const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
  ssr: false,
});

export default function TransactionCard(props: {
  title: string;
  description: string;
  value: number;
}) {
  const colors = [
    "#6bc4abc7",
    "#6b8ac4c7",
    "#a46bc4c7",
    "#c4be6bc7",
    "#a46bc4c7",
  ];
  return (
    <Card
      extraStyles="min-width: 27vw"
      backgroundColor={colors[Math.floor(Math.random() * colors.length)]}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ flexBasis: "30%" }}>
          ${props.value}
        </h1>
        <div style={{ flexBasis: "70%" }}>
          <h3>{props.title}</h3>
          <p style={{ color: "#fff6" }}>{props.description}</p>
        </div>
      </div>
    </Card>
  );
}
