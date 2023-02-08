import { createBrowserRouter, RouteObject } from "react-router-dom"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import ActivityDetails from "../../features/activities/details/ActivityDetails"
import ActivityFrom from "../../features/activities/form/ActivityFrom"
import HomePage from "../../features/activities/home/HomePage"
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
        ]
    }
]
export const router = createBrowserRouter(routes)