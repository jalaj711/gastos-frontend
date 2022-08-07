import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import colors from "../utils/colors";

function input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          padding: 12px 8px;
          min-width: 150px;
          max-width: 300px;
          border-radius: 8px;
          border: 1px solid #aaa;
          transition: 0.1s;
          outline: none;
          background: transparent;
          color: white;
        }

        input:hover {
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1)
          );
        }

        input:hover,
        input:focus {
          border: 1px solid ${colors.primary};
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
}

export default input;
