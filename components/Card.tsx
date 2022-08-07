import { ReactNode, StyleHTMLAttributes } from "react";

function Card(props: {
  title: string;
  children: ReactNode;
  onClick?: (evt: Event) => any;
}) {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h3 className="title">{props.title}</h3>
          <p className="content">{props.children}</p>
        </div>
      </div>
      <style jsx>
        {`
        .container {

            width: fit-content;
            background-image: url(/assets/CardBg1.svg);
            background-repeat: no-repeat;
            background-size: 80px;
            background-position-x: 95%;
            min-width: 30vw;
            margin: 12px;
            border-radius: 16px;
        }
          .wrapper {
            padding: 24px;
            border-radius: 16px;
            background-color: rgba(0, 0, 0);
            background: linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
          }
          .title {
            font-size: x-large;
          }
        `}
      </style>
    </>
  );
}

export default Card;
