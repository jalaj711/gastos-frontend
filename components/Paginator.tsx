import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "./Button";

function _Paginator(props: {
  lastPage: number;
  active: number;
  setActive: (page: number) => any;
}) {
  if (props.lastPage <= 0) {
    return null;
  }

  const firstPage = props.lastPage > 1 && 1;
  const lastPage = props.lastPage;

  return (
    <div className="paginator-wrapper">
      <Button fullRadius secondary onClick={() => props.active > 1 && props.setActive(props.active - 1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      {
        firstPage && props.active !== firstPage && <Button fullRadius secondary onClick={() => props.setActive(firstPage)}>
        {firstPage}
      </Button>
      }
      {
        firstPage && props.active - firstPage > 1 && <span>...</span>
      }
        <Button fullRadius>Page {props.active}</Button>
      {
        lastPage && lastPage - props.active > 1 && <span>...</span>
      }
      {
        lastPage && props.active !== lastPage && <Button fullRadius secondary onClick={() => props.setActive(lastPage)}>
        {lastPage}
      </Button>
      }
      <Button fullRadius secondary onClick={() => props.active < lastPage && props.setActive(props.active + 1)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
      <style jsx>{`
        .paginator-wrapper {
          width: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default function Paginator () {
    const [active, setActive] = useState(1);
    return <_Paginator active={active} lastPage={11} setActive={setActive} /> 
}
