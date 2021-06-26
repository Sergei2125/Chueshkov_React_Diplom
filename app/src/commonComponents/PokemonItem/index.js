import React from "react";
import PropTypes from "prop-types";
import {
  StylesProvider,
  Button,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarBorder from "@material-ui/icons/StarBorder";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./styles.module.scss";

const PokemonItem = ({ pokeInfo }) => {
  const { name, image, price, abilities, stats } = pokeInfo;
  return (
    <div className={styles.pokemonItemWrapper}>
      <div>
        <p>{name}</p>
        <img src={image} />
        <p>Price: {price}</p>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          добавить в корзину
        </Button>
        <div>
          {abilities?.map((ability) => (
            <Accordion key={ability.title}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{ability.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ability.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div>
          {stats?.map((stat) => (
            <ListItem key={stat.title}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={`${stat.title} - ${stat.value}`} />
            </ListItem>
          ))}

          <ListItem>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {};

export default PokemonItem;
