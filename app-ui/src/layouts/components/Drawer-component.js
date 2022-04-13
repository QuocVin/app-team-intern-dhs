import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { routeDrawer } from "../../common/route"
import { useDispatch, useSelector } from "react-redux";
import cookies from 'react-cookies';
import { logout } from "../../redux/login/loginSlice";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function ({ classes, open }) {
    const history = useHistory();
    
    
    const [childDrawer, setChildDrawer] = React.useState([]);

    // chọn mục trên drawer
    const handleItem_click = ({ id, path }) => {
        if (path) {
            history.push(path);
        } else {
            history.goBack();
        }
    };
    const isLogin = useSelector(state => state.loginState.isLogin)

    const dispatch = useDispatch()

    useEffect(() => {
        setChildDrawer(Object.values(routeDrawer))
    }, [])
    

    return (
        <Drawer
            className={classes.drawer}
            anchor="left"
            variant="persistent"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {childDrawer.map((route, idx) => {
                        if(isLogin){
                            if(!route.showWhenLogin){
                                return null
                            }
                        }else{
                            if(!route.showWhenNotLogin){
                                return null
                            }
                        }
                        return (
                            <div key={route.id + idx}>
                                <ListItem button onClick={() => handleItem_click(route)} >
                                    <ListItemIcon><route.icon color="primary" /></ListItemIcon>
                                    <ListItemText primary={route.label} />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                    {
                        isLogin && <div>
                            <ListItem button onClick={() => dispatch(logout())} >
                                <ListItemIcon><PowerSettingsNewIcon color='primary'/></ListItemIcon>
                                <ListItemText primary={"Log out"} />
                            </ListItem>
                            <Divider />
                        </div>
                    }
                </List>
            </div>
        </Drawer>
    );

}

