import React, { useState } from "react";
import {
  SidebarText,
  SidebarLink,
  DropdownLink,
  SidebarSubText,
} from "../../styles/sidebar/SubMenu";

const SubMenu = ({ item, trainingFunction }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarText>{item.title}</SidebarText>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <>
              <DropdownLink
                to={item.path}
                key={index}
                onClick={() => {
                  if (item.index === 31) {
                    trainingFunction();
                  }
                }}
              >
                {item.icon}
                <SidebarSubText>{item.title}</SidebarSubText>
              </DropdownLink>
            </>
          );
        })}
    </>
  );
};

export default SubMenu;
