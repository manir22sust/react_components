import React from "react";
import { Cart } from "../icons/Cart";
import { Heart } from "../icons/Heart";

export const Card = (props) => {
  return (
    <>
      {props.cartdata.map((item, index) => {
        return (
          <div key={index}>
            <div className="card">
              <div className="wrapper">
                <div className={`color_bg ${item.alt}`}></div>
                <div
                  className="card_img"
                  style={{ backgroundImage: `url(${item.images})` }}
                ></div>
                <Heart />
                <div className="cardInfo">
                  <h1>{item.title}</h1>
                  <p className="date_">{item.exp_date}</p>
                  <div className="action">
                    <div className="priceGroup">
                      <p className="price old_price">
                        {item.dollar} {item.old_price}
                      </p>
                      <p className="price newPrice">
                        {item.dollar} {item.newPrice}
                      </p>
                    </div>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
