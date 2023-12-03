import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faShop, faUser,faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className='bg-orange-300'>
                <div className="container mx-auto py-3 navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                                <li><a>Home</a></li>
                                <li>
                                    <a>Category</a>
                                    <ul className="p-2">
                                        <li><a>Grocery</a></li>
                                        <li><a>Fruits</a></li>
                                        <li><a>Foods</a></li>
                                    </ul>
                                </li>
                                <li><a>Service</a></li>
                                <li><a>Contact</a></li>
                                <li><a>About us</a></li>
                            </ul>
                        </div>
                        <a className=" normal-case text-xl md:block lg:block hidden"><FontAwesomeIcon icon={faShop} />Diu Campus Store</a>
                    </div>
                    {/* <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2 text-base">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Category</summary>
                                    <ul className="p-2 z-10">
                                        <li><a>Grocery</a></li>
                                        <li><a>Fruits</a></li>
                                        <li><a>Foods</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Service</a></li>
                            <li><a>Contact</a></li>
                            <li><a>About us</a></li>
                        </ul>
                    </div> */}
                    <div className="navbar-center">
                    <input type="text" placeholder="Search your product here" className="input input-bordered input-accent text-center w-[200px] lg:w-[800px]" /><FontAwesomeIcon icon={faSearch} />
                    </div>
                    {/* navbar icons carts and profile container  */}
                    <div className="navbar-end">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">0</span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="../../../images/carosel1.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge ">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20  rounded-lg">
                <div className="carousel w-full rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <div className="hero rounded-lg h-[650px]" style={{ backgroundImage: 'url(../../../../public/images/grocery1.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold"> Use GROCERY10 to Get <span className='text-yellow-300'>10%</span> Off</h1>
                                    <p className="mb-5 text-xl">Freshness you can taste.The store are like treasure hunts, you never know what you’ll find.Grocery shopping made easy.</p>
                                    <button className="btn bg-orange-300">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(../../../../public/images/slider2.jpg)' }}>
                            <div className="hero-overlay bg-opacity-30"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Get<span className='text-yellow-300'> 10% Off <br /> </span>On Fruits</h1>
                                    <p className="mb-5 text-xl">Freshness you can taste.The store are like treasure hunts, you never know what you’ll find.Grocery shopping made easy.</p>
                                    <button className="btn bg-orange-300">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(../../../../public/images/slider3.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Catch Of the <span className='text-yellow-300'> Day!! </span></h1>
                                    <p className="mb-5 text-xl">Freshness you can taste.The store are like treasure hunts, you never know what you’ll find.Fish shopping made easy.</p>
                                    <button className="btn bg-orange-300">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="hero  h-[650px]" style={{ backgroundImage: 'url(../../../../public/images/slider4.jpg)' }}>
                            <div className="hero-overlay bg-opacity-40"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Always Keep Your <span className='text-yellow-300'>Stationary </span>Closer</h1>
                                        <p className="mb-5 text-xl">The store are like treasure hunts, you never know what you’ll find.All your need meets here.</p>
                                        <button className="btn bg-orange-300">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;