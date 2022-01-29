import { PureComponent } from "react";
import Link from "next/link"

export default class Home extends PureComponent{
  render() {
  return (
    <div className="bg-body flex items-center justify-center w-screen h-[80vh]">
      <div className="flex select-none text-gray-200 text-3xl">I'm a loli, <div className="ml-2 text-pred">yes.</div></div>
    </div>
  )
  }
}