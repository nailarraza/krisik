import Head from 'next/head';
import Link from "next/link";

export default function Custom500() {
    return (
        <>
            <style jsx>
                {`
                main {
                    color: rgb(0, 0, 0);
                    background: rgb(255, 255, 255);
                    font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
                    height: 100vh;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                h1 {
                    display: inline-block; 
                    border-right: 1px solid rgba(0, 0, 0, 0.3); 
                    margin: 6px 20px 0px 0px; 
                    padding: 10px 23px 10px 0px; 
                    font-size: 24px; 
                    font-weight: 500; 
                    vertical-align: top;
                }
                h2 {
                    font-size: 15px; 
                    font-weight: normal; 
                    line-height: 2em; 
                    margin: 0px; 
                    padding: 0px;
                }
                .flex {
                    display: inline-block; 
                    text-align: left; 
                    line-height: 49px; 
                    height: 49px; 
                    vertical-align: middle;
                }
            `}
            </style>

            <Head>
                <title>Server Error</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div>
                    <h1>500</h1>
                    <div className="flex">
                        <h2>Server-side error occurred
                            <br />
                            <Link href="/">
                                <a className="text-decoration-none">
                                    Go back home
                                </a>
                            </Link>
                        </h2>
                    </div>
                </div>
            </main>
        </>
    );
};