import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { ExternalLink } from "react-external-link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useTranslation } from "react-i18next";
import Chart from "./Chart";

Coinlist01.propTypes = {
  dataCoin: PropTypes.array,
};

function Coinlist01(props) {
  const { t } = useTranslation();
  const [coins, setCoins] = useState([]);
  //const [search, setSearch] = useState("");
  const [ApiCall, setApiCall] = useState();
  const { dataCoin } = props;

  const [dataCoinTab] = useState([
    {
      id: 1,
      title: "View All",
    },
    // {
    //   id: 2,
    //   title: "Metaverse",
    // },
    // {
    //   id: 3,
    //   title: "Entertainment",
    // },
    // {
    //   id: 4,
    //   title: "Energy",
    // },
    // {
    //   id: 5,
    //   title: "NFT",
    // },
    // {
    //   id: 6,
    //   title: "Gaming",
    // },
    // {
    //   id: 7,
    //   title: "Music",
    // },
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

  console.log(coins);

  return (
    <section className="coin-list">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text">
              <h3 className="heading">{t("Market Update")}</h3>
              <Link to="#" className="btn-action-2">
                See All Coins
              </Link>
            </div>

            <div className="coin-list__main">
              <Tabs>
                <TabList>
                  {dataCoinTab.map((idx) => (
                    <Tab key={idx.id}>{t(idx.title)}</Tab>
                  ))}
                </TabList>

                {dataCoinTab.map((data) => (
                  <TabPanel key={data.id}>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">24h pirce chart</th>

                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {coins.slice(0, 15).map((idx) => (
                            <tr key={idx.id}>
                              <td>
                                <span className="icon-star"></span>
                              </td>
                              <td>
                                <Link to="#">
                                  <img
                                    style={{ height: "30px" }}
                                    src={idx.image}
                                    alt="rockie"
                                  />
                                  <span>{idx.name}</span>
                                  <span className="unit">{idx.symbol}</span>
                                </Link>
                              </td>
                              <td className="boild">
                                ${idx.current_price.toLocaleString()}
                              </td>
                              <td>
                                {idx.market_cap_change_percentage_24h < 0 ? (
                                  <div className="red">
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
                                )}
                              </td>
                              <td className="boild">
                                ${idx.market_cap.toLocaleString()}
                              </td>
                              <td className="boild">
                                <Chart
                                  loss={
                                    idx.market_cap_change_percentage_24h < 0
                                      ? true
                                      : false
                                  }
                                  attributeKey={idx.id}
                                />
                              </td>

                              <td>
                                <ExternalLink
                                  class="btn"
                                  href="https://www.otcex.io/"
                                  target="_blank"
                                >
                                  <span>Trade</span>
                                </ExternalLink>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default Coinlist01;
