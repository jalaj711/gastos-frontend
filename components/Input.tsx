import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import colors from "../utils/colors";

function _Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { outlined?: boolean },
  ref?: ForwardedRef<HTMLInputElement>
) {
  const { outlined, ...othProps } = props;
  return (
    <>
      <input {...othProps} ref={ref} />
      <style jsx>{`
        input {
          padding: 12px 8px;
          min-width: 150px;
          max-width: 300px;
          border-radius: 8px;
          border: ${outlined ? "1px solid #aaa" : "1px solid transparent"};
          transition: 0.1s;
          outline: none;
          background: ${outlined ? "transparent" : "rgba(255, 255, 255, 0.05)"};
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

export const Input = forwardRef(_Input);
export default Input;
