import colors from "../../utils/colors";

function ProgressBar(props: {
  value: number;
  sub?: string;
  horizontal?: boolean;
  showValue?: boolean;
}) {
  return (
    <>
      <div className="progressContainer">
        {props.sub && <span className="progressSubtitle">{props.sub}</span>}
        <div className="progressBar">
          <div className="progressElement">
            {props.showValue && (
              <span className="progressValue">{props.value}%</span>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .progressContainer {
            display: flex;
            flex-direction: ${props.horizontal ? "row" : "column-reverse"};
            align-content: center;
            width: fit-content;
            margin: 8px;
            ${props.horizontal ? "align-items: center;" : ""}
          }
          .progressSubtitle {
            font-size: small;
            color: #ddd;
            text-align: center;
          }
          .progressBar {
            ${props.horizontal ? "height" : "width"}: 36px;
            ${props.horizontal ? "width" : "height"}: 150px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.07);
            padding: 4px;
            ${props.horizontal
              ? ""
              : `display: flex;
                align-content: end;
                flex-direction: column-reverse;`}
          }
          .progressElement {
            ${props.horizontal ? "width" : "height"}: ${props.value}%;
            ${props.horizontal ? "height" : "width"}: 28px;
            background: ${colors.primary};
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .progressValue {
            font-size: xx-small;
            mix-blend-mode: difference;
            color: white;
          }
        `}
      </style>
    </>
  );
}

export default ProgressBar;
