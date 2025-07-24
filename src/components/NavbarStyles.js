export const navbarStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "40px",
    "@media (max-width: 600px)": {
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "10px 20px",
      //   backgroundColor: "white",
      zIndex: 1100,
      gap: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
  },
  avatar: {
    width: 70,
    height: 70,
    marginTop: "150px",
    cursor: "pointer",
    borderRadius: "8px", // cuboid shape (rectangle with slightly rounded corners)
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.2s ease-in-out",
    },
    "@media (max-width: 600px)": {
      width: 50,
      height: 50,
      marginTop: 0,
      borderRadius: "6px",
    },
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#242424",
    borderRadius: "10px",
    width: "64px",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  mobileDrawer: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "block",
      "& .MuiDrawer-paper": {
        width: "100%",
        backgroundColor: "#0d0d0d",
        color: "white",
      },
    },
  },
  drawerContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  mobileNavItem: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      padding: "15px",
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.1)",
      },
    },
  },
  navItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#333333",
      transform: "scale(1.05)",
      transition: "all 0.2s ease-in-out",
    },
  },
  iconContainer: {
    height: "36px",
    width: "36px",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    color: "#242424",
  },
  menuButton: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "flex",
      color: "#242424",
    },
  },
};
