import React, { useState } from "react";
import PropTypes from "prop-types";
import line from "../../assets/images/icon/connect-line.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

Work01.propTypes = {};

function Work01(props) {
  const { data } = props;
  const { t } = useTranslation();

  const [dataBlock] = useState({
    heading: "How It Work",
    desc: "translation006",
  });
  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h3 className="heading">{t(dataBlock.heading)}</h3>
              <p className="fs-20 desc">{t(dataBlock.desc)}</p>
            </div>

            <div className="work__main">
              {data.map((idx) => (
                <div className="work-box" key={idx.id}>
                  <div className="image">
                    <img src={idx.img} alt="Rockie" />
                  </div>
                  <div className="content">
                    <p className="step">{t(idx.step)}</p>
                    <Link to="#" className="title">
                      {t(idx.title)}
                    </Link>
                    <p className="text">{t(idx.text)}</p>
                  </div>
                  <img className="line" src={line} alt="Rockie" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work01;
