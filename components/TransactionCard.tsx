import Card from "./Card";
import Label from "./Label";
import { TransactionType } from "../utils/types";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function TransactionCard(props: {
  data: TransactionType;
}) {
  return (
    <Card extraStyles="width: 100%;max-width: 700px;">
      <div className="wrapper">
        <div className="content">
          <h3>{props.data.name}</h3>
          <p style={{ color: "#fff6" }}>{props.data.description}</p>
          <div>
            {props.data.labels &&
              props.data.labels.map((label, index) => (
                <Label key={index} color={label.color}>{label.name}</Label>
              ))}
          </div>
          <div className="details">
            <span>{props.data.date_time}</span>
            <span>•</span>
            <span>{props.data.wallet.name}</span>
          </div>
        </div>
        <h1>{props.data.is_expense && "-"} ${props.data.amount}</h1>
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
