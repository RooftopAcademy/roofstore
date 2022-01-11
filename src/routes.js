import AdminNavigationPage from './Pages/Public/AdminNavigationPage';
import CartPage from "./Pages/Public/CartPage";
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import ChooseItemTitlePage from './Pages/PublishingProcess/ChooseItemTitlePage';
import ChooseRootCategory from './Pages/PublishingProcess/ChooseRootCategory';
import ConfirmClassification from './Pages/Public/ConfirmClassification';
import ConsumerDefensePage from './Pages/Public/ConsumerDefense/ConsumerDefensePage';
import FavouritesPage from './Pages/Public/FavouritesPage/FavouritesPage';
import HelpPage from './Pages/Public/HelpPage';
import HelpPageCategory from './Pages/Public/HelpPage/HelpPageCategory';
import HomePage from "./Pages/Public/HomePage";
import InfoFinancialUserPage from './Pages/Public/InfoFinancialUserPage';
import LoginPage from './Pages/Public/LoginPage';
import MarketPointPage from './Pages/MarketPointsPage/MarketPointsPage';
import MessengerServicePage from './Pages/Public/MessengerServicePage/MessengerServicePage';
import NavigationPage from './Pages/Public/NavigationPage';
import OffersPage from './Pages/Public/OffersPage';
import OfficialStores from './Pages/Public/OfficialStoresPage';
import ProductPage from './Pages/Public/ProductPage/ProductPage';
import ProductList from './Pages/Public/ProductListPage'
import RegisterPage from './Pages/Public/RegisterPage';
import ShoppingHistoryPage from './Pages/ShoppingHistoryPage/ShoppingHistoryPage'
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage/TermsAndConditionsPage";
import UploadPhotoPage from './Pages/PublishingProcess/UploadPhotoPage';

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
    {
        "path" : "/categories",
        "element" : <CategoriesPage />,
    },
    {
        "path" : "/help/terms-and-conditions",
        "element" : <TermsAndConditionsPage />,
    },
    {
        "path" : "/help/consumer-defense",
        "element" : <ConsumerDefensePage />,
    },
    {
        "path" : "/favourites",
        "element" : <PrivateRoute><FavouritesPage /></PrivateRoute>,
    },
    {
        "path" : "/financial-user-info",
        "element" : <InfoFinancialUserPage />,
    },
    {
        "path" : "/help",
        "element" : <HelpPage />,
    },
    {
        "path" : "/help/:id",
        "element" : <HelpPageCategory />,
    },
    {
        "path" : "/login",
        "element" : <LoginPage />,
    },
    {
        "path" : "/market-points",
        "element" : <PrivateRoute><MarketPointPage /></PrivateRoute>,
    },
    {
        "path" : "/navigation",
        "element" : <NavigationPage />,
    },
    {
        "path" : "/navigation/admin",
        "element" : <AdminNavigationPage />,
    },
    {
        "path" : "/offers",
        "element" : <OffersPage />,
    },
    {
        "path" : "/product-list",
        "element" : <ProductList />,
    },
    {
        "path" : "/product/:id",
        "element" : <ProductPage />,
    },
    {
        "path" : "/register",
        "element" : <RegisterPage />,
    },
    {
        "path" : "/sell/chooseCategory",
        "element" : <PrivateRoute><ChooseRootCategory /></PrivateRoute>,
    },
    {
        "path" : "/sell/confirm-classification",
        "element" : <PrivateRoute><ConfirmClassification /></PrivateRoute>,
    },
    {
        "path" : "/shopping-history",
        "element" : <PrivateRoute><ShoppingHistoryPage /></PrivateRoute>,
    },
    {
        "path" : "/shopping/messenger",
        "element" : <PrivateRoute><MessengerServicePage /></PrivateRoute>,
    },
    {
        "path" : "/sell/item-title",
        "element" : <PrivateRoute><ChooseItemTitlePage /></PrivateRoute>,
    },
    {
        "path" : "/sell/upload-photo",
        "element" : <PrivateRoute><UploadPhotoPage /></PrivateRoute>,
    },
    {
        "path" : "/stores",
        "element" : <OfficialStores />,
    },

]

export default routes