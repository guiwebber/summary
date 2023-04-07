import React from "react";
import "./summary.css";
import reaction from "../assets/icon-reaction.svg";
import memory from "../assets/icon-memory.svg";
import verbal from "../assets/icon-verbal.svg";
import visual from "../assets/icon-visual.svg";
function Summary() {
  return (
    <div className="container">
      <div className="main">
        <div className="left">
          <p className="text white top">Your result</p>
          <div className="result">
            <h1 className="white">76</h1>
            <p>of 100</p>
          </div>
          <h3 className="text h3 white">Great</h3>
          <p className="text white bottom">
            You scored higher than 65% of the people who have takes these tests.
          </p>
        </div>
        <div className="right">
          <h2>Summary</h2>
          <section className="sec1">
            <div className="test">
              <img src={reaction} alt="" />
              <p>Reaction</p>
            </div>
            <p className="numbers">
              {" "}
              <b>80 </b> /100
            </p>
          </section>
          <section className="sec2">
            <div className="test">
              <img src={memory} alt="" />
              <p>Memory</p>
            </div>
            <p className="numbers">
              {" "}
              <b>92 </b> /100
            </p>
          </section>
          <section className="sec3">
            <div className="test">
              <img src={verbal} alt="" />
              <p>Verbal</p>
            </div>
            <p className="numbers">
              <b>61</b> /100
            </p>
          </section>
          <section className="sec4">
            <div className="test">
              <img src={visual} alt="" />
              <p>Visual</p>
            </div>
            <p className="numbers">
              {" "}
              <b> 72</b> /100
            </p>
          </section>

          <button className="button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
