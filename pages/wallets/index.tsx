import Head from "next/head";
import { faAdd, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import WalletCard from "../../components/WalletCard";
import Button from "../../components/Button";
import Router from "next/router";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHooks";
import { useRef, useState } from "react";
import Input from "../../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showSnackbarThunk } from "../../components/Snackbar/snackbarThunk";
import {
  createWallet as createWalletGlobal
} from "../../utils/walletThunk";

function Wallets() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const wallets = useAppSelector((state) => state.wallets.wallets);
  const [showCreator, setShowCreator] = useState(false);
  const newWalletNameRef = useRef<HTMLInputElement>(null);
  const newWalletDescRef = useRef<HTMLTextAreaElement>(null);

  const createWallet = () => {
    if (newWalletNameRef.current?.value) {
      dispatch(
        createWalletGlobal(
          {
            name: newWalletNameRef.current?.value,
            description: newWalletDescRef.current?.value,
          },
          () => {
            setShowCreator(false);
            if (newWalletDescRef.current && newWalletNameRef.current) {
              newWalletDescRef.current.value = "";
              newWalletNameRef.current.value = "";
            }
          }
        )
      );
    } else {
      dispatch(showSnackbarThunk("Name & color are required fields!"));
    }
  };

  return (
    <>
      <Head>
        <title>My Wallets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mainWrapper">
          <h1>My Wallets</h1>

          <Button
            startIcon={faAdd}
            fullRadius
            onClick={() => setShowCreator(true)}
          >
            Create New
          </Button>
        </div>
        <div className="section">
          {wallets.length === 0 ? (
            <div className="no-data">
              <span>Seems like you don&apos;t have any wallets yet.</span>
            </div>
          ) : (
            <div className="cardGrid">
              {wallets.length !== 0 &&
                wallets.map((elem) => (
                  <WalletCard
                    data={elem}
                    key={elem.id}
                    onClick={() => Router.push("/wallets/" + elem.id)}
                  />
                ))}
            </div>
          )}
        </div>
        <div
          className="create"
          style={{ display: showCreator ? "block" : "none" }}
        >
          <div className="title">
            <h2>New Wallet</h2>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setShowCreator(false)}
            />
          </div>
          <h3>Give it a name:</h3>
          <Input ref={newWalletNameRef} type="text" placeholder="Name" />
          <h3>Give it an optional description</h3>
          <textarea
            placeholder="Description"
            rows={4}
            className="description"
            ref={newWalletDescRef}
          />
          <Button startIcon={faCheck} onClick={createWallet}>
            Create
          </Button>
        </div>
      </main>
      <div style={{ width: "100vw", height: "72px" }} />

      <style jsx>
        {`
          main {
            padding: 12px;
          }

          h1 {
            font-weight: 700;
            color: white;
            font-size: 4rem;
            text-align: center;
            margin-bottom: 16px;
          }

          .mainWrapper {
            width: 100%;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 32px;
          }

          .search {
            width: 100%;
            padding: 0px 16px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            margin-top: 8px;
          }

          .search input {
            margin-left: 8px;
            padding: 12px 8px;
            background: transparent;
            border: none;
            width: 80%;
            color: #fff8;
          }

          .search input:hover,
          .search input:focus {
            outline: none;
          }

          .search svg {
            stroke-width: 1px;
          }
          .cardGrid {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-evenly;
          }
          .no-data {
            width: 100%;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            color: rgba(228, 228, 228, 0.8);
          }
          .create {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 350px;
            background-color: rgba(0, 0, 0, 0.9);
            background-image: linear-gradient(
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
            backdrop-filter: blur(8px);
            padding: 24px 32px;
            border-radius: 12px 0 0 12px;
            animation: slide-from-right 0.3s ease-out forwards;
          }

          .create > .title {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
          }

          .title > :global(svg) {
            width: 24px;
            height: 24px;
            cursor: pointer;
          }

          .create > :global(input),
          .create > :global(button),
          .description {
            width: 100%;
            margin: 12px 0;
          }

          .create h3 {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: "Roboto";
            font-weight: 700;
            margin-top: 12px;
            margin-bottom: 0px;
          }

          .description {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 8px;
            color: white;
            padding: 12px;
            margin-top: 12px;
          }

          .description:focus {
            outline: none;
          }
          @media (max-width: 500px) {
            .mainWrapper {
              margin-top: 32px;
            }
            .create {
              width: 100vw;
              height: fit-content;
              top: auto;
              bottom: 0;
              border-radius: 12px 12px 0 0;
              padding-bottom: 84px;
              animation: slide-from-bottom 0.3s ease-out forwards;
            }
          }

          @keyframes slide-from-right {
            from {
              transform: translateX(100%);
            }
            90% {
              transform: translateX(-5%);
            }
            to {
              transform: translateX(0);
            }
          }
          @keyframes slide-from-bottom {
            from {
              transform: translateY(100%);
            }
            90% {
              transform: translateY(-5%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

export default Wallets;
