import { useEffect, useState } from "react";

export const useLayout = () => {
  const [columns, setColumns] = useState(1);

  const getNumberOfColumns = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return setColumns(1);
    }
    if (screenWidth >= 769 && screenWidth < 992) {
      return setColumns(3);
    }
    if (screenWidth >= 992 && screenWidth < 1440) {
      return setColumns(4);
    }
    if (screenWidth >= 1440) {
      return setColumns(6);
    }
  };

  useEffect(() => {
    getNumberOfColumns();
    window.addEventListener("resize", getNumberOfColumns);

    return () => window.removeEventListener("resize", getNumberOfColumns);
  }, []);

  return columns;
};
