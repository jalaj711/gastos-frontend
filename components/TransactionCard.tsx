import Card from "./Card";
import Label from "./Label";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function TransactionCard(props: {
  title: string;
  description?: string;
  value: number;
  labels?: Array<string>;
}) {
  return (
    <Card extraStyles="width: 100%;max-width: 700px;">
      <div className="wrapper">
        <div className="content">
          <h3>{props.title}</h3>
          <p style={{ color: "#fff6" }}>{props.description}</p>
          <div>
            {props.labels &&
              props.labels.map((label, index) => (
                <Label key={index}>{label}</Label>
              ))}
          </div>
          <div className="details">
            <span>12 Nov 22</span>
            <span>•</span>
            <span>Wallet 1</span>
          </div>
        </div>
        <h1>${props.value}</h1>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
        }
        h3,
        p {
          margin: 4px 0;
        }
        .content {
          margin-right: 16px;
          flex-grow: 1;
        }
        .details {
          font-size: small;
          color: #fff6;
        }
        .details span {
          margin: 0 2px;
        }
      `}</style>
    </Card>
  );
}
