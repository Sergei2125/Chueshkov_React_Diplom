import React from "react";
import PropTypes from "prop-types";
import { REGUSER } from "../../constant/regUser";
import { UNREGUSER } from "../../constant/unregUser";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderLayout = ({ handleLogout }) => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div>
      {isAuth ? (
        <div>
          {Object.entries(REGUSER).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button>{routeName}</button>
            </Link>
          ))}
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      ) : (
        <div>
          {Object.entries(UNREGUSER).map(([routeName, path]) => (
            <Link to={path} key={routeName}>
              <button>{routeName}</button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

HeaderLayout.propTypes = {};

export default HeaderLayout;
