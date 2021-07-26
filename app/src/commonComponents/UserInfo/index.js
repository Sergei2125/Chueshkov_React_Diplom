import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import StopIcon from "@material-ui/icons/Stop";

import styles from "./styles.module.scss";

import DraftsIcon from "@material-ui/icons/Drafts";

const UserInfo = ({ userInfo, handleOpenAddressInfo }) => {
  const [open, setOpen] = React.useState(false);

  handleOpenAddressInfo = () => {
    setOpen(!open);
  };

  return (
    <List className={styles.userInfoWrapper}>
      <ListItem>
        <ListItemIcon>
          <DraftsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={userInfo.email} />
      </ListItem>
      <ListItem>
        <ListItemText>First Name: {userInfo.firstName} </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Last Name: {userInfo.lastName} </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Gender: {userInfo.gender} </ListItemText>
      </ListItem>
      <ListItem button onClick={handleOpenAddressInfo}>
        <ListItemIcon>
          <InboxIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Address" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemIcon className={styles.addressItem}>
              <StopIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Country: {userInfo.address.country} </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={styles.addressItem}>
              <StopIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>City: {userInfo.address.city} </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={styles.addressItem}>
              <StopIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              AddressLine1: {userInfo.address.addressLine1}{" "}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={styles.addressItem}>
              <StopIcon color="primary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              AddressLine2: {userInfo.address.addressLine2}{" "}
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
      <ListItem>
        <ListItemText>Phone: {userInfo.phone} </ListItemText>
      </ListItem>
    </List>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default UserInfo;
