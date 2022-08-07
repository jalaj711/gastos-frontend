import { ReactNode } from "react";

function Card(props: {title: string, children: ReactNode, onClick?: (evt: Event) => any}){
    return(
        <>
        <div className="container">
            <h3 className="title">{props.title}</h3>
            <p className="content">{props.children}</p>
        </div>
        <style jsx>
            {`
                .container {
                    padding: 24px;
                    border-radius: 16px;
                    background: rgba(0, 0, 0);
                    background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
                    width: fit-content;
                    min-width: 30vw;
                    margin: 12px;
                }
                .title {
                    font-size: x-large;
                }
            `}
        </style>
        </>
    )
}

export default Card;