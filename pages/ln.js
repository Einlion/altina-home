import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Light Novels</title>
        </Head>
        <div className="bg-body flex flex-col w-screen h-[80vh]">
          <div className="text-xl sm:mx-16 mx-4 font-medium sm:mt-16 mt-8 text-white px-8 py-8 border-pred">
            <div className="text-3xl mb-4">Light Novels</div>
            <div>
              <a
                href="https://anilist.co/manga/85134/Utsuro-no-Hako-to-Zero-no-Maria/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                The Empty Box and Zeroth Maria
              </a>
              <a
                href="https://anilist.co/manga/85470/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Mushoku Tensei
              </a>
              <a
                href="https://anilist.co/manga/55409/High-School-DxD/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                High School DxD
              </a>
              <a
                href="https://anilist.co/manga/66723/Hataraku-Maousama/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Hataraku Maou-sama
              </a>
              <a
                href="https://anilist.co/manga/86406/Kumo-desu-ga-Nani-ka/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Kumo-desu ga Nani ka?
              </a>
              <a
                href="https://anilist.co/manga/78399/No-Game-No-Life/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                No Game No Life
              </a>
              <a
                href="https://anilist.co/manga/85162/Dungeon-ni-Deai-wo-Motomeru-no-wa-Machigatteiru-Darou-ka/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Is It Wrong to Try to Pick Up Girls in a Dungeon?
              </a>
              <a
                href="https://anilist.co/manga/39115/Ookami-to-Koushinryou/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Spice and Wolf
              </a>
              <a
                href="https://anilist.co/manga/85737/ReZero-kara-Hajimeru-Isekai-Seikatsu/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Re:Zero
              </a>
              <a
                href="https://anilist.co/manga/85465/Rakudai-Kishi-no-Cavalry/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Chivalry of the Failed Knight
              </a>
              <a
                href="https://anilist.co/manga/42295/Baka-to-Test-to-Shoukanjuu/"
                className="block text-pred hover:ml-3 transition-all ease-linear my-2 sm:text-xl text-lg"
              >
                Baka to Test to Shoukanjuu
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
