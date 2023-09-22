import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: 'anasayfa'
    },
    {
        path: '/explore',
        element: 'explore'
    },
    {
        path: '/notifications',
        element: 'bildirim'
    }
]);

export default routes;