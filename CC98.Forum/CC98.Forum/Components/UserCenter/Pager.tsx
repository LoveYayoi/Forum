﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component<UserCenterPageCountProps> {
    render() {
        let elements = [], i;
        const currentStyle = {
            backgroundColor: '#ccc',
            cursor: 'default'
        };

        if (this.props.totalPage <= 7) {
            i = this.props.totalPage;
            while (i--) {
                elements.unshift(i + 1);
            }
            elements = elements.map((item, index) => {
                return <li><Link to={`${this.props.href}${item}`}><button type="button" disabled={item == this.props.currentPage} style={(item == this.props.currentPage) ? currentStyle : {}}>{item}</button></Link></li>
            });
        } else if (this.props.currentPage - 1 <= 3) {
            i = 7;
            while (i--) {
                elements.unshift(i + 1);
            }
            elements = elements.map((item, index) => (
                <li><Link to={`${this.props.href}${item}`}><button type="button" disabled={item == this.props.currentPage} style={(item == this.props.currentPage) ? currentStyle : {}}>{item}</button></Link></li>
            ));

            elements.push(<li><button disabled>···</button></li>);
            elements.push(<li><Link to={`${this.props.href}${this.props.totalPage}`}><button type="button">{this.props.totalPage}</button></Link></li>);
        } else if (this.props.totalPage - this.props.currentPage <= 3) {
            i = 7;
            while (i--) {
                elements.unshift(i - 6 + this.props.totalPage);
            }
            elements = elements.map((item, index) => (
                <li><Link to={`${this.props.href}${item}`}><button type="button" disabled={item == this.props.currentPage} style={(item == this.props.currentPage) ? currentStyle : {}}>{item}</button></Link></li>
            ));

            elements.unshift(<li><button disabled>···</button></li>);
            elements.unshift(<li><Link to={`${this.props.href}1`}><button type="button">{1}</button></Link></li>);
        } else {
            i = 7;
            while (i--) {
                elements.unshift(i - 3 + this.props.currentPage);
            }

            elements = elements.map((item, index) => (
                <li><Link to={`${this.props.href}${item}`}><button type="button" disabled={item == this.props.currentPage} style={(item == this.props.currentPage) ? currentStyle : {}}>{item}</button></Link></li>
            ));

            elements.push(<li><button disabled>···</button></li>);
            elements.push(<li><Link to={`${this.props.href}${this.props.totalPage}`}><button type="button">{this.props.totalPage}</button></Link></li>);
            elements.unshift(<li><button disabled>···</button></li>);
            elements.unshift(<li><Link to={`${this.props.href}1`}><button type="button">{1}</button></Link></li>);
        }
        if (!this.props.hasTotal && this.props.currentPage != this.props.totalPage) {
            elements.push(<li><button disabled>···</button></li>);
        }
        return (<div id="userCenterPageCount"><ul>
            {elements}
        </ul></div>);
    }
}

class UserCenterPageCountProps {
    currentPage: number;
    totalPage: number;
    href: string;
    hasTotal: boolean;
}