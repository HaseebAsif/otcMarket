import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/layout/about-h1.png";
import img2 from "../../assets/images/layout/about-h2.png";
import img3 from "../../assets/images/layout/about-h3.png";
import img4 from "../../assets/images/layout/about-h4.png";

import icon1 from "../../assets/images/icon/icon-01.png";
import icon2 from "../../assets/images/icon/icon-02.png";
import icon3 from "../../assets/images/icon/icon-03.png";
import icon4 from "../../assets/images/icon/icon-04.png";
import icon5 from "../../assets/images/icon/icon-05.png";
import { ExternalLink } from "react-external-link";
import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Button from "../button";
import { useTranslation } from "react-i18next";

About01.propTypes = {};

function About01(props) {
  const { t } = useTranslation();

  const [data] = useState([
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
  ]);
  const [icon] = useState([
    {
      id: 1,
      img: icon1,
      class: "icon-1",
    },
    {
      id: 2,
      img: icon2,
      class: "icon-2",
    },
    {
      id: 3,
      img: icon3,
      class: "icon-3",
    },
    {
      id: 4,
      img: icon4,
      class: "icon-4",
    },

    {
      id: 5,
      img: icon5,
      class: "icon-5",
    },
  ]);

  const [dataBlock] = useState({
    heading: "What Is OTCmarket",
    desc: "traslation003",
  });
  const [dataList] = useState([
    {
      title: "traslation001",
      text: "traslation002",
    },
    {
      title: "Buy and sell BTC, ETH, XRP, OKB, Etc",
      text: "translation004",
    },
  ]);
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="about_image">
              <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                className="img-swiper"
                pagination
              >
                {data.map((idx) => (
                  <SwiperSlide key={idx.id}>
                    <img
                      className="img-main"
                      src={idx.img}
                      alt=""
                      width="100%"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {icon.map((idx) => (
                <img
                  key={idx.id}
                  className={`icon ${idx.class}`}
                  src={idx.img}
                  alt="Rockie"
                />
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div
              className="about__content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="heading">{t(dataBlock.heading)}</h3>
              <p className="fs-20 decs">{t(dataBlock.desc)}</p>
              <ul czlassName="list">
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
              <ExternalLink
                class="btn-action"
                href="https://www.otcex.io/"
                target="_blank"
              >
                <span>Explore More</span>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About01;
