import { CATEGORY_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE } from "./routes";

const navItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Product',
        path: PRODUCT_ROUTE,
    },
    {
        label: 'Categories',
        path: CATEGORY_ROUTE,
    },
    {
        label: "Login",
        path: LOGIN_ROUTE
    },
]
export default navItems;