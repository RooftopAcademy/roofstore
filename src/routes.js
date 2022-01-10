import HomePage from "./Pages/Public/HomePage";
import CartPage from "./Pages/Public/CartPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const routes = [
    {
        "path" : "/",
        "element" : <HomePage />,
    },
    {
        "path" : "/cart",
        "element" : <PrivateRoute><CartPage /></PrivateRoute>,
    },
]

export default routes