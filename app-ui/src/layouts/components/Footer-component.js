import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "react-redux";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CallIcon from '@material-ui/icons/Call';
import DraftsIcon from '@material-ui/icons/Drafts';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LOGO_FOOTER from "../../assets/images/dhs_logo2.png"


const PRODUCT = [
    { id: "ERP", label: "Quản trị Doanh nghiệp (DHSoft ERP)" },
    { id: "Accounting", label: "Quản trị Tài chính Kế toán (DHSoft Accounting)" },
    { id: "Logistics", label: "Quản lý Giao nhận Vận tải (DHSoft Forwading - Logistics)" },
    { id: "Retail", label: "Quản lý Bán Hàng (DHSoft Retail)" },
    { id: "HRM", label: "Quản lý Nhân sự- Chấm Công - Tính lương (DHSoft HRM)" },
    { id: "Warehouse", label: "Quản lý Kho (DHSoft Warehouse)" },
]

const LINK = [
    { id: "sp", label: "Sản phẩm" },
    { id: "dv", label: "Dịch vụ" },
    { id: "kh", label: "Khách hàng" },
    { id: "Td", label: "Tuyển dụng" },
    { id: "gt", label: "Giới thiệu" },
    { id: "lh", label: "Liên hệ" },
]

const CONTACT = [
    { id: "dc", label: "672A41 , Phan Văn Trị, KDC Cityland Park Hills, Phường 10, Gò Vấp, Tp.HCM.", icon: <HomeIcon /> },
    { id: "dt", label: "0948.47.39.67 - Mr.Hiệp", icon: <PhoneIphoneIcon /> },
    { id: "phone_home", label: "(028) 66 813 919", icon: <CallIcon /> },
    { id: "sales", label: "sales@dhsoft.com.vn", icon: <DraftsIcon /> },
]

export default function ({ classes }) {
    const history = useHistory();

    return (
        <Container className={classes.footer} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className={classes.footerItem}>
                    <img src={LOGO_FOOTER} alt="dhs_logo2" className={classes.footerTitle}/>
                    <Divider/>
                    <Typography>Với phương châm “Kết nối để thành công”, DHSoft luôn đặt mình ở vị trí Khách hàng, thấu hiểu nhu cầu từng Khách hàng, từ đó DHSoft đưa ra những giải pháp tối ưu giúp Doanh nghiệp quản lý hiệu quả, tiết kiệm thời gian và chi phí.</Typography>
                </Grid>
                
                <Grid item xs={12} md={8}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} className={classes.footerItem} >
                            <Typography variant="h5" className={classes.footerTitle}>Các sản phẩm phần mềm</Typography>
                            {PRODUCT.map((p) => {
                                return (
                                    <Typography key={p.id + "-product"}>{p.label}</Typography>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.footerItem}>
                            <Typography variant="h5" className={classes.footerTitle}>Thông tin liên kết</Typography>
                            {LINK.map((p) => {
                                return (
                                    <Typography key={p.id + "-link"}>{p.label}</Typography>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.footerItem}>
                            <Typography variant="h5" className={classes.footerTitle}>Liên Hệ</Typography>
                                {CONTACT.map((p) => {
                                    return (
                                        <div>
                                            {p.icon}
                                            <Typography key={p.id + "-link"} component="span">{p.label}</Typography>
                                        </div>
                                    )
                                })}
                                <FacebookIcon />
                                <YouTubeIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

