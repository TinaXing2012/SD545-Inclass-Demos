import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import News from "../pages/HomeNews"
import Messages from "../pages/HomeMessages"

export default [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'messages',
                element: <Messages />
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]