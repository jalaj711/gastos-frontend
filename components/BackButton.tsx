import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../utils/colors";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter()
  return (
    <>
      <button onClick={router.back}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <style jsx>
        {`
          button {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 1px solid rgba(160, 160, 160);
            padding: 8px;
            color: rgba(160, 160, 160);
            background: ${colors.background};
            position: fixed;
            top: 16px;
            left: 16px;
            font-size: large;
          }

          button:hover {
            background-image: linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
