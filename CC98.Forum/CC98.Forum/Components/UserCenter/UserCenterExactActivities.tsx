﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import { UserCenterExactActivitiesPosts } from './UserCenterExactActivitiesPosts';
/**
 * 用户中心主页近期动态组件
 */
export class UserCenterExactActivities extends React.Component {
    render() {
        return (
            <div className="user-activities">
                <p>近期动态</p>
                <UserCenterExactActivitiesPosts />
            </div>
        );
    }
}