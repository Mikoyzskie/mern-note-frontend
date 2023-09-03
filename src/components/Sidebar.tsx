import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch, FiSettings } from 'react-icons/fi';
import { BiSolidSquareRounded, BiTrashAlt } from 'react-icons/bi';
import { MdOutlineUpcoming, MdCalendarToday, MdOutlineDarkMode, MdAdd, MdOutlineLightMode, MdOutlineEdit, MdClose } from 'react-icons/md';
import { CgCalendarToday } from 'react-icons/cg';
import { FaRegStickyNote } from 'react-icons/fa';
import { PiSignOut } from 'react-icons/pi';

const Sidebar = () => {

    const [active, setActive] = useState('');

    function handleActive(value: string) {
        setActive(value);
    }


    return (
        <div className='sidebar-container rounded rounded-md sm:flex flex-col justify-between mr-10 xl:max-w-[400px] lg:max-w-[300px] md: max-w-[275px] hidden bottom-20px'>
            <div className="sidebar-container__main">
                <div className="sidebar-container__header flex justify-between mb-4 items-center">
                    <div className='flex items-center gap-2'>
                        <img src="./cats/cat1.png" alt="cat avatar" height={"40px"} width={"40px"} />
                        <h3 className='text-lg'>Hello, User!</h3>
                    </div>
                    <GiHamburgerMenu className="collapse__button text-xl hover:cursor-pointer" />
                </div>
                <div className="sidebar-container__search flex items-center border p-2 rounded-lg mb-5">
                    <label htmlFor="search-input"></label>
                    <FiSearch className="mr-3 font-bold" />
                    <input type="text" className="search-input placeholder:text-sm placeholder:font-bold" id='search-input' placeholder='Search' />
                </div>
                <div className="sidebar-container__content mb-4">
                    <span className='title text-xs font-bold'>TASKS</span>
                    <ul className='content-list mt-2'>
                        <li onClick={() => handleActive("sticky")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md ${active == "sticky" && "active"}`}>
                            <div className="item__name flex items-center"><FaRegStickyNote className="mr-2" />Sticky Wall</div>
                            <span className='text-xs'>12</span>
                        </li>
                        <li onClick={() => handleActive("upcoming")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md ${active == "upcoming" && "active"}`}>
                            <div className="item__name flex items-center"><MdOutlineUpcoming className="mr-2" />Upcoming</div>
                            <span className='text-xs'>12</span>
                        </li>
                        <li onClick={() => handleActive("today")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md ${active == "today" && "active"}`}>
                            <div className="item__name flex items-center"><CgCalendarToday className="mr-2" />Today</div>
                            <span className='text-xs'>12</span>
                        </li>
                        <li onClick={() => handleActive("calendar")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md ${active == "calendar" && "active"}`}>
                            <div className="item__name flex items-center"><MdCalendarToday className="mr-2" />Calendar</div>
                            <p className='text-xs'>Coming Soon...</p>
                        </li>

                    </ul>
                </div>
                <hr className='mb-4' />
                <div className="sidebar-container__content mb-4">
                    <span className='title text-xs font-bold'>LISTS</span>
                    <ul className='content-list mt-2'>
                        <li onClick={() => handleActive("personal")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md group ${active == "personal" && "active"}`}>
                            <div className="item__name flex items-center"><BiSolidSquareRounded className="mr-2" style={{ fill: "#ff6b6b" }} />Personal</div>
                            <div className="action__container flex transition-all duration-0 gap-2 invisible group-hover:visible">
                                <MdOutlineEdit className="action__container-button text-lg hover:scale-110" />
                                <BiTrashAlt className="action__container-button text-lg hover:scale-110" />
                            </div>

                        </li>
                        <li onClick={() => handleActive("work")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md group ${active == "work" && "active"}`}>
                            <div className="item__name flex items-center"><BiSolidSquareRounded className="mr-2" style={{ fill: "#66d9e8" }} />Work</div>
                            <div className="action__container flex transition-all duration-0 gap-2 invisible group-hover:visible">
                                <MdOutlineEdit className="action__container-button text-lg hover:scale-110" />
                                <BiTrashAlt className="action__container-button text-lg  hover:scale-110" />
                            </div>
                        </li>
                        <li onClick={() => handleActive("chores")} className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md group ${active == "chores" && "active"}`}>
                            <div className="item__name flex items-center"><BiSolidSquareRounded className="mr-2" style={{ fill: "#ffd43b" }} />Chores</div>
                            <div className="action__container flex transition-all duration-0 gap-2 invisible group-hover:visible">
                                <MdOutlineEdit className="action__container-button text-lg hover:scale-110" />
                                <BiTrashAlt className="action__container-button text-lg hover:scale-110" />
                            </div>
                        </li>
                        <li className={`content-list__item py-2 px-4 flex justify-between items-center hover:cursor-pointer rounded-md`}>
                            <div className="item__name flex items-center"><MdAdd className="mr-2" />Add List</div>
                        </li>
                    </ul>
                </div>
                <hr className='mb-4' />
                <div className="sidebar-container__tags mb-4">
                    <span className='text-xs font-bold'>TAGS</span>
                    <ul className='content-list flex flex-row items-center mt-2 gap-2'>
                        <li className='bg-[#ffdada] py-1 px-3 rounded-md hover:cursor-pointer hover:bg-[#FFC2C2] flex gap-2 items-center group'>
                            Tag 1
                            <MdClose className="hidden group-hover:block hover:scale-125" />
                        </li>
                        <li className='bg-[#d1eaed] py-1 px-3 rounded-md hover:cursor-pointer hover:bg-[#B6DEE2] flex gap-2 items-center group'>
                            Tag 2
                            <MdClose className="hidden group-hover:block hover:scale-125" />
                        </li>
                        <li className='add__tag flex items-center hover:cursor-pointer'><MdAdd className="mr-2" />Add Tag</li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-container__footer">
                <ul>
                    <li className='py-1 hover:cursor-pointer w-fit flex items-center'><MdOutlineDarkMode className="mr-2" />Dark Mode</li>
                    <li className='py-1 hover:cursor-pointer w-fit flex items-center'><MdOutlineLightMode className="mr-2" />Light Mode</li>
                    <li className='py-1 hover:cursor-pointer w-fit flex items-center'><FiSettings className="mr-2" />Settings</li>
                    <li className='py-1 hover:cursor-pointer w-fit flex items-center'><PiSignOut className="mr-2" />Sign Out</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;