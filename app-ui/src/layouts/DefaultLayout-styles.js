import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // .makeStyles-root-1
    // flexDirection: 'column'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000",
    "& .bar": {
      justifyContent: "center",
    },
    display: "flex",
    "& .menu-icon": {
      color: "#fff",
      marginRight: 10,
    },
    "& .block-left": {
      display: "flex",
      marginRight: "6rem",
    },
    "& .block-right": {
      display: "flex",
      "& .profile": {
        // marginLeft: theme.spacing(2),
      },
      "& .MuiButton-text": {
        color: "white",
      },
      "& .MuiIconButton-root" : {
        color: "white",
      },
      "& .MuiIconButton-root:hover" : {
        color: "red",
      }

    },
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    // transition: theme.transitions.create(['margin', 'width'], {
    // 	easing: theme.transitions.easing.easeOut,
    // 	duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,

    //
    height: "100vh",
    overflow: "auto",
    position: "relative",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 0,
    backgroundColor: '#ebfae8',
  },
  drawerContainer: {
    overflow: "auto",
  },

  // header
  rootProfileMenu: {
    "& .display-name": {
      "& .avatar-icon": {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(2),
      },
    },
    "& .menu-item": {
      "& .item-icon": {
        minWidth: "unset",
        paddingRight: 10,
      },
    },
    "& .MuiList-root": {
      padding: 0,
    },
  },
  rootLangMenu: {
    "& .lang-icon": {
      width: "36px",
      height: "36px",
    },
  },
  langPopover: {
    "& .MuiBox-root": {
      backgroundColor: "transparent",
    },
  },
  langMenuList: {
    padding: "0px !important",
    backgroundColor: "rgba(255,255,255,1)",
    "& .MuiListItem-root": {
      padding: "5px 8px",
    },
  },

  footer: {
    backgroundColor: "#212121",
    minWidth: "100%",

    padding: theme.spacing(3),
    overflow: "auto",
    position: "relative",

    "& .MuiTypography-h5": {
      color: "rgb(123, 123, 123)"
    },
    "& .MuiTypography-body1": {
      color: "rgb(123, 123, 123)"
    },
    "& .MuiSvgIcon-root": {
      color: "rgb(123, 123, 123)",
      marginRight:theme.spacing(3),
    }
  }
}));
