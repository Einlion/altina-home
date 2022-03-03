import { PureComponent, createRef } from "react";
import Head from "next/head";
import Placeholder from "./../static/placeholder.svg";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      prev: NaN,
      isImageLoaded: false,
    };
    this.imageContainer = createRef();
  }

  async componentDidMount() {
    let resp = await fetch(
      "https://api.github.com/gists/2b2e1f0da21b5387e6811d6b141e48bb"
    );
    let json = await resp.json();
    let images = json["files"]["wifey.txt"]["content"].split("\n");
    this.setState({
      images: images,
    });
    this.handleRoll();
    document.addEventListener("keydown", (e) => {
      if (e.key == "r") {
        this.handleRoll();
      }
    });
  }

  handleRoll = () => {
    this.setState({
      isImageLoaded: false,
    });
    let max = this.state.images.length - 1 + (!isNaN(this.state.prev) ? -1 : 0);
    let r = Math.floor(Math.random() * (max + 1));
    if (r >= this.state.prev) {
      r += 1;
    }
    if (this.imageContainer.current) {
      this.imageContainer.current.src = this.state.images[r];
    }
    this.setState({
      prev: r,
    });
  };

  handleOnImageLoad = () => {
    this.setState({ isImageLoaded: true });
  };

  render() {
    return (
      <>
        <Head>
          <title>Light Novels</title>
        </Head>
        <div className="bg-body text-white flex flex-col items-center justify-center w-screen h-[80vh]">
          <div className="mt-8 h-96 w-80 border-dashed border-white">
            <div
              style={{ display: this.state.isImageLoaded ? "none" : "flex" }}
              className="h-96 w-80 flex flex-col items-center justify-center border-2 border-[#ffffff20]"
            >
              <Placeholder fill="#fefefe95" width="70" height="70" />
              <div className="mt-2 text-[#ffffff90] text-sm font-medium">
                LOADING
              </div>
            </div>
            <img
              style={{ display: this.state.isImageLoaded ? "block" : "none" }}
              ref={this.imageContainer}
              className="object-cover h-96 w-80"
              src=""
              onLoad={this.handleOnImageLoad}
            ></img>
          </div>
          <div
            onClick={this.handleRoll}
            className="cursor-pointer select-none hover:bg-[#ffffff10] w-80 h-20 mt-8 flex items-center justify-center text-3xl font-medium border-2 border-dashed border-pred hover:border-pred-faded"
          >
            Roll
          </div>
          <div className="w-80 mt-3 flex justify-end text-sm font-medium">
            Pssst...Press R on keyboard.
          </div>
        </div>
      </>
    );
  }
}
