import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutesApp } from "../../common/route"
import { useStore } from "react-redux";
import cookies from 'react-cookies';

export default function ({ classes, open }) {
    const history = useHistory();

    const [childDrawer, setChildDrawer] = React.useState(
        Object.values(RoutesApp)
    );

    // chọn mục trên drawer
    const handleItem_click = ({ id, path }) => {
        if (path) {
            history.push(path);
        } else {
            history.goBack();
        }
    };

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
                        const icon = route.bigIcon ? (
                            <route.bigIcon
                                fill="#3f51b5"
                                stroke="#3f51b5"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <route.icon color="primary" />
                        );

                        return (
                            <div key={route.id + idx}>
                                <ListItem button onClick={() => handleItem_click(route)} >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={route.label} />
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    })}
                </List>
            </div>
        </Drawer>
    );

}

