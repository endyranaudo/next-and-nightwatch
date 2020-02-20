import Head from 'next/head';
import Link from 'next/link'

const Home = () => (
  <div className="container">
    <Head>
      <title>Next and Nightwatch</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title" id="logo">GREETING APP</h1>

      <p className="description">end-to-end testing in Next.js</p>
      <Link href="/form">
      <button className="primary-btn">Next</button>
      </Link>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .primary-btn {
        padding: 10px 20px;
        font-size: 1rem;
        color: white;
        background-color: teal;
        border-radius: 10px;
      }
      
      .primary-btn:hover {
        box-shadow: inset 0 0 0 20rem lightSeaGreen;
      }
      
      .primary-btn:active {
        box-shadow: inset 0 0 0 20rem var(--darken-2),
          inset 0 3px 4px 0 var(--darken-3),
          0 0 1px var(--darken-2);
      }
      
      .primary-btn:disabled,
      .primary-btn.is-disabled {
        opacity: .5;
      }
      

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
