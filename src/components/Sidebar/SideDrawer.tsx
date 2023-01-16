import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

    useEffect(() => {
        const _data = SideDrawerLink.filter(m => m.route === location.pathname);
        if (_data) {
            setNav(_data[0]);
        }
    }, []);

    return (
        <div className=' py-4 z-[100] h-screen w-[300px] bg-slate-400 absolute left-[70px]'>
            <h1 className='text-black mb-10'>Collection Tool</h1>
            {
                nav &&
                <div className='px-2'>
                    <div className={`${nav.route === location.pathname && 'bg-blue-10 text-secondary-blue-50 rounded-[20px]'} px-4`}>
                        <h1 >{nav.name}</h1>
                    </div>

                    {
                        nav?.links &&
                        nav?.links?.map((m, i) => (
                            <div>
                                <Link to={m.route}>
                                    <h1 className='text-blue-600'>
                                        {m.name}
                                    </h1>
                                </Link>


                                {
                                    m?.links &&
                                    m?.links?.map((n, j) => (
                                        <div>
                                            <Link to={n.route}>
                                                <h1 className='text-orange-300'>{n?.name}
                                                </h1>
                                            </Link>
                                            {
                                                n?.links &&
                                                n?.links?.map((value, k) => (
                                                    <div>

                                                        <Link to={value.route}>
                                                            <h1 className='text-red-500'>{value?.name}</h1>
                                                        </Link>
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