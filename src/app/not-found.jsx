import React from "react";
import "./notFound.css";

function notFound() {
  return (
    <div className="container container-star">
      {[...Array(30)].map((_, i) => (
        <div key={`star1-${i}`} className="star-1"></div>
      ))}
      {[...Array(30)].map((_, i) => (
        <div key={`star2-${i}`} className="star-2"></div>
      ))}
      <div className="container container-bird">
        {[...Array(6)].map((_, i) => (
          <div key={`bird-${i}`} className="bird bird-anim">
            <div className="bird-container">
              <div className="wing wing-left">
                <div className="wing-left-top"></div>
              </div>
              <div className="wing wing-right">
                <div className="wing-right-top"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container-title">
        <div className="title">
          <span className="number">4</span>
          <div className="moon">
            <div className="face">
              <div className="mouth"></div>
              <div className="eyes">
                <div className="eye-left"></div>
                <div className="eye-right"></div>
              </div>
            </div>
          </div>
          <span className="number">4</span>
        </div>
        <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
      </div>
    </div>
  );
}

export default notFound;
