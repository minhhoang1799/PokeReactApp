import PropTypes from "prop-types";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import "./style.scss";

PokePagination.propTypes = {
  countPage: PropTypes.number,
  params: PropTypes.object,
  handlePagination: PropTypes.func,
  type: PropTypes.string,
};

PokePagination.defaultProps = {
  countPage: 1,
  params: {},
  handlePagination: null,
  type: "",
};

function PokePagination(props) {
  const { countPage, params, handlePagination, type } = props;
  const quantityPagePagination = Math.ceil(countPage / params.limit);
  return (
    <div className={`container ${type === "all" ? "" : "hidden"}`}>
      <div className="poke__pagination">
        <Pagination
          count={quantityPagePagination}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
}

export default PokePagination;
