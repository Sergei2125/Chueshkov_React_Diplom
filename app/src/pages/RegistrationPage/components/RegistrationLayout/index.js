import React from "react";
//import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";

import styles from "./styles.module.scss";

const RegistrationLayout = ({
  setRegistrationValues,
  handleSubmit,
  isFormDataValid,
}) => {
  return (
    <Box>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        <Box className={styles.boxWrapper}>
          <TextField
            required
            name="email"
            onChange={setRegistrationValues}
            label="Email"
            type="email"
            variant="outlined"
          />
          <Box className={styles.boxWrapper}>
            <TextField
              required
              name="firstName"
              onChange={setRegistrationValues}
              label="FirstName"
              type="firstName"
              variant="outlined"
            />
          </Box>
          <Box className={styles.boxWrapper}>
            <TextField
              required
              name="lastName"
              onChange={setRegistrationValues}
              label="LastName"
              type="lastName"
              variant="outlined"
            />
          </Box>
          <Box>
            <h2>Address</h2>
            <TextField
              name="country"
              onChange={setRegistrationValues}
              label="Country"
              type="country"
              variant="outlined"
            />
            <TextField
              name="city"
              onChange={setRegistrationValues}
              label="City"
              type="city"
              variant="outlined"
            />
            <TextField
              name="addressLine1"
              onChange={setRegistrationValues}
              label="AddressLine1"
              type="addressLIne1"
              variant="outlined"
            />
            <TextField
              name="addressLine2"
              onChange={setRegistrationValues}
              label="AddressLine2"
              type="addressLIne2"
              variant="outlined"
            />
          </Box>

          <Box className={styles.boxWrapper}>
            <InputLabel id="label">Gender</InputLabel>
            <Select
              labelId="label"
              id="select"
              onChange={setRegistrationValues}
              variant="outlined"
              name="gender"
              label="male"
              defaultValue="male"
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </Select>
          </Box>

          <Box className={styles.boxWrapper}>
            <TextField
              required
              name="password"
              onChange={setRegistrationValues}
              label="Password"
              type="password"
              variant="outlined"
            />
          </Box>
          <Box className={styles.boxWrapper}>
            <TextField
              required
              name="passwordRepeat"
              onChange={setRegistrationValues}
              label="Repeat password"
              type="passwordRepeat"
              variant="outlined"
            />
          </Box>
          <Box className={styles.boxWrapper}>
            <TextField
              required
              name="phone"
              onChange={setRegistrationValues}
              label="Phone"
              type="phone"
              variant="outlined"
            />
          </Box>
          <Button type="submit" variant="outlined" disabled={!isFormDataValid}>
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

//RegistrationLayout.propTypes = {};

export default RegistrationLayout;
