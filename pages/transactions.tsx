import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Label from "../components/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSearch } from "@fortawesome/free-solid-svg-icons";
import TransactionCard from "../components/TransactionCard";
import { useAppDispatch, useAppSelector } from "../utils/reduxHooks";
import { TransactionType } from "../utils/types";
import URLs, { API_BASE } from "../utils/endpoints";
import {
  hideGlobalLoader,
  showGlobalLoader,
} from "../components/GlobalLoader/loaderSlice";
import Button from "../components/Button";
import Paginator from "../components/Paginator";
import Router from "next/router";
import Navbar from "../components/Navbar";
import { showSnackbarThunk } from "../components/Snackbar/snackbarThunk";

interface TransactionHistorySearchParams {
  labels?: string;
  wallets?: string;
  search?: string;
  page?: string;
}

function TransactionHistory() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const userLabels = useAppSelector((state) => state.labels.labels);
  const userWallets = useAppSelector((state) => state.wallets.wallets);

  const searchRef = useRef<HTMLInputElement>(null);
  const [labels, setLabels] = useState<number[]>([]);
  const [wallets, setWallets] = useState<number[]>([]);
  const [page, setPage] = useState<{ current: number; total: number }>({
    current: 1,
    total: 1,
  });
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

  const getTransactions = (search_filters: TransactionHistorySearchParams) => {
    // Push the search filters into users browser's URL & search history
    const search = new URLSearchParams(window.location.search);
    for (let i = 0; i < Object.keys(search_filters).length; i++) {
      const filter = Object.keys(search_filters)[i];
      //@ts-ignore
      search.set(filter, search_filters[filter]);
    }
    const url = new URL(window.location.href);
    url.search = search.toString();
    window.history.pushState(null, "", url.toString());

    // Todo: Change this to a local loader
    dispatch(showGlobalLoader());

    // Fetch the transactions
    const search_params = new URLSearchParams(
      search_filters as { [index: string]: string }
    ).toString();
    fetch(API_BASE + URLs.TRANSACTIONS.SEARCH + "?" + search_params, {
      headers: {
        Authorization: "Token " + auth.token,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          Router.push("/login");
          dispatch(
            showSnackbarThunk("Please login before accessing this page")
          );
        } else return res.json();
      })
      .then((res) => {
        dispatch(hideGlobalLoader());
        setPage(res.page);
        setTransactions(res.trxns);
      })
      .catch((error) => {
        dispatch(hideGlobalLoader());
        console.error(error);
      });
  };

  const getTransactionsFromState = (_?: any, page_no?: number) => {
    // Construct the search filters
    const search_filters: TransactionHistorySearchParams = {
      labels: labels.toString(),
      wallets: wallets.toString(),
      page: (page_no || page.current).toString(),
    };
    if (
      searchRef.current?.value !== undefined &&
      searchRef.current?.value !== ""
    ) {
      search_filters.search = searchRef.current?.value;
    }
    getTransactions(search_filters);
  };

  useEffect(() => {
    if (!auth.token) {
      Router.push("/login");
      dispatch(showSnackbarThunk("Please login before accessing this page"));
      return;
    }
    // On initial load we also need to extract data from the URL, if any.
    const params = new URLSearchParams(window.location.search);
    var search_filters: TransactionHistorySearchParams = {};
    if (params.get("search") && searchRef.current) {
      searchRef.current.value = params.get("search") || "";
      search_filters.search = params.get("search") || "";
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
        search_filters.labels = params.get("labels") || "";
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
        search_filters.wallets = params.get("wallets") || "";
      } catch (e) {
        console.error(e);
      }
    }

    getTransactions(search_filters);
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
                {userLabels.length === 0 ? (
                  <div className="no-data">
                    <span>Seems like you don&apos;t have any labels yet.</span>
                    <Button
                      startIcon={faAdd}
                      small
                      secondary
                      onClick={() => Router.push("/labels")}
                    >
                      Create one
                    </Button>
                  </div>
                ) : (
                  userLabels.map((elem) => (
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
                  ))
                )}
              </div>
              <h4>Filter by wallet</h4>
              <div className="horizontalScroll">
                {userWallets.length === 0 ? (
                  <div className="no-data">
                    <span>Seems like you don&apos;t have any wallets yet.</span>
                    <Button
                      startIcon={faAdd}
                      small
                      secondary
                      onClick={() => Router.push("/wallets")}
                    >
                      Create one
                    </Button>
                  </div>
                ) : (
                  userWallets.map((elem) => (
                    <Label
                      key={elem.id}
                      onClick={() => {
                        toggleWallet(elem.id);
                      }}
                      selected={wallets.indexOf(elem.id) > -1}
                    >
                      {elem.name}
                    </Label>
                  ))
                )}
              </div>
              <div className="applyFilters">
                <Button onClick={getTransactionsFromState}>search</Button>
              </div>
            </div>
            <div className="trxns cardGrid">
              {transactions.length !== 0 ? (
                <>
                  {transactions.map((elem) => (
                    <TransactionCard
                      data={elem}
                      key={elem.id}
                      fullWidth
                      mx={0}
                    />
                  ))}
                </>
              ) : (
                <i>No transactions found</i>
              )}
              <Paginator
                setActive={(pg) => getTransactionsFromState(null, pg)}
                lastPage={page.total}
                active={page.current}
              />
            </div>
          </div>
        </main>
        <div style={{ width: "100vw", height: "72px" }} />
        <Navbar />

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
              flex-direction: column;
              margin-left: 12px;
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
              width: max-content;
              max-width: 400px;
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
            .no-data {
              width: 100%;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              color: rgba(228, 228, 228, 0.8);
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
                max-width: 650px;
                width: 650px;
                margin: 8px;
              }
              .cardGrid {
                margin-left: 0px;
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
