import type { NextPage } from "next";
import colors from "../utils/colors";
import Head from "next/head";
import Button from "../components/Button";
import Card from "../components/Card";
import CircularProgress from "../components/Progress/CircularProgress";
import Input from "../components/Input";
import Loader from "../components/Loader";
import ProgressBar from "../components/Progress/ProgressBar";
import Label from "../components/Label";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gastos</title>
        <meta
          name="description"
          content="A future ready application to track all your expenses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="navbar">
          <Button secondary small>
            Home
          </Button>
          <Button secondary small>
            About Us
          </Button>
          <Button secondary small>
            Contact
          </Button>
          <Button secondary small>
            Login
          </Button>
          <Button small>Sign Up</Button>
        </nav>
        <div className="fullscreen hero section">
          <div className="content-div hero-content">
            <h1 className="hero-title">
              Take care of all your
              <br />
              <span className="highlight">finance headaches</span>
            </h1>
            <p className="hero-desc">
              Built to help you keep track of all your finances easily, Gastos
              can help you spend confidently without worrying about emptying
              your bank!
            </p>

            <Button endIcon={faArrowRight}>Start Now</Button>
          </div>
        </div>
        <div className="fullscreen section">
          <div className="content-div wallets">
            <h1 className="section-title">
              Multi channel tracking with
              <br />
              <span className="highlight">custom wallets</span>
            </h1>
            <p className="section-desc">
              Wallets are like your bank accounts. Each wallet has a seperate
              balance and a seperate transaction history. Wallets are designed
              to keep track of incomes and expenses from multiple channels, like
              cash, credit card, seperate bank accounts and just about what not!
            </p>

            <Button endIcon={faArrowRight}>Start Now</Button>
          </div>
        </div>
        <div className="fullscreen section">
          <div className="content-div labels">
            <h1 className="section-title">
              Dive into the details with <br />
              <span className="highlight">custom color-coded labels</span>
            </h1>
            <p className="section-desc">
              Labels allow you take care of the details. By adding multiple
              labels to any transaction you can keep a track of where you spent
              your money very easily.
            </p>

            <Button endIcon={faArrowRight}>Start Now</Button>
          </div>
        </div>
        <div className="fullscreen section">
          <div className="content-div insights">
            <h1 className="section-title">
              <span className="highlight">Insights</span> that speak
            </h1>
            <p className="section-desc">
              Helpful metrics allow you to make conclusions that make a change.
              All labels and wallets have a seperate tracking page helping you
              to go into the smallest of the details. Advanced search allows you
              to fine tune your search.
            </p>

            <Button endIcon={faArrowRight}>Start Now</Button>
          </div>
        </div>
        <div className="footer">
          <div>
            <h1>Gastos</h1>
            <span className="footer-credits">Developed by Jalaj Kumar</span>
          </div>
          <div className="footer-section">
            <span className="footer-section-title">Github</span>
            <ul className="footer-list">
              <li>Source Code</li>
              <li>Report a bug</li>
              <li>Suggest a feature</li>
            </ul>
          </div>
          <div className="footer-section">
            <span className="footer-section-title">Links</span>
            <ul className="footer-list">
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .fullscreen {
            width: 100vw;
            height: 100vh;
          }
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: right;
            gap: 8px;
            z-index: 10000;
            backdrop-filter: blur(8px);
          }
          .section {
            position: relative;
          }
          .content-div {
            display: flex;
            position: absolute;
            flex-direction: column;
          }
          .hero-content {
            max-width: 80%;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%) translateY(-10%);
            text-align: center;
            justify-content: center;
            align-items: center;
          }
          .hero-title {
            width: 100%;
            font-size: 4.5vw;
            margin-bottom: 0;
          }
          .section-title {
            width: 100%;
            font-size: 3vw;
            margin-bottom: 0;
          }
          .highlight {
            position: relative;
          }
          .highlight::before {
            content: "";
            display: block;
            position: absolute;
            bottom: 20%;
            left: 0;
            width: 100%;
            height: 20%;
            background: ${colors.primary};
            opacity: 0.7;
          }
          .hero-desc {
            max-width: 70%;
            color: #ccc;
            font-size: larger;
          }
          .content-div.wallets {
            top: 10%;
            right: 10%;
            transform: translateX(10%) translateY(-10%);
            align-items: end;
          }
          .wallets .section-title {
            text-align: right;
            max-width: 60%;
          }
          .section-desc {
            max-width: 40%;
            color: #ccc;
          }
          .wallets .section-desc {
            text-align: right;
          }

          .content-div.labels {
            bottom: 10%;
            left: 10%;
            transform: translateX(-10%) translateY(10%);
            align-items: start;
          }
          .labels .section-title {
            text-align: left;
            max-width: 60%;
          }
          .labels .section-desc {
            text-align: left;
          }

          .content-div.insights {
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            align-items: center;
          }
          .insights .section-title {
            text-align: center;
            max-width: 80%;
          }
          .insights .section-desc {
            text-align: center;
          }
          .footer {
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            margin: 0;
            padding: 24px;
            display: flex;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default Home;
