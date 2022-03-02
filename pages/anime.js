import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Renne</title>
        </Head>
        <div className="bg-body flex flex-col w-screen h-[80vh]">
          <div className="text-xl sm:mx-16 mx-4 font-medium sm:mt-16 mt-8 text-white px-8 py-8 border-pred">
            <div className="text-3xl mb-4">Anime</div>
            <div>
              <a
                href="https://anilist.co/anime/112641/Kaguyasama-wa-Kokurasetai-Tensaitachi-no-Renai-Zunousen/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Kaguya-sama: Love is War
              </a>
              <a
                href="https://anilist.co/anime/108465/Mushoku-Tensei-Isekai-Ittara-Honki-Dasu/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Mushoku Tensei
              </a>
              <a
                href="https://anilist.co/anime/11617/High-School-DxD/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                High School DxD
              </a>
              <a
                href="https://anilist.co/anime/9756/Mahou-Shoujo-MadokaMagica/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Mahou Shoujo Madoka☆Magica
              </a>
              <a
                href="https://anilist.co/anime/105334/Fruits-Basket-1st-Season/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Fruits Basket
              </a>
              <a
                href="https://anilist.co/anime/9253/SteinsGate/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Steins;Gate
              </a>
              <a
                href="https://anilist.co/anime/5081/Bakemonogatari"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Monogatari
              </a>
              <a
                href="https://anilist.co/anime/4181/CLANNAD-After-Story/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Clannad: After Story
              </a>
              <a
                href="https://anilist.co/anime/21355/ReZero-kara-Hajimeru-Isekai-Seikatsu/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Re:Zero
              </a>
              <a
                href="https://anilist.co/anime/20755/Ansatsu-Kyoushitsu/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Assasination Classroom
              </a>
              <a
                href="https://anilist.co/anime/113596/Josee-to-Tora-to-Sakanatachi/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Josee, the Tiger and the Fish
              </a>
              <a
                href="https://anilist.co/anime/6213/Toaru-Kagaku-no-Railgun/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Railgun
              </a>
              <a
                href="https://anilist.co/anime/20623/Kiseijuu-Sei-no-Kakuritsu/"
                className="block text-pred hover:ml-3 transition-all ease-linear cursor-default my-2 sm:text-xl text-lg"
              >
                Parasyte
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
