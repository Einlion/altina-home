import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Renne</title>
        </Head>
        <div className="bg-body select-none flex items-center justify-center w-screen h-[80vh] text-white">
          <div className="w-[90%] md:w-[36rem] bg-body-light flex flex-col items-center px-[1.30rem] pb-4">
            <div className=" w-32 h-32 translate-y-[-50%] rounded-[100px] bg-cutie bg-cover" onContextMenu={(e) => e.preventDefault()} />
            <div className="text-2xl font-semibold -translate-y-[3.5rem]">Renne#2622</div>
            <div className="text-sm -translate-y-10 bg-[#f3b8b4] text-body rounded-sm px-[7px] py-[1px] font-semibold">
              Perhaps living without sin is a sin in itself. <br></br>
            </div>
            <div className="text-md self-start -translate-y-6 inline-block">
              Software Engineer. I am fond of mystery and slice-of-life novels and could go on about telling you how much I love Rika for hours.
              You can hit me up in my DMs or ping me in <a href="https://discord.gg/kaguya" className="text-[#f3b8b4]">Kaguya Discord Server</a> <div className="inline-block line-through">but please {"don't"} fall for me.</div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
