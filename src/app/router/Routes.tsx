import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import ActivityDetails from "../../features/activities/details/ActivityDetails"
import ActivityFrom from "../../features/activities/form/ActivityFrom"
import NotFound from "../../features/errors/NotFound"
import ServerError from "../../features/errors/ServerError"
import TestErrors from "../../features/errors/TestError"
import App from "../layout/App"

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityFrom key='create' /> },
            { path: 'manage/:id', element: <ActivityFrom key='manage' /> },
            { path: 'errors', element: <TestErrors /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
]
export const router = createBrowserRouter(routes)