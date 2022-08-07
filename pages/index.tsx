import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";
import CircularProgress from "../components/CircularProgress";
import Input from "../components/Input";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>test</Button>
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
        <Loader static/>
        <Card title="Card">
            Some great content for this card in the making.
        </Card>
        <CircularProgress value={60} showValue id="circularprogress" />
        <CircularProgress value={60} showValue gaugeMarkSeperation={60} gaugeMarks id="circularprogress2"/>
        <CircularProgress value={60} centralNeedle gaugeMarkSeperation={60} range={180} id="circularprogress3"/>
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
