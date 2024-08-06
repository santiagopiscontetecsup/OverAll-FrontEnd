import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CBadge, CNavLink, CSidebarNav } from '@coreui/react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useAuth } from '../components/AuthProvider'; 

export const AppSidebarNav = ({ items }) => {
  const { currentUser } = useAuth();

  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink {...(rest.to && { as: NavLink })} {...rest}>
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    );
  };

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, roles, ...rest } = item;
    const Component = component;
    if (roles && !roles.includes(currentUser?.access)) {
      return null;
    }
    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
    );
  };

  const filteredItems = items.filter(item => {
    if (item.roles) {
      return item.roles.includes(currentUser?.access);
    }
    return true;
  });

  return (
    <CSidebarNav as={SimpleBar}>
      {filteredItems &&
        filteredItems.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </CSidebarNav>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
