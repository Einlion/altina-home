import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Development</title>
        </Head>
        <div className="bg-body flex flex-col w-screen h-[80vh]">
          <div className="text-xl sm:mx-16 mx-4 font-medium sm:mt-16 mt-8 text-white px-8 py-8 border-pred">
            <div className="text-3xl mb-4"></div>
            <div className="text-pred">Nothing yet.</div>
          </div>
        </div>
      </>
    );
  }
}
