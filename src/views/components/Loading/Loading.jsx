import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Loading.propTypes = {};

function Loading({ loading }) {
  return (
    <>
      {loading && (
        <div className="loading">
          <div class="center-on-page">
            <div class="pokeball">
              <div class="pokeball__button"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
