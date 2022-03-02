import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Visual Novels</title>
        </Head>
        <div className="bg-body flex flex-col w-screen h-[80vh]">
          <div className="text-xl sm:mx-16 mx-4 font-medium sm:mt-16 mt-8 text-white px-8 py-8 border-pred">
            <div className="text-3xl mb-4">Visual Novels</div>
            <div>
              <a
                href="https://vndb.org/v67"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Higurashi
              </a>
              <a
                href="https://vndb.org/v24"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Umineko
              </a>
              <a
                href="https://vndb.org/v12402"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Fata Morgana
              </a>
              <a
                href="https://vndb.org/v5154"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Grisaia
              </a>
              <a
                href="https://vndb.org/v7014"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Danganronpa
              </a>
              <a
                href="https://vndb.org/v17909"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Tsukihime
              </a>
              <a
                href="https://store.steampowered.com/app/251150/The_Legend_of_Heroes_Trails_in_the_Sky/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Trails in the Sky <div className="text-white inline-block">(What?)</div>
              </a>
              <a
                href="https://vndb.org/v751"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Rewrite
              </a>
              <a
                href="https://vndb.org/v4"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Clannad
              </a>
              <a
                href="https://vndb.org/v18872"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                VA-11 HALL-A
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
