import { useRef } from "react";
import Head from "next/head";
// import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAppDispatch } from "../utils/reduxHooks";
import { loginWithUsernameAndPassword } from "../utils/authThunk";

function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const handleLoginWithUsernamePassword = () => {
    if (usernameRef.current && passwordRef.current) {
      dispatch(
        loginWithUsernameAndPassword(
          usernameRef.current.value,
          passwordRef.current.value
        )
      );
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mainWrapper">
          <h1>Login</h1>
        </div>
        <div className="section">
          <form
            className="formElement"
            onSubmit={(evt) => evt.preventDefault()}
          >
            <Input type="text" placeholder="Username" ref={usernameRef} />
            <Input type="password" placeholder="Password" ref={passwordRef} />
            <Button onClick={handleLoginWithUsernamePassword}>Log in</Button>
            <Link href="#" className="form-link">
              Forgot Password?
            </Link>
            <Link href="/signin" className="form-link">
              New User? Create an account
            </Link>
          </form>
          {/* <div className="divider">
            <hr />
            or
            <hr />
          </div>
          <div className="social-logins">
            <span>Continue with</span>
            <div>
              <Button secondary outlined>
                google
              </Button>
              <Button secondary outlined>
                facebook
              </Button>
            </div>
          </div> */}
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
          .section {
            margin-top: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .formElement {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .formElement > :global(input),
          .formElement > :global(button) {
            margin: 12px 0;
            min-width: 250px;
          }
          .formElement > :global(a) {
            opacity: 0.7;
            text-decoration: underline;
            font-size: small;
            text-align: left;
            align-self: flex-start;
            margin-top: 8px;
          }
          .divider {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 16px 0;
            opacity: 0.6;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 12px;
          }
          .divider hr {
            width: 60px;
            margin: 0 12px;
          }
          .social-logins {
            text-align: center;
            font-weight: 900;
            font-size: 16px;
          }
          .social-logins :global(button) {
            margin: 12px 0;
            min-width: 250px;
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
          }
        `}
      </style>
    </>
  );
}

export default Login;
