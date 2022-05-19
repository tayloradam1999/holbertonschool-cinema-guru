import React, { useState } from "react";
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FiStar, FiFolder, FiClock, FiArrowRightCircle } from "react-icons/fi";
import Activity from "../Activity";


export default function SideBar() {
  // returns side bar component

  // const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  // sidebar state
  const [menuCollapse, setMenuCollapse] = useState(false);

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

  // setPage function
  // const setPage = (page) => {
  //   setSelected(page);
  //   navigate(page);
  // }

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Menu iconShape="square">
            <div className="closemenu">
              <FontAwesomeIcon icon={arrowDirection === 'left' ? "arrow-left" : "arrow-right"} onClick={() => {
                arrowClick();
                menuIconClick();
              }} />
            </div>
            <div className="menuItems">
              <MenuItem icon={<FiFolder />} onClick={() => {
                // setPage('/')
              }}
                onMouseOver={() => setSelected('home')}
                onMouseLeave={() => {
                  setSelected('');
                }}
                className={selected === 'home' ? 'selected' : ''}>
                Home
              </MenuItem>
              <MenuItem icon={<FiStar />} onClick={() => {
              }}
                onMouseOver={() => setSelected('favorites')}
                onMouseLeave={() => {
                  setSelected('');
                }}
                className={selected === 'favorites' ? 'selected' : ''}>
                Favorites
              </MenuItem>
              <MenuItem icon={<FiClock />} onClick={() => {
              }}
                onMouseOver={() => setSelected('watch later')}
                onMouseLeave={() => {
                  setSelected('');
                }}
                className={selected === 'watch later' ? 'selected' : ''}>
                Watch Later
              </MenuItem>
            </div>
          </Menu>
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
        </SidebarContent>
      </ProSidebar>
    </div>
  )
}