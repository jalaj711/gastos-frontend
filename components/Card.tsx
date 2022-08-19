import { ReactNode } from "react";

function Card(props: {
  children: ReactNode;
  bgImage?: boolean;
  extraStyles?: string;
  backgroundColor?: string;
  onClick?: (evt: Event) => any;
}) {
  return (
    <>
      <div className="container">
        <div className="wrapper">{props.children}</div>
      </div>
      <style jsx>
        {`
          .container {
            width: fit-content;
            ${props.bgImage
              ? `background-image: url(/assets/CardBg1.svg);
            background-repeat: no-repeat;
            background-size: 80px;
            background-position-x: 95%;`
              : ""}
            margin: 12px;
            border-radius: 16px;
            ${props.extraStyles}
          }
          .wrapper {
            padding: 24px;
            border-radius: 16px;
            background-color: ${props.backgroundColor || 'rgba(0, 0, 0)'} !important;
            background: linear-gradient(
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0.05)
            );
          }

          .wrapper:hover {
            cursor: pointer;
            background: linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
          }
        `}
      </style>
    </>
  );
}

export default Card;
