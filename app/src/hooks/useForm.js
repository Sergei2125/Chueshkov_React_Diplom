import { useState, useCallback } from "react";

export default (InitialValues) => {
  const [formValues, setFormValues] = useState(InitialValues);

  const handleFormChange = useCallback(
    (event) => {
      const { value, name, type } = event.target;

      if (
        name === "country" ||
        name === "city" ||
        name === "addressLine1" ||
        name === "addressLine2"
      ) {
        setFormValues({
          ...formValues,
          address: { ...formValues.address, [name]: value },
        });
      } else {
        setFormValues({ ...formValues, [name]: value });
      }
    },
    [formValues]
  );

  const handleReset = useCallback(() => {
    setFormValues(InitialValues);
  }, []);

  return [formValues, handleFormChange, handleReset];
};
