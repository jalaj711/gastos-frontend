import Card from "./Card";
import { MouseEventHandler } from "react";
import { LabelType } from "../utils/types";

export default function LabelCard(props: {
  data: LabelType,
  onClick?:MouseEventHandler;
}) {
  return (
    <Card
      extraStyles={`min-width: max(27vw, 300px);color: ${props.data.color}`}
      small
      onClick={props.onClick}
    >
      <div>
        <div>
          <h3>{props.data.name}</h3>
          <p style={{ color: "#fff6" }}>{props.data.description}</p>
        </div>
        {/**TODO: display date_created */}
      </div>
    </Card>
  );
}
