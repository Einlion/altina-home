import { PureComponent } from "react";
import Head from "next/head";
import Link from "next/link";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Renne</title>
        </Head>
        <div className="bg-body sm:items-start items-center flex flex-col w-screen h-[80vh]">
          <div className="font-medium text-xl mx-4 mt-16 sm:ml-24 text-white px-8 py-4 border-2 border-dashed border-pred">
            Hello, I{"'"}m Renne, you can hit me up at{" "}
            <div className="text-pred inline-block">Discord: Renne#2262</div> or
            mail me at{" "}
            <a href="mailto:hey@renne.moe" className="text-pred">
              hey@renne.moe
            </a>
          </div>
          <Link href="/anime">
            <a className="sm:ml-24 hover:sm:ml-[6.75rem] hover:ml-2 transition-all ease-linear mt-8 flex font-medium select-none text-xl text-pred">
              Anime
            </a>
          </Link>
          <Link href="/ln">
            <a className="sm:ml-24 hover:sm:ml-[6.75rem] hover:ml-2 transition-all ease-linear mt-2 flex font-medium select-none text-xl text-pred">
              Light Novels
            </a>
          </Link>
          <Link href="/vn">
            <a className="sm:ml-24 hover:sm:ml-[6.75rem] hover:ml-2 transition-all ease-linear mt-2 flex font-medium select-none text-xl text-pred">
              Visual Novels
            </a>
          </Link>
          <Link href="/dev">
            <a className="sm:ml-24 hover:sm:ml-[6.75rem] hover:ml-2 transition-all ease-linear mt-2 flex font-medium select-none text-xl text-pred">
              Boring Dev Stuff
            </a>
          </Link>
        </div>
      </>
    );
  }
}
