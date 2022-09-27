import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "react-external-link";

Sale01.propTypes = {};

function Sale01(props) {
  const { t } = useTranslation();

  const [dataBlock] = useState({
    title: "Get airdrops",
    desc: "translation008",
  });
  return (
    <section className="section-sale">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-md-7">
            <div className="block-text">
              <h4 className="heading">{t(dataBlock.title)}</h4>
              <p className="desc">{t(dataBlock.desc)}</p>
            </div>
          </div>
          <div className="col-md-5">
            <ExternalLink
              class="btn-action"
              href="https://www.otcex.io/SignUp"
              target="_blank"
            >
              <span>Create Account</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sale01;
