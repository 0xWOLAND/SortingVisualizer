import React, { Component } from "react";
import "./Grid.css";
import Bar from "./Bar";

class Hello extends React.Component {
        render() {
                return (
                        <div
                                ref={(ref) =>
                                        ref.appendChild(
                                                this.props.vanillaChildren
                                        )
                                }
                        ></div>
                );
        }
}

export default class Grid extends Component {
        shuffle(array) {
                array.sort(() => Math.random() - 0.5);
        }
        randomize() {
                let arr = [
                        "8px",
                        "16px",
                        "24px",
                        "32px",
                        "40px",
                        "48px",
                        "56px",
                        "64px",
                        "72px",
                        "80px",
                        "88px",
                        "96px",
                        "104px",
                        "112px",
                        "120px",
                        "128px",
                        "136px",
                        "144px",
                        "152px",
                        "160px",
                        "168px",
                        "176px",
                        "184px",
                        "192px",
                        "200px",
                        "208px",
                        "216px",
                        "224px",
                        "232px",
                        "240px",
                        "248px",
                        "256px",
                        "264px",
                        "272px",
                        "280px",
                        "288px",
                        "296px",
                        "304px",
                        "312px",
                        "320px",
                        "328px",
                        "336px",
                        "344px",
                        "352px",
                        "360px",
                        "368px",
                        "376px",
                        "384px",
                        "392px",
                        "400px",
                        "408px",
                        "416px",
                        "424px",
                        "432px",
                        "440px",
                        "448px",
                        "456px",
                        "464px",
                        "472px",
                        "480px",
                        "488px",
                        "496px",
                        "504px",
                        "512px",
                        "520px",
                        "528px",
                        "536px",
                        "544px",
                        "552px",
                        "560px",
                        "568px",
                        "576px",
                        "584px",
                        "592px",
                        "600px",
                        "608px",
                        "616px",
                        "624px",
                        "632px",
                        "640px",
                        "648px",
                        "656px",
                        "664px",
                        "672px",
                        "680px",
                        "688px",
                        "696px",
                        "704px",
                        "712px",
                        "720px",
                        "728px",
                        "736px",
                        "744px",
                        "752px",
                        "760px",
                        "768px",
                        "776px",
                        "784px",
                        "792px",
                        "800px",
                        "808px",
                        "816px",
                        "824px",
                        "832px",
                        "840px",
                        "848px",
                        "856px",
                        "864px",
                        "872px",
                        "880px",
                        "888px",
                        "896px",
                        "904px",
                        "912px",
                        "920px",
                        "928px",
                        "936px",
                        "944px",
                        "952px",
                        "960px",
                        "968px",
                        "976px",
                        "984px",
                        "992px",
                        "1000px",
                        "1008px",
                        "1016px",
                        "1024px",
                ];
                this.shuffle(arr);
                let ele = document.createElement("div");
                ele.id = "body";
                for (var i = 0; i < arr.length; i++) {
                        let bar = document.createElement("div");
                        bar.className = "bar";
                        bar.id = "" + i;
                        bar.style.height = arr[i];
                        ele.appendChild(bar);
                }

                return ele;
        }
        render() {
                let ele = this.randomize();

                return <Hello vanillaChildren={ele}></Hello>;
        }
}
