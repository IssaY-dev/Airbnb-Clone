import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img 
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            
            </Link>
            

            <div className='header__center'>
                <input type="text" placeholder='Start your search' />
                <SearchIcon className='header__icon'/>
            </div>

            <div className='header__right'>
                <Button
                    type="button"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/IssaY-dev/airbnb-clone.git';}}
                    > Source Code
                </Button>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header
