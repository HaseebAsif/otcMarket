import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img_en from "../../assets/images/flags/us.jpg";
import img_ko from "../../assets/images/flags/korea.png";
import "./styles.scss";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Button from "../button";
import { ExternalLink } from "react-external-link";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

Banner01.propTypes = {
  data: PropTypes.array,
};

function Banner01(props, handleChange) {
  const { t } = useTranslation();
  const { data } = props;

  const whitepaper_two = [
    {
      value: "en",
      text: "WHITE PAPER",
      img: img_en,
      path: "http://clozer.myartsonline.com/files/OTCcoin_EN.pdf",
    },
    {
      value: "ko",
      text: "WHITE PAPER",
      img: img_ko,
      path: "http://clozer.myartsonline.com/files/OTCcoin_KR.pdf",
    },
  ];

  const [dataBlock] = useState({
    title: "OTC MARKET",
    desc: "OTC market is the easiest, safest, and fastest way to buy & sell crypto asset exchange",
    title2: "Our Partners",
  });

  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="banner__content">
              <h2 className="title">{t(dataBlock.title)}</h2>
              <p className="fs-20 desc">{t(dataBlock.desc)}</p>
              <div className=" ">
                <Dropdown>
                  <Dropdown.Toggle className="btn-action">
                    WHITE PAPER
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {whitepaper_two.map((item) => (
                      <Dropdown.Item
                        href={item.path}
                        onClick={handleChange}
                        target="_blank"
                      >
                        <ExternalLink
                          to={item.path}
                          className="dropdown-item notify-item"
                        >
                          <span class="">
                            <img src={item.img} width="20px" />
                            {t(item.text)}
                          </span>
                        </ExternalLink>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="partner">
                <h6>{t(dataBlock.title2)}</h6>
                <div className="partner__list">
                  <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={65}
                    slidesPerView={4}
                    className="swiper-partner"
                  >
                    {data.map((idx) => (
                      <SwiperSlide key={idx.id}>
                        <Link to="#">
                          <img src={idx.img} alt="Rockies" />
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="banner__image">
              <video
                loop
                autoplay="true"
                controls
                style={{
                  width: "-webkit-fill-available",
                  height: "max-content",
                }}
                poster="./assets/videothumbnail.jpeg"
              >
                <source src="./assets/movie.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner01;
