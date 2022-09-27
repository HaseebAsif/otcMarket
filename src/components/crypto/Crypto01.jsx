import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../../assets/images/coin/btc.png";
import img2 from "../../assets/images/coin/eth.png";
import img3 from "../../assets/images/coin/tet.png";
import img4 from "../../assets/images/coin/bnb.png";
import imgotc from "../../assets/images/coin/otc_small.png";

import "./styles.scss";
import axios from "axios";
import { Link } from "react-router-dom";

Crypto01.propTypes = {};

function Crypto01(props) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [ApiCall, setApiCall] = useState();
  const { dataCoin } = props;
  const [dataCrytoTab] = useState([
    {
      id: 1,
      title: "Crypto",
    },
    // {
    //   id: 2,
    //   title: "DeFi",
    // },
    // {
    //   id: 3,
    //   title: "BSC",
    // },
    // {
    //   id: 4,
    //   title: "NFT",
    // },
    // {
    //   id: 5,
    //   title: "Metaverse",
    // },
    // {
    //   id: 6,
    //   title: "Polkadot",
    // },
    // {
    //   id: 7,
    //   title: "Solana",
    // },
    // {
    //   id: 8,
    //   title: "Opensea",
    // },
    // {
    //   id: 9,
    //   title: "Makersplace",
    // },
  ]);
  const [dataCrytoContent] = useState([
    {
      id: 1,
      active: "active",
      icon: imgotc,
      name: "OTC",
      unit: "OTC/USD",
      price: "USD 0.072",
      pricesale: "36,641.20",
      sale: "0.01%",
      class: "success",
    },
    {
      id: 2,
      active: "",
      icon: img1,
      name: "Bitcoin",
      unit: "BTC/USD",
      price: "USD 46,168.95",
      pricesale: "36,641.20",
      sale: "-0.79%",
      class: "critical",
    },
    {
      id: 3,
      active: "",
      icon: img2,
      name: "Ethereum",
      unit: "ETH/USD",
      price: "USD $3,480.04",
      pricesale: "36,641.20",
      sale: "+10.55%",
      class: "success",
    },
    {
      id: 4,
      icon: img3,
      name: "Tether",
      unit: "USDT/USD",
      price: "USD 1.00",
      pricesale: "36,641.20",
      sale: "-0.01%",
      class: "critical",
    },
  ]);

  useEffect(() => {
    let api = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setApiCall(api);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="crypto" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="crypto__main">
              <Tabs>
                <TabList>
                  {dataCrytoTab.map((idx) => (
                    <Tab key={idx.id}>{idx.title}</Tab>
                  ))}
                </TabList>
                {/* outer space */}
                {coins.map((data) => (
                  <TabPanel key={data.id}>
                    <div className="content-inner">
                      {coins.slice(0, 4).map((idx) => (
                        <div key={idx.id} className={`crypto-box active`}>
                          <div className="top">
                            <Link to="#">
                              <img src={idx.image} alt="" width="25px" />
                              <span className="coin__name_">{idx.name}</span>
                              <span className="unit">USD</span>
                            </Link>
                          </div>
                          <h6 className="price">
                            ${idx.current_price.toLocaleString()}
                          </h6>
                          <div className="bottom">
                            <p>${idx.total_volume.toLocaleString()}</p>
                            {idx.market_cap_change_percentage_24h < 0 ? (
                              <div className="red" text-align="right;">
                                {idx.market_cap_change_percentage_24h.toFixed(
                                  2
                                )}
                                %
                              </div>
                            ) : (
                              <div className="green">
                                {idx.market_cap_change_percentage_24h.toFixed(
                                  2
                                )}
                                %
                              </div>
                            )}{" "}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crypto01;
