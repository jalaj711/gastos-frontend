import colors from "../utils/colors";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

export default function Label(props: {
  children: string;
  selected?: boolean;
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  const color = props.color || "rgba(228,228,228)";
  return (
    <>
      <div onClick={props.onClick}>
        {props.selected && (
          <FontAwesomeIcon icon={faCheck} style={{ marginRight: "4px" }} />
        )}
        {props.children}
      </div>
      <style jsx>{`
        div {
          border-color: ${props.selected
            ? props.color
              ? color
              : colors.primary
            : color};
          border-width: ${props.selected ? 2 : 1}px;
          border-style: solid;
          border-radius: 16px;
          height: 26px;
          padding: 4px 8px;
          font-size: 12px;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          color: ${props.selected
            ? props.color
              ? color
              : colors.primary
            : color};
          margin: 4px;
          display: inline-flex;
          font-weight: ${props.selected ? 700 : 400};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
