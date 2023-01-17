import { CaretUpOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../../assets/Icons';
import SideDrawerLink from '../../data/SideDrawerLink';
import { sideDrawerDT } from '../../types/common';


type navlinks = {
    name: string;
    route: string;
    icon: string;
    links: {
        name: string;
        route: string;
        links: {
            name: string;
            route: string;
            links: {
                name: string;
                route: string;
            }[];
        }[];
    }[];
}

const SideDrawer = () => {
    const location = useLocation();
    const [nav, setNav] = useState<navlinks | undefined>();
    const [navClickItem, setNavClickItem] = useState({
        mainRoute: '',
        subRoute: ''
    });

    console.log('##########', location.pathname.split('/')[2]);

    useEffect(() => {
        const _data = SideDrawerLink.filter(m => m.route.split('/')[1] === location.pathname.split('/')[1]);
        
        if (_data) {
            setNav(_data[0]);
        }
    }, []);

    // className={`${nav.route === location.pathname && 'bg-blue-10 text-secondary-blue-50 rounded-[20px]'} px-4`}

    return (
        <div className='px-[9px] py-[15px] z-[100] h-screen w-[218px] bg-white absolute left-[70px]'>
            <div className='mb-[52px] text-[18px] font-medium'>
                <span className='text-black '>Collection </span>
                <span className='text-blue-gray-A50'>Tool</span>
            </div>
            {
                nav &&
                <div>
                    <div className='mb-[32px] flex items-center gap-[6px]'>
                        <img src={Icons.lyrics} className='w-[20px] h-[20px]' alt="" />
                        <h1 className='text-[16px] font-medium bg-gradient-to-r from-[#F405FE] via-[#136EE5] to-[#EAA678] text-transparent bg-clip-text'>{nav.name}</h1>
                    </div>

                    {
                        nav?.links &&
                        nav?.links?.map((m, i) => (
                            <div key={i} className='mb-[12px]'>
                                <div className={`${m.route === location.pathname.split('/')[2] ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'}`}>
                                    <div className='flex items-center gap-x-[6px]'>
                                        <div className={`h-[6px] w-[6px] ${m.route === location.pathname.split('/')[2] ? 'bg-secondary-blue-50' : 'bg-blue-gray-A50 '} rounded-[50%]`} />
                                        <Link to={m.route} >
                                            <h1 className=''>
                                                {m.name}
                                            </h1>
                                        </Link>
                                    </div>
                                    {
                                        navClickItem.mainRoute === m.route ?
                                            <button onClick={() => setNavClickItem({
                                                mainRoute: '',
                                                subRoute: ''
                                            })}>
                                                <img src={Icons.ArrowDropUp} className='w-[8px] h-[5px]' alt="" />
                                            </button> :
                                            m?.links?.length > 0 ?
                                                <button onClick={() => setNavClickItem({
                                                    subRoute: '',
                                                    mainRoute: m.route
                                                })}>
                                                    <img src={Icons.ArrowRight} className='w-[5px] h-[10px]' alt="" />
                                                </button> :
                                                ''
                                    }
                                </div>


                                {
                                    m?.links &&
                                    m?.links?.map((n, j) => (
                                        <div className={`my-[12px] ${navClickItem.mainRoute === m.route ? "block" : 'hidden'} pl-[12px]`}>
                                            {/* <Link to={n.route}>
                                                <h1 className='text-orange-300'>{n?.name}
                                                </h1>
                                            </Link> */}
                                            <div className={`${n.route === location.pathname ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'}`}>
                                                <div className='flex items-center gap-x-[6px]'>

                                                    <Link to={n.route} >
                                                        <h1 className=''>
                                                            {n.name}
                                                        </h1>
                                                    </Link>
                                                </div>
                                                {
                                                    navClickItem.subRoute === n.route ?
                                                        <button onClick={() => setNavClickItem({
                                                            ...navClickItem, subRoute: ''
                                                        })}>
                                                            <img src={Icons.ArrowDropUp} className='w-[8px] h-[5px]' alt="" />
                                                        </button> :
                                                        n?.links?.length > 0 ?
                                                            <button onClick={() => setNavClickItem({
                                                                ...navClickItem,
                                                                subRoute: n.route
                                                            })}>
                                                                <img src={Icons.ArrowRight} className='w-[5px] h-[10px]' alt="" />
                                                            </button> :
                                                            ''
                                                }


                                            </div>
                                            {
                                                n?.links &&
                                                n?.links?.map((value, k) => (
                                                    <div className={`${navClickItem.subRoute === n.route ? "block" : 'hidden'} pl-[16px]`}>
                                                        <div className={`${value.route === location.pathname ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'}`}>
                                                            <Link to={value.route}>
                                                                <h1 >{value?.name}</h1>
                                                            </Link>

                                                        </div>


                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default SideDrawer;