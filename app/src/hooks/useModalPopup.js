import { useState, useCallback } from "react";

export default (openStatus = false) => {
  const [isOpen, setOpen] = useState(openStatus);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return [isOpen, handleOpen, handleClose];
};
