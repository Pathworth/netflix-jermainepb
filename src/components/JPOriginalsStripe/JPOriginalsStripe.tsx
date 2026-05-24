import React from "react";
import jpIcon from "../../images/01 - Icon JP - Initials - Blue Trans - PNG.png";
import "./JPOriginalsStripe.css";

/**
 * JP Originals branding stripe.
 *
 * Top-left badge that signals "this is a Jermaine Peguese Original."
 * Drops onto the BillboardHero and onto any Originals card.
 */
const JPOriginalsStripe: React.FC = () => {
  return (
    <div className="jp-originals-stripe" aria-label="JP Original">
      <img src={jpIcon} alt="JP Original" className="jp-originals-stripe__mark" />
    </div>
  );
};

export default JPOriginalsStripe;
