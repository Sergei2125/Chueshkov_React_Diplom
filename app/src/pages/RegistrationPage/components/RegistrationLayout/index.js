import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  Typography,
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
                error={!registrationValues.email}
                name="email"
                onChange={setRegistrationValues}
                label="Email"
                type="email"
                value={registrationValues.email}
                variant="outlined"
                helperText={
                  !registrationValues.email && "Email is a required field."
                }
              />
              <Box className={styles.boxWrapper}>
                <TextField
                  error={!registrationValues.firstName}
                  name="firstName"
                  onChange={setRegistrationValues}
                  label="first Name"
                  type="firstName"
                  value={registrationValues.firstName}
                  variant="outlined"
                  helperText={
                    !registrationValues.firstName &&
                    "First Name is a required field."
                  }
                />
              </Box>
              <Box className={styles.addressWrapper}>
                <TextField
                  error={!registrationValues.lastName}
                  name="lastName"
                  onChange={setRegistrationValues}
                  label="Last Name"
                  type="lastName"
                  value={registrationValues.lastName}
                  variant="outlined"
                  helperText={
                    !registrationValues.lastName &&
                    "Last Name is a required field."
                  }
                />
              </Box>
              <Box>
                <h2>Address</h2>
                <TextField
                  className={styles.textFieldWrapper}
                  name="country"
                  onChange={setRegistrationValues}
                  label="Country"
                  type="country"
                  value={registrationValues.address.country}
                  variant="outlined"
                />
                <TextField
                  className={styles.textFieldWrapper}
                  name="city"
                  onChange={setRegistrationValues}
                  label="City"
                  type="city"
                  value={registrationValues.address.city}
                  variant="outlined"
                />
                <TextField
                  className={styles.textFieldWrapper}
                  name="addressLine1"
                  onChange={setRegistrationValues}
                  label="AddressLine1"
                  type="addressLIne1"
                  value={registrationValues.address.addressLine1}
                  variant="outlined"
                />
                <TextField
                  className={styles.textFieldWrapper}
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
                  error={registrationValues.password.length < 8}
                  name="password"
                  onChange={setRegistrationValues}
                  label="Password"
                  type="password"
                  value={registrationValues.password}
                  variant="outlined"
                  helperText={
                    registrationValues.password.length < 8 && "Weak password."
                  }
                />
              </Box>
              <Box className={styles.boxWrapper}>
                <TextField
                  error={
                    registrationValues.password !==
                    registrationValues.passwordRepeat
                  }
                  name="passwordRepeat"
                  onChange={setRegistrationValues}
                  label="Repeat password"
                  type="password"
                  value={registrationValues.passwordRepeat}
                  variant="outlined"
                  helperText={
                    registrationValues.password !==
                      registrationValues.passwordRepeat &&
                    "Repeat password is wrong."
                  }
                />
              </Box>
              <Box className={styles.boxWrapper}>
                <TextField
                  error={!registrationValues.phone}
                  name="phone"
                  onChange={setRegistrationValues}
                  label="Phone"
                  type="phone"
                  value={registrationValues.phone}
                  variant="outlined"
                  helperText={
                    !registrationValues.phone && "Phone is a required field."
                  }
                />
              </Box>
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
