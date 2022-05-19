import React, { useState } from "react";
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FiStar, FiFolder, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Activity from "../Activity";


export default function SideBar() {
  // returns side bar component

  // const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState("");

  // sidebar state
  const [menuCollapse, setMenuCollapse] = useState(true);

  const [arrowDirection, setArrowDirection] = useState("right");

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  const arrowClick = () => {
    arrowDirection === "right" ? setArrowDirection("left") : setArrowDirection("right");
  }

  // temporary data since API is not working.
  const activities = {
    "user": {
      "name": "John Doe"
    },
    "action": "added",
    "subject": {
      "name": "Favorites"
    },
    "object": {
      "name": "Star Wars: The Last Jedi"
    },
    "created_at": "19th May, 2022"
  };

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Menu iconShape="square">
            <div className="closemenu">
              <FontAwesomeIcon icon={arrowDirection === 'left' ? "xmark" : "bars"} onClick={() => {
                arrowClick();
                menuIconClick();
              }} />
            </div>
            <div className="menuItems">
              <MenuItem icon={<FiFolder />} onClick={() => {
                setPage('/');
                setSelected('home');
              }}
                className={selected === 'home' ? 'selected' : ''}>
                Home
                {/* if selected is home, show the arrow */}
                {selected === 'home' ?
                  <Link to="/">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link>
                  : ''}
              </MenuItem>
              <MenuItem icon={<FiStar />} onClick={() => {
                setPage('/favorites')
                setSelected('favorites');
              }}
                className={selected === 'favorites' ? 'selected' : ''}>
                Favorites
                {/* if selected is favorites, show the arrow */}
                {selected === 'favorites' ?
                  <Link to="/favorites">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link> : ''}
              </MenuItem>
              <MenuItem icon={<FiClock />} onClick={() => {
                setPage('/watchlater')
                setSelected('watch later');
              }}
                className={selected === 'watch later' ? 'selected' : ''}>
                Watch Later
                {/* if selected is watch later, show the arrow */}
                {selected === 'watch later' ?
                  <Link to="/watchlater">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link> : ''}
              </MenuItem>
            </div>
          </Menu>
          {menuCollapse ? '' : 
            <div className="latestActivities">
              {!menuCollapse &&
                <ul>
                  <h1>Latest Activities</h1>
                </ul>
              }
              {/* map through activities and return Activity component */}
              {!menuCollapse &&
                Object.keys(activities).map((key, index) => {
                  return <Activity activity={activities} key={index} />
                }
                )
              }
            </div> }
        </SidebarContent>
      </ProSidebar>
    </div>
  )
}