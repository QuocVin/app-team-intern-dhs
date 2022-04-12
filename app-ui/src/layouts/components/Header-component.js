import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Button,
  IconButton,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import React from "react";
import { useHistory } from "react-router";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useStore } from "react-redux";
import cookies from "react-cookies";
import LOGO from "../../assets/images/dhs_logo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const MENU = [
  { id: "san_pham", label: "Sản phẩm" },
  { id: "dich_vu", label: "Dịch vụ" },
  { id: "khach_hang", label: "Khách hàng" },
  { id: "tin_tuc", label: "Tin tức" },
  { id: "tuyen_dung", label: "Tuyển dụng" },
  { id: "gioi_thieu", label: "Giới thiệu" },
  { id: "lien_he", label: "Liên hệ" },
];
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function ({ classes, open, setOpen, mainRef }) {
  const trigger = useScrollTrigger({ target: mainRef });
  const {cartTotalQuantity} = useSelector((state)=> state.cartState)
  const [openSet, setOpenSet] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenSet((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenSet(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenSet(false);
    }
  }

  let userComponet = (
    <>
      {MENU.map((item) => {
        return (
          <Button key={item.id + "-btn-menu"}>
            {" "}
            <Typography variant="subtitle1" style={{ textTransform: "none" }}>
              {item.label}
            </Typography>{" "}
          </Button>
        );
      })}
      <div>
        <Button
          ref={anchorRef}
          aria-controls={openSet ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<ExpandMoreIcon />}
        >
          VN
        </Button>
        <Popper
          open={openSet}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openSet}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem>Tiếng Việt</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div>
        <Tooltip title="Cart">
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartTotalQuantity} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Tooltip>
      </div>
      {/* <Button onClick={() => handleLogin_click('/Login')} > <Typography variant="subtitle1" style={{ textTransform: 'none' }}>Đăng nhập</Typography> </Button>
        <Button onClick={() => handleLogin_click('/Register')} > <Typography variant="subtitle1" style={{ textTransform: 'none' }}>Đăng Ký</Typography> </Button> */}
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="bar">
          <div className="block-left">
            <IconButton
              size="small"
              className="menu-icon"
              onClick={() => setOpen((pre) => !pre)}
            >
              {open ? <ArrowBackIosIcon /> : <MenuIcon />}
            </IconButton>

            <Button>
              <img src={LOGO} alt="dhs_logo" />
            </Button>
          </div>

          <div className="block-right ">{userComponet}</div>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
