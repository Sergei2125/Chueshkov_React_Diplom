import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
} from "@material-ui/core";

import StarBorder from "@material-ui/icons/StarBorder";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./styles.module.scss";

const PokemonCardDetails = ({ pokeInfo, handleAddToCart }) => {
  const { name, image, price, abilities, stats } = pokeInfo;
  return (
    <Card className={styles.card}>
      <CardContent className={styles.card__content}>
        <Box>
          <Typography className={styles.card__name}>{name}</Typography>
          <CardMedia
            className={styles.card__image}
            component="img"
            image={image}
          />
          <Typography variant="body1">Price: {price}</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleAddToCart}
          >
            add to cart
          </Button>
          <Box>
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
          </Box>
          <Box>
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
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

PokemonCardDetails.propTypes = {
  pokeInfo: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default PokemonCardDetails;
