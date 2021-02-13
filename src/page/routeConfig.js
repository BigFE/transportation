import React from 'react'
import {  Login } from './index'

const Error = function () {
    return <div>404</div>
}

const Index = function () {
    return <div>首页</div>
}

const routeMap = [
    {
        path: '/',
        component: Index,
        exact: true,
    },

    {
        path: '/404',
        component: Error,
        exact: true,
    },
]

export default routeMap
