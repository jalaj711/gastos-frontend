import Card from "./Card";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function AccountCard(props: {
  title: string;
  description: string;
  value: number;
}) {
  // const colors = [
  //   "#6bc4abc7",
  //   "#6b8ac4c7",
  //   "#a46bc4c7",
  //   "#c4be6bc7",
  //   "#a46bc4c7",
  // ];
  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>${props.value}</h1>
        <div className="content">
          <h3>{props.title}</h3>
          <p style={{ color: "#fff6" }}>{props.description}</p>
        </div>
      </div>
      <style jsx>{`
        .content {
          margin: 0 8px;
        }
      `}</style>
    </Card>
  );
}
