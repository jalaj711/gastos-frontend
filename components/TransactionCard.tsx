import Card from "./Card";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function TransactionCard(props: {
  title: string;
  description: string;
  value: number;
}) {
  // const colors = [
  //   "#6bc479c7 ",
  //   "#f44336c7",
  //   "#a46bc4c7",
  //   "#c4be6bc7",
  //   "#a46bc4c7",
  // ];
  return (
    <Card
      // backgroundColor={colors[Math.floor(Math.random() * colors.length)]}
      extraStyles={"border: 1px solid " + (props.value > 0 ? "#6bc479c7": "#f44336c7")}
      small
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          ${props.value}
        </h1>
        <div className="content">
          <h3>{props.title}</h3>
          <p style={{ color: "#fff6" }}>{props.description}</p>
        </div>
      </div>
      <style jsx>{`
        h3, p {
          margin: 4px 0;
        }
        .content {
          margin: 0 8px;
        }
        `}</style>
    </Card>
  );
}
