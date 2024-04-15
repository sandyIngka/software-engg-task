import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {

    return (
        <div className='container'  style={{ paddingTop: 40 + "px" }}>
            <ul className="navbar-nav mr-auto">
                <li key="nav-1" className="nav-item">
                    <Link className={'nav-link'} to="/article/import">Import Articles</Link>
                </li>
                <li key="nav-1" className="nav-item">
                    <Link className={'nav-link'} to="/product/import">Import Products</Link>
                </li>
                <li key="nav-1" className="nav-item">
                    <Link className={ 'nav-link'} to="/product/list">Product List</Link>
                </li>
            </ul>
        </div>
    )
}

export default DashBoard;