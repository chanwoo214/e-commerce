import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = [
        "Women",
        "Divided",
        "Men",
        "Baby",
        "Kids",
        "H&M Home",
        "Sale",
        "Sustainability",
    ];
    return (
        <div>
            <div>
                <div class="login-button">
                    <FontAwesomeIcon icon={faUser} />
                    <div>Login</div>
                </div>
            </div>

            <div className='nav-section'>
                <img width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ExBRfl1tbwJQJkK8ggXFHmrGMP24ZLmGDA&s"></img>
            </div>


            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>


                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" 
                    placeholder='Search'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar