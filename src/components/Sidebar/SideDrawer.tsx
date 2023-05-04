import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../../assets/Icons';
import SideDrawerLink from '../../data/SideDrawerLink';


type navlinks = {
    name: string;
    route: string;
    isHasRoute?: boolean;
    icon: string;
    links: {
        name: string;
        route: string;
        isHasRoute?: boolean;
        links: {
            name: string;
            route: string;
            isHasRoute?: boolean;
            links: {
                name: string;
                isHasRoute?: boolean;
                route: string;
            }[];
        }[];
    }[];
}

type subLinks = {
    name: string;
    route: string;
    isHasRoute?: boolean;
    links: {
        name: string;
        route: string;
        isHasRoute?: boolean;
    }[];
}

const SideDrawer = () => {
    const location = useLocation();
    const [nav, setNav] = useState<navlinks | undefined>();
    const [navClickItem, setNavClickItem] = useState({
        mainRoute: '',
        subRoute: ''
    });

    useEffect(() => {
        const _data = SideDrawerLink.filter(m => m.route.split('/')[1] === location.pathname.split('/')[1]);
        if (_data) {
            setNav(_data[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // className={`${nav.route === location.pathname && 'bg-blue-10 text-secondary-blue-50 rounded-[20px]'} px-4`}

    const handleExpandedSubLink = (n: subLinks) => {
        if (navClickItem.subRoute) {
            setNavClickItem({
                ...navClickItem, subRoute: ''
            })
        }
        else {
            setNavClickItem({
                ...navClickItem,
                subRoute: n.route
            })
        }
    }

    return (
        <div className='px-2 py-[15px] z-[100] h-screen w-[218px] bg-white fixed left-[60px] border-r-[1px] border-[#EDF0F4]'>
            <div className='mt-[6px] mb-[54px] text-[18px] font-medium'>
                <span className='text-ct-blue-90 '>Collection </span>
                <span className='text-ct-blue-90-55%'>Tool</span>
            </div>
            {
                nav &&
                <div>
                    <div className='mb-[32px] flex items-center gap-[6px] pl-0.5'>
                        <img src={nav.icon} className='w-[20px] h-[20px]' alt="" />
                        <h1 className='text-base font-medium bg-gradient-to-r from-[#FF24FB] via-[#136EE5] to-[#0093D9] text-transparent bg-clip-text'>{nav.name}</h1>
                    </div>

                    {
                        nav?.links &&
                        nav?.links?.map((m, i) => (
                            <div key={i} className='mb-[12px]'>
                                <div className={` ${(m.route === location.pathname.split('/')[2] && location.pathname.split('/').length === 3) ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'} pl-2.5 pr-2.5`}>
                                    <div className='flex items-center gap-x-[6px]'>
                                        <div className={` h-[6px] w-[6px] ${m.route === location.pathname.split('/')[2] ? 'bg-secondary-blue-50' : 'bg-blue-gray-A50 '} rounded-[50%]`} />
                                        <div className='w-[100%]'>
                                            <Link className='w-full' to={m.route} >
                                                <h1 className='text-small leading-[27px]'>
                                                    {m.name}
                                                </h1>
                                            </Link>
                                        </div>
                                    </div>
                                    {
                                        navClickItem.mainRoute === m.route ?
                                            <button onClick={() => setNavClickItem({
                                                mainRoute: '',
                                                subRoute: ''
                                            })}>
                                                <div className=' flex justify-center items-center p-1'>
                                                    <img src={Icons.ArrowDropUp} className='w-[8px] h-[5px]' alt="" />
                                                </div>
                                            </button> :
                                            m?.links?.length > 0 && (m.route === location.pathname.split('/')[2] && location.pathname.split('/').length === 3) ?
                                                <button onClick={() => setNavClickItem({
                                                    subRoute: '',
                                                    mainRoute: m.route
                                                })}>
                                                    <div className=' flex justify-center items-center p-1'>
                                                        <img src={Icons.arrow_right_rounded_blue} className='w-[5px] h-[10px]' alt="" />
                                                    </div>

                                                </button> :
                                                ''
                                    }
                                </div>


                                {
                                    m?.links &&
                                    m?.links?.map((n, j) => (
                                        <div key={j} className={`my-[12px] ${navClickItem.mainRoute === m.route ? "block" : 'hidden'} `}>

                                            <button onClick={() => handleExpandedSubLink(n)} className={`${(n.route === location.pathname.split('/')[3] && location.pathname.split('/')?.length) === 4 ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'} pl-[21px] pr-2.5 w-full`}>
                                                <div className='flex items-center'>

                                                    <Link className='w-full' to={`${n.isHasRoute ? `${nav.route}/${m.route}/${n.route}` : `${nav.route}/${m.route}/${n.route}/${n.links[0].route}`}`} >
                                                        <h1 className='text-small leading-[27px]'>
                                                            {n.name}
                                                        </h1>
                                                    </Link>
                                                </div>
                                                {
                                                    navClickItem.subRoute === n.route ?
                                                        <button >
                                                            <div className=' flex justify-center items-center p-1'>
                                                                <img src={Icons.ArrowDropUp} className='w-[8px] h-[5px]' alt="" />
                                                            </div>

                                                        </button> :
                                                        n?.links?.length > 0 ?
                                                            <button >
                                                                <div className=' flex justify-center items-center p-1'>
                                                                    <img src={Icons.arrow_right_rounded_blue} className='w-[5px] h-[10px]' alt="" />
                                                                </div>

                                                            </button> :
                                                            ''
                                                }


                                            </button>
                                            {
                                                n?.links &&
                                                n?.links?.map((value, k) => (
                                                    <div key={k} className={`${navClickItem.subRoute === n.route ? "block" : 'hidden'} my-[12px]`}>
                                                        <div className={`text-ct-blue-60 ${value.route === location.pathname.split('/')[4] ? 'sideDrawerActiveNav' : 'sideDrawerDeactiveNav'} pl-[21px]`}>
                                                            <Link className='w-full' to={`${nav.route}/${m.route}/${n.route}/${value.route}`}>
                                                                <h1 className='text-small leading-[27px]' >{value?.name}</h1>
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