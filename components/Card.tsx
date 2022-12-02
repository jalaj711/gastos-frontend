import { ReactNode } from "react";

function Card(props: {
  children: ReactNode;
  extraStyles?: string;
  backgroundColor?: string;
  small?: boolean;
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
            margin: ${props.small ? "8px" : "12px"};
            border-radius: ${props.small ? "12px" : "16px"};
            ${props.extraStyles}
          }
          .wrapper {
            padding: ${props.small ? "12px" : "24px"};
            border-radius: ${props.small ? "8px" : "16px"};
            background-color: ${props.backgroundColor || 'rgba(255, 255, 255, 0.05)'} !important;
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
