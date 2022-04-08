import DashboardView from '../views/Dashboard';
import HomeView from '../views/Home';
import LoginView from '../views/Login';
import RegisterView from '../views/Register';

import LoginIcon from '@material-ui/icons/PeopleAltOutlined';
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from '../views/Profile';


const RoutesType = {
    New: "new",
    Detail: ":id"
}

export const RouteNames = {
    Dashboard: 'Dashboard',
    Home: '',
    Login: 'Login',
    Register: 'Register',
    Profile: 'Profile',
    ChangePassword: 'ChangePassword',
    ChangeProfile: 'ChangeProfile',
    Orders: 'Orders'
}

export const AllRouteNames = {
    ...RouteNames
}

export const RoutePaths = {
    Dashboard: ['', RouteNames.Dashboard].join('/'),
    Login: ['', RouteNames.Login].join('/'),
    Register: ['', RouteNames.Register].join('/'),
    Home: ['', RouteNames.Home].join('/'),
    Profile: ['', RouteNames.Profile].join('/'),
    ChangePassword: ['', RouteNames.ChangePassword].join('/'),
    ChangeProfile: ['', RouteNames.ChangeProfile].join('/'),
    Orders: ['', RouteNames.Orders].join('/')
}

// route
export const RoutesApp = {
    Dashboard: {
        exact: true,
        id: RouteNames.Dashboard,
        label: "Dashboard",
        path: RoutePaths.Dashboard,
        component: DashboardView,
        icon: DashboardIcon
    },
    Login: {
        exact: true,
        id: RouteNames.Login,
        label: "Login",
        path: RoutePaths.Login,
        component: LoginView,
        icon: LoginIcon
    },
    Register: {
        exact: true,
        id: RouteNames.Register,
        label: "Register",
        path: RoutePaths.Register,
        component: RegisterView,
        icon: LoginIcon
    },
    Home: {
        exact: true,
        id: RouteNames.Home,
        label: "Home",
        path: RoutePaths.Home,
        component: HomeView,
        icon: LoginIcon
    },
    Profile: {
        exact: true,
        id: RouteNames.Profile,
        label: "Profile",
        path: RoutePaths.Profile,
        component: Profile,
        icon: LoginIcon
    },
    ChangePassword: {
        exact: true,
        id: RouteNames.ChangePassword,
        label: "Change Password",
        path: RoutePaths.ChangePassword,
        component: Profile,
        icon: LoginIcon
    },
    ChangeProfile: {
        exact: true,
        id: RouteNames.ChangeProfile,
        label: "Change Profile",
        path: RoutePaths.ChangeProfile,
        component: Profile,
        icon: LoginIcon
    },Orders: {
        exact: true,
        id: RouteNames.Orders,
        label: "Orders",
        path: RoutePaths.Orders,
        component: Profile,
        icon: LoginIcon
    }
}

export const routeDrawer = {
    Home: {
        exact: true,
        id: RouteNames.Home,
        label: "Home",
        path: RoutePaths.Home,
        component: HomeView,
        icon: LoginIcon,
        showWhenNotLogin: true,
        showWhenLogin: true
    },
    Login: {
        exact: true,
        id: RouteNames.Login,
        label: "Login",
        path: RoutePaths.Login,
        component: LoginView,
        icon: LoginIcon,
        showWhenNotLogin: true,
        showWhenLogin: false
    },
    Profile: {
        exact: true,
        id: RouteNames.Profile,
        label: "Profile",
        path: RoutePaths.Profile,
        component: Profile,
        icon: LoginIcon,
        showWhenNotLogin: false,
        showWhenLogin: true
    },
}