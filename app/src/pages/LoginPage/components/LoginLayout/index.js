import { TextField, Button, Box, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../rotes/routeNames";

import styles from "./styles.module.scss";

const LoginLayout = ({
  setLoginValues,
  handleSubmit,
  isLoading,
  isFormLoginValid,
  errors,
}) => {
  return (
    <Box>
      <Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box className={styles.formWrapper}>
            <h1 className={styles.header}>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <Box className={styles.boxWrapper}>
                <TextField
                  name="email"
                  onChange={setLoginValues}
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Box>
              <Box className={styles.boxWrapper}>
                <TextField
                  name="password"
                  onChange={setLoginValues}
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Box>
              <Button
                type="submit"
                variant="outlined"
                disabled={!isFormLoginValid}
              >
                Login
              </Button>
            </form>
            <Box className={styles.boxWrapper}>
              <Link to={ROUTES.REGISTRATION_PAGE}>SIGN UP</Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LoginLayout;
