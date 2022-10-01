import React, { useState } from "react";

import { Link } from "react-router-dom";
import img1 from "../../assets/images/icon/googleplay.png";
import img2 from "../../assets/images/icon/appstore.png";
import img3 from "../../assets/images/layout/download.png";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "react-external-link";

function Download01(props) {
  const { t } = useTranslation();

  const [dataBlock] = useState({
    heading: "Free your money & Invest with confident",
    desc: "translation005",
  });

  const [dataList] = useState([
    {
      title: "Buy, Sell, And Trade On The Go",
      text: "Manage your holdings from your mobile decive",
    },
    {
      title: "translation007",
      text: "Rest assured you (and only you) have access to your funds",
    },
  ]);

  return (
    <section className="download">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div
              className="download__content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="heading">{t(dataBlock.heading)}</h3>
              <p className="fs-20 decs">{t(dataBlock.desc)}</p>
              <ul className="list">
                {dataList.map((data, idx) => (
                  <li key={idx}>
                    <h6 className="title">
                      <span className="icon-check"></span>
                      {t(data.title)}
                    </h6>
                    <p className="text">{t(data.text)}</p>
                  </li>
                ))}
              </ul>
              <div className="group-button">
                <ExternalLink href="https://play.google.com/store/apps/details?id=com.otcwallet">
                  <img src={img1} alt="Rockie" />
                </ExternalLink>
                <Link to="#">
                  <img src={img2} alt="Rockie" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="download__image">
              <div className="button">Scan To Download</div>
              <img src={img3} alt="Rockie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download01;
