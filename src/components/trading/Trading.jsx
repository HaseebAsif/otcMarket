import React, { useState } from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import img from "../../assets/images/layout/trading-01.png";

Trading.propTypes = {
  data: PropTypes.array,
};

function Trading(props) {
  const { t } = useTranslation();

  const { data } = props;

  const [dataBlock] = useState({
    heading: "3 steps easy trading",
    desc: "Rockie has a variety of features that make it the best place to start trading",
  });
  return (
    <section className="trading">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="trading__image">
              <img src={img} alt="Rockie" />
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div
              className="trading__content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="heading">{t(dataBlock.heading)}</h3>
              <p className="desc fs-20">{t(dataBlock.desc)}</p>

              <ul className="list-steps">
                {data.map((idx) => (
                  <li key={idx.id}>
                    <img src={idx.icon} alt="Rockie" />
                    <div className="content">
                      <p className="step">{t(idx.step)}</p>
                      <h6 className="title">{t(idx.title)}</h6>
                      <p className="fs-16">{t(idx.text)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trading;
