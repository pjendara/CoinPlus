import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';
import "./nav.css";

import Profile from "../Profile/Profile";
import { fetchCrypto, nameCrypto } from "../../redux/reducers/cryptoRed";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";


import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Language';

function NavMarket({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const idioma = useContext(langContext);

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  function handleSubmit(e) {
    dispatch(nameCrypto(e));
    setCurrentPage(1);
    navigate("/market");
  }

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-warning px-md-5 px-1 sticky-top">
      <div class="container-fluid w-100 ">
        <NavLink to="/">
          <div className="navbar-imge" width="150">

          </div>
        </NavLink>
        <div>
          <div class="container-fluid">
            <input
              class="form-control me-2 hight"
              type="search"
              placeholder='Search...'
              aria-label="Search"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                handleSubmit(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          class="navbar-toggler btn-navAll p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon fs-6"></span>
        </button>
        <div className="nav-All d-flex align-items-center gap-2"><DarkMode /><Profile />  </div>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="nav navbar-nav ms-auto mx-3" />
          <NavLink
            to="/market"
            style={{ textDecoration: "none" }}
            className="px-4 fw-bold text-primary"
          >
            <FormattedMessage
              id='Mercado'
              defaultMessage='Market'
            />
          </NavLink>
          <div className="dropdown ps-3">
            <button onClick={() => idioma.selectLanguage('es-ES') } className="btn btn-outline-primary">ES</button>
            <button onClick={() => idioma.selectLanguage('en-US') } className="btn btn-outline-primary">EN</button>
            </div>
        </div>

        <div className="nav-All-2 d-flex align-items-center gap-2"><DarkMode /><Profile />  </div>
      </div>
    </nav>
  );
}

export default NavMarket;
