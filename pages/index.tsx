import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import Card from "../components/Card";
import CircularProgress from "../components/CircularProgress";
import Input from "../components/Input";
import Loader from "../components/Loader";
import ProgressBar from "../components/ProgressBar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel, faCoffee, faCross, faCrosshairs, faXmark } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Input type="text" placeholder="testing" />
        <div style={{ display: "flex" }}>
          <ProgressBar value={60} sub="Mon" showValue />
          <ProgressBar value={1} sub="Tue" showValue />
          <ProgressBar value={57} sub="Wed" showValue />
          <ProgressBar value={69} sub="Thu" showValue />
          <ProgressBar value={41} sub="Fri" horizontal showValue />
          <ProgressBar value={87} sub="Sat" horizontal showValue />
          <ProgressBar value={99} sub="Sun" horizontal showValue />
        </div>
        <Loader static />
        <Card>Some great content for this card in the making.</Card>
        <Button outlined>test</Button>
        <Button outlined fullRadius icon={faXmark}>
          Cancel
        </Button>
        <Button fullRadius icon={faCoffee}>
          test
        </Button>
        <Button>test</Button>
        <CircularProgress value={60} showValue id="circularprogress" />
        <CircularProgress
          value={60}
          showValue
          gaugeMarkSeperation={60}
          gaugeMarks
          id="circularprogress2"
        />
        <CircularProgress
          value={60}
          centralNeedle
          gaugeMarkSeperation={60}
          range={135}
          offSet={-153.5}
          gaugeMarks
          id="circularprogress3"
        />
      </main>
    </>
  );
};

export default Home;
