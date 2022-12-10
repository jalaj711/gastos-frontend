import Head from "next/head";
import ProgressBar from "../components/Progress/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import WalletCard from "../components/WalletCard";
import TransactionCard from "../components/TransactionCard";
import Button from "../components/Button";
import LabelCard from "../components/LabelCard";
import { LineChart, XAxis, YAxis, Line, Tooltip } from "recharts";
import colors from "../utils/colors";
import Router from "next/router";

const dummyData = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 2210,
  },
  {
    name: "Mar",
    amt: 2290,
  },
  {
    name: "Apr",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",
    amt: 2500,
  },
  {
    name: "Jul",
    amt: 2100,
  },
];

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mainWrapper">
          <h1>Dashboard</h1>
          <div className="primaryContainer">
            <div className="cardContainer">
              <div className="progressWrapper">
                <ProgressBar sub="Mon" value={91} />
                <ProgressBar sub="Tue" value={87} />
                <ProgressBar sub="Wed" value={75} />
                <ProgressBar sub="Thu" value={80} />
                <ProgressBar sub="Fri" value={30} />
                <ProgressBar sub="Sat" value={0} />
                <ProgressBar sub="Sun" value={0} />
              </div>
            </div>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} strokeWidth={1} />
              <input placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Recent Transactions</h2>
          <div className="horizontalGrid">
            <div className="horizontalGridWrapper">
              <TransactionCard
                title="Activity 1"
                description="Some description for activity 1"
                value={-70}
              />
              <TransactionCard
                title="Activity 2"
                description="Some description for activity 2"
                value={-7}
              />
              <TransactionCard
                title="Activity 3"
                description="Some description for activity 3"
                value={50}
              />
              <TransactionCard
                title="Activity 4"
                description="Some description for activity 4"
                value={23}
              />
              <TransactionCard
                title="Activity 5"
                description="Some description for activity 5"
                value={-45}
              />
              <TransactionCard
                title="Activity 5"
                description="Some description for activity 5"
                value={-7.99}
              />
              <TransactionCard
                title="Activity 6"
                description="Some description for activity 6"
                value={89}
              />
            </div>
          </div>
          <div style={{ float: "right" }}>
            <Button
              secondary
              small
              endIcon={faAngleRight}
              onClick={() => Router.push("/transactions")}
            >
              View all
            </Button>
          </div>
        </div>
        <div className="section">
          <h2>Statistics</h2>
          <div className="cardGrid stats">
            <div>
              <h3>Transactions this week</h3>
              <LineChart
                width={300}
                height={200}
                data={dummyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ borderRadius: "8px" }}
                  contentStyle={{
                    background: "#000",
                    borderRadius: "16px",
                    border: "none",
                  }}
                />
                <Line type="monotone" dataKey="amt" stroke={colors.primary} />
              </LineChart>
            </div>
            <div>
              <h3>Spent this week</h3>
              <LineChart
                width={300}
                height={200}
                data={dummyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ borderRadius: "8px" }}
                  contentStyle={{
                    background: "#000",
                    borderRadius: "16px",
                    border: "none",
                  }}
                />
                <Line type="monotone" dataKey="amt" stroke={colors.primary} />
              </LineChart>
            </div>

            <div>
              <h3>Transactions this month</h3>
              <LineChart
                width={300}
                height={200}
                data={dummyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ borderRadius: "8px" }}
                  contentStyle={{
                    background: "#000",
                    borderRadius: "16px",
                    border: "none",
                  }}
                />
                <Line type="monotone" dataKey="amt" stroke={colors.primary} />
              </LineChart>
            </div>
            <div>
              <h3>Spent this month</h3>
              <LineChart
                width={300}
                height={200}
                data={dummyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  wrapperStyle={{ borderRadius: "8px" }}
                  contentStyle={{
                    background: "#000",
                    borderRadius: "16px",
                    border: "none",
                  }}
                />
                <Line type="monotone" dataKey="amt" stroke={colors.primary} />
              </LineChart>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Your Wallets</h2>
          <div className="cardGrid">
            <WalletCard
              title="Wallet 1"
              description="Some description for Wallet 1"
              value={70}
              onClick={() => Router.push("/wallets/1")}
            />
            <WalletCard
              title="Wallet 2"
              description="Some description for Wallet 2"
              value={7}
              onClick={() => Router.push("/wallets/2")}
            />
            <WalletCard
              title="Wallet 3"
              description="Some description for Wallet 3"
              value={50}
              onClick={() => Router.push("/wallets/3")}
            />
          </div>
        </div>
        <div className="section">
          <h2>Your Labels</h2>
          <div className="horizontalGrid">
            <div className="horizontalGridWrapper">
              <LabelCard
                title="Label 1"
                description="Some description for Label 1"
                value={70}
                onClick={() => Router.push("/labels/1")}
              />
              <LabelCard
                title="Label 2"
                description="Some description for Label 2"
                value={7}
                onClick={() => Router.push("/labels/2")}
              />
              <LabelCard
                title="Label 3"
                description="Some description for Label 3"
                value={50}
                onClick={() => Router.push("/labels/3")}
              />
              <LabelCard
                title="Label 4"
                description="Some description for Label 4"
                value={23}
                onClick={() => Router.push("/labels/4")}
              />
              <LabelCard
                title="Label 5"
                description="Some description for Label 5"
                value={45}
                onClick={() => Router.push("/labels/5")}
              />
              <LabelCard
                title="Label 6"
                description="Some description for Label 6"
                value={89}
                onClick={() => Router.push("/labels/6")}
              />
            </div>
          </div>
          <div style={{ float: "right" }}>
            <Button secondary small endIcon={faAngleRight} onClick={() => Router.push("/labels")}>
              View all
            </Button>
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

          .mainWrapper {
            width: 100%;
            align-items: center;
          }

          .mainWrapper h1,
          .mainWrapper .primaryContainer {
            flex-basis: 50%;
            justify-content: center;
            align-self: center;
          }

          .primaryContainer {
            max-width: 500px;
            display: flex;
            flex-direction: column;
          }
          .cardContainer {
            padding: 16px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.05);
          }

          .progressWrapper {
            justify-content: space-between;
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

          .mainWrapper,
          .progressWrapper {
            display: flex;
          }

          .cardGrid {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-evenly;
          }
          .stats h3 {
            text-align: center;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 900;
          }
          .horizontalGrid {
            max-width: 100vw;
            overflow-x: auto;
          }
          .horizontalGridWrapper {
            width: max-content;
            display: flex;
          }
          h2 {
            margin-left: 12px;
          }
          .section {
          }

          @media (max-width: 850px) {
            .mainWrapper {
              flex-direction: column;
            }
          }

          @media (max-width: 500px) {
            .mainWrapper {
              margin-top: 32px;
            }
            .progressWrapper > :global(.progressContainer) {
              margin: 6px;
            }

            :global(.progressBar) {
              width: 30px !important;
              border-radius: 8px !important;
            }
            :global(.progressElement) {
              width: 24px !important;
              border-radius: 6px !important;
            }
            .cardContainer {
              padding: 8px;
              border-radius: 8px;
            }
            h1 {
              font-size: 3rem;
            }
          }
        `}
      </style>
      {/* display: grid;
            grid-template-columns: 28vw 28vw 28vw;
            padding: 0 24px;
            margin-top: 24px; */}
    </>
  );
}

export default Dashboard;