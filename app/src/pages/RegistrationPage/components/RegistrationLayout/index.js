import React from "react";
import PropTypes from "prop-types";

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
  registrationValues,
  errors,
  message,
  handleGoTOLoginPage,
}) => {
  console.log(isFormDataValid);
  return (
    <Box className={styles.wrapper}>
      {message ? (
        <Box className={styles.messageWrapper}>
          <h1 className={styles.messageTitle}>{message}!</h1>
          <Button variant="outlined" onClick={handleGoTOLoginPage}>
            SIGN IN
          </Button>
        </Box>
      ) : (
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
                value={registrationValues.email}
                variant="outlined"
              />
              <Box className={styles.boxWrapper}>
                <TextField
                  required
                  name="firstName"
                  onChange={setRegistrationValues}
                  label="FirstName"
                  type="firstName"
                  value={registrationValues.firstName}
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
                  value={registrationValues.lastName}
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
                  value={registrationValues.address.country}
                  variant="outlined"
                />
                <TextField
                  name="city"
                  onChange={setRegistrationValues}
                  label="City"
                  type="city"
                  value={registrationValues.address.city}
                  variant="outlined"
                />
                <TextField
                  name="addressLine1"
                  onChange={setRegistrationValues}
                  label="AddressLine1"
                  type="addressLIne1"
                  value={registrationValues.address.addressLine1}
                  variant="outlined"
                />
                <TextField
                  name="addressLine2"
                  onChange={setRegistrationValues}
                  label="AddressLine2"
                  type="addressLIne2"
                  value={registrationValues.address.addressLine2}
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
                  value={registrationValues.gender}
                  name="gender"
                  label="male"
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
                  value={registrationValues.password}
                  variant="outlined"
                />
              </Box>
              <Box className={styles.boxWrapper}>
                <TextField
                  required
                  name="passwordRepeat"
                  onChange={setRegistrationValues}
                  label="Repeat password"
                  type="password"
                  value={registrationValues.passwordRepeat}
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
                  value={registrationValues.phone}
                  variant="outlined"
                />
              </Box>
              {errors && <div style={{ color: "red" }}>{errors}</div>}
              {message && (
                <div>
                  <p style={{ color: "purple" }}>{message}</p>
                  <button>SIGN IN</button>
                </div>
              )}
              <Button
                type="submit"
                variant="outlined"
                disabled={!isFormDataValid}
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

RegistrationLayout.propTypes = {
  setRegistrationValues: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isFormDataValid: PropTypes.bool.isRequired,
};

export default RegistrationLayout;
