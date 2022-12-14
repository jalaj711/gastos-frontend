import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import Card from "../components/Card";
import CircularProgress from "../components/Progress/CircularProgress";
import Input from "../components/Input";
import Loader from "../components/Loader";
import ProgressBar from "../components/Progress/ProgressBar";
import Label from "../components/Label";
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
        <Loader />
        <Card>Some great content for this card in the making.</Card>

        <Label>food</Label>
        <Label selected>electronics</Label>
        <Label>food</Label>
        <Label color="#e65252">stationary</Label>
        <Label color="#607cea" selected>food</Label>
        <Label color="#607cea">food</Label>

        <Button>normal</Button>
        <Button outlined>outlined</Button>
        <Button startIcon={faXmark}>
          starticon
        </Button>
        <Button endIcon={faCoffee}>
          endicon
        </Button>
        <Button small>small</Button>
        <Button small fullRadius>small fullradius</Button>
        <Button secondary>secondary</Button>
        <Button secondary small>secondary small</Button>
        <Button secondary outlined>secondary outlined</Button>
        <Button secondary outlined small>secondary outlined small</Button>
        <Button secondary fullRadius>secondary fullRadius</Button>


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
