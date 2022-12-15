import Card from "./Card";
import Label from "./Label";
import { TransactionType } from "../utils/types";
import {format} from "date-fns";
// import dynamic from "next/dynamic";

// const CircularProgress = dynamic(() => import("./Progress/CircularProgress"), {
//   ssr: false,
// });

export default function TransactionCard(props: {
  data: TransactionType;
  fullWidth?: boolean;
  mx ?: number;
  my?: number
}) {
  return (
    <Card
      extraStyles={`min-width: 350px;max-width: 700px;${props.fullWidth ? "width: 100%;" : ""}`}
      mx={props.mx} my={props.my}
    >
      <div className="wrapper">
        <div className="name-amount">
          <div className="content">
            <h3>{props.data.name}</h3>
            <p style={{ color: "#fff6" }}>{props.data.description}</p>
          </div>
          <h1>
            {props.data.is_expense && "-"} ${props.data.amount}
          </h1>
        </div>
        <div>
          {props.data.labels &&
            props.data.labels.map((label, index) => (
              <Label key={index} color={label.color}>
                {label.name}
              </Label>
            ))}
        </div>
        <div className="details">
          <span>{format(new Date(props.data.date_time), "dd MMM 'at' HH:mm")}</span>
          <span>•</span>
          <span>{props.data.wallet.name}</span>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
        }
        h3,
        p {
          margin: 4px 0;
        }
        h1 {
          min-width: max-content;
        }
        .name-amount {
          display: flex;
          align-items: center;
          width: 100%;
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
