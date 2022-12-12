import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Label from "../components/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TransactionCard from "../components/TransactionCard";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { TransactionType } from "../utils/types";
import URLs, { API_BASE } from "../utils/endpoints";
import {
  hideGlobalLoader,
  showGlobalLoader,
} from "../components/GlobalLoader/loaderSlice";
import Button from "../components/Button";

interface TransactionHistorySearchParams {
  [param: string]: string;
}

function TransactionHistory() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const searchRef = useRef<HTMLInputElement>(null);
  const [labels, setLabels] = useState<number[]>([]);
  const [wallets, setWallets] = useState<number[]>([]);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const toggleLabel = (label: number) => {
    const index = labels.indexOf(label);
    const lbl = labels.slice();
    if (index > -1) {
      lbl.splice(index, 1);
    } else {
      lbl.push(label);
    }
    setLabels(lbl);
  };

  const toggleWallet = (wallet: number) => {
    const index = wallets.indexOf(wallet);
    const wlt = wallets.slice();
    if (index > -1) {
      wlt.splice(index, 1);
    } else {
      wlt.push(wallet);
    }
    setWallets(wlt);
  };

  const getTransactions = () => {
    // Todo: Change this to a local loader
    const search_filters: TransactionHistorySearchParams = {
      labels: labels.toString(),
      wallets: wallets.toString(),
    };
    if (
      searchRef.current?.value !== undefined &&
      searchRef.current?.value !== ""
    ) {
      search_filters.search = searchRef.current?.value;
    }
    const search_params = new URLSearchParams(search_filters).toString();
    // window.location.search = search_params;
    dispatch(showGlobalLoader());
    fetch(API_BASE + URLs.TRANSACTIONS.SEARCH + "?" + search_params, {
      headers: {
        Authorization: "Token " + auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(hideGlobalLoader());
        setTransactions(res.trxns);
      })
      .catch((error) => {
        dispatch(hideGlobalLoader());
        console.error(error);
      });
  };

  useEffect(() => {
    // On initial load we also need to extract data from the URL, if any.
    const params = new URLSearchParams(window.location.search);
    if (params.get("search") && searchRef.current) {
      searchRef.current.value = params.get("search") || "";
    }
    if (params.get("labels")) {
      try {
        var lbls: Array<number | string> =
          params.get("labels")?.split(",") || [];
        var i;
        for (i = 0; i < lbls?.length; i++) {
          lbls[i] = Number(lbls[i]);
        }
        setLabels(lbls as number[]);
      } catch (e) {
        console.error(e);
      }
    }
    if (params.get("wallets")) {
      try {
        var wlts: Array<number | string> =
          params.get("wallets")?.split(",") || [];
        var i;
        for (i = 0; i < wlts?.length; i++) {
          wlts[i] = Number(wlts[i]);
        }
        setWallets(wlts as number[]);
      } catch (e) {
        console.error(e);
      }
    }

    getTransactions();
  }, [dispatch, auth.token]);
  return (
    auth.user_data && (
      <>
        <Head>
          <title>Transaction History</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="mainWrapper">
            <h1>Transaction History</h1>
          </div>
          <div className="section">
            <div className="filters">
              <div className="search">
                <FontAwesomeIcon icon={faSearch} strokeWidth={1} />
                <input placeholder="Search..." ref={searchRef} />
              </div>
              <h4>Filter by labels</h4>
              <div className="horizontalScroll">
                {auth.user_data.labels.map((elem) => (
                  <Label
                    key={elem.id}
                    onClick={() => {
                      toggleLabel(elem.id);
                    }}
                    selected={labels.indexOf(elem.id) > -1}
                    color={elem.color}
                  >
                    {elem.name}
                  </Label>
                ))}
              </div>
              <h4>Filter by wallet</h4>
              <div className="horizontalScroll">
                {auth.user_data.wallets.map((elem) => (
                  <Label
                    key={elem.id}
                    onClick={() => {
                      toggleWallet(elem.id);
                    }}
                    selected={wallets.indexOf(elem.id) > -1}
                  >
                    {elem.name}
                  </Label>
                ))}
              </div>
              <div className="applyFilters">
                <Button onClick={getTransactions}>search</Button>
              </div>
            </div>
            <div className="trxns cardGrid">
              {transactions.length !== 0 ? (
                <>
                  <h4>{transactions.length} Transaction(s)</h4>
                  {transactions.map((elem) => (
                    <TransactionCard data={elem} key={elem.id} fullWidth />
                  ))}
                </>
              ) : (
                <i>No transactions found</i>
              )}
            </div>
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
            }
            .cardGrid h4 {
              margin: 8px 16px;
            }

            .mainWrapper {
              width: 100%;
              align-items: center;
              display: flex;
              justify-content: center;
            }

            .mainWrapper h1 {
              justify-content: center;
              align-self: center;
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
              max-width: 724px;
              align-items: center;
              justify-content: center;
            }
            .section {
              display: flex;
              justify-content: center;
            }
            .filters {
              padding: 12px 24px;
              border-radius: 12px;
              background: rgba(255, 255, 255, 0.05);
              height: fit-content;
              flex-grow: 0;
              margin-top: 8px;
              min-width: max-content;
            }
            .filters h4 {
              text-transform: uppercase;
              font-weight: 700;
              font-size: 12px;
            }
            .applyFilters {
              width: 100%;
              margin-top: 16px;
            }
            .applyFilters > :global(button) {
              width: 100%;
            }
            @media (max-width: 500px) {
              .mainWrapper {
                margin-top: 32px;
              }
              h1 {
                font-size: 3rem;
              }
            }

            @media (max-width: 950px) {
              .section {
                flex-direction: column;
                align-items: center;
              }
              .filters {
                width: 700px;
                margin: 8px;
              }
            }
            @media (max-width: 700px) {
              .filters {
                min-width: auto;
                width: calc(100% - 24px);
              }
            }
          `}
        </style>
      </>
    )
  );
}

export default TransactionHistory;
