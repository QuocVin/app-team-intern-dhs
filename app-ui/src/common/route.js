import DashboardView from '../views/Dashboard';
import HomeView from '../views/Home';
import LoginView from '../views/Login';
import RegisterView from '../views/Register';

import LoginIcon from '@material-ui/icons/PeopleAltOutlined';
import DashboardIcon from "@material-ui/icons/Dashboard";


const RoutesType = {
    New: "new",
    Detail: ":id"
}

export const RouteNames = {
    Dashboard: 'Dashboard',
    Home: '',
    Login: 'Login',
    Register: 'Register',
}

export const AllRouteNames = {
    ...RouteNames
}

export const RoutePaths = {
    Dashboard: ['', RouteNames.Dashboard].join('/'),
    Login: ['', RouteNames.Login].join('/'),
    Register: ['', RouteNames.Register].join('/'),
    Home: ['', RouteNames.Home].join('/'),
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
}