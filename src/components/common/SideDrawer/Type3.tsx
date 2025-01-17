import { Drawer } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Icons from '../../../assets/Icons';
import ScriptMetaData from './ScriptMetaData';
import './type1DrawerStyle.css'

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    drawerData: any
}

const Type3 = ({ open, setOpen, drawerData }: Props) => {

    const onClose = () => {
        setOpen(false);
        setMetaDataOpen(false)
    };
    const [metaDataOpen, setMetaDataOpen] = useState<boolean>(false)


    return (
        <div>
            <Drawer
                title={null}
                placement="right"
                onClose={onClose}
                open={open}
                closeIcon={null}
                width={477}
            >

                {
                    metaDataOpen ?
                        <ScriptMetaData
                            setMetaDataOpen={setMetaDataOpen}
                            drawerData={[]}
                        />
                        :
                        <div className='animate-fadeIn'>
                            <div className='p-5 bg-ct-blue-05 border-b-ct-blue-20'>
                                <div className="flex w-full justify-between items-center">
                                    <div>
                                        <p className="text-xs font-normal text-ct-blue-90-70%">Script Title</p>
                                        <p className='text-heading-6 font-semibold text-ct-blue-95 mt-2'>বেগুনি প্রজাপতি</p>
                                    </div>
                                    <div>
                                        <button
                                            className='px-4 py-2 text-small font-medium text-ct-blue-60 rounded-md hover:bg-white'
                                        >
                                            Edit
                                        </button>
                                    </div>

                                </div>

                                <div className='flex justify-between my-4 w-full items-center'>
                                    <div>
                                        <p className='text-xxs font-normal text-blue-gray-75'>Script ID</p>
                                        <p className='text-small font-medium text-[#780595]'>226</p>
                                    </div>
                                    <div>
                                        <p className='text-xxs font-normal text-blue-gray-75'>Data Source</p>
                                        <p className='text-small font-medium text-[#059514]'>Lecture</p>
                                    </div>
                                    <div>
                                        <p className='text-xxs font-normal text-blue-gray-75'>Script Domain</p>
                                        <p className='text-small font-medium text-[#956105]'>Natural and Pure Science</p>
                                    </div>


                                    <img
                                        onClick={() => setMetaDataOpen(true)}
                                        className='w-[30px] h-[30px] cursor-pointer px-2 rounded-full animate-fadeIn hover:bg-slate-300'
                                        src={Icons.moreIcon}
                                        alt=""
                                    />


                                </div>

                            </div>
                            {/* body */}
                            <div className='px-5 pt-5'>
                                <div className='flex w-full justify-end'>
                                    <div className='flex gap-4 items-center'>
                                        <div className='flex gap-2 items-center animate-fadeIn px-2 py-2 cursor-pointer border border-white hover:border-gray-300 rounded-[4px]'>
                                            <img
                                                className='w-[13px] h-[13px]'
                                                src={Icons.fileDownload}
                                                alt="" />
                                            <p className='text-small font-medium text-[#136EE5]'>Download Script</p>
                                        </div>
                                        <img
                                            className='w-[18px] h-[18px] cursor-pointer'
                                            src={Icons.contentCopy}
                                            alt=""
                                        />

                                    </div>
                                </div>
                                {/* content */}
                                <div className='pt-5'>
                                    <div className='custom-script-body'>
                                        <p className='mr-3 text-base font-normal text-ct-blue-90'>
                                            শহরের মাথা ছাড়িয়ে উঁচু বেদির ওপরে সুখী রাজকুমারের প্রতিমূর্তি দাঁড় করানো ছিল। মূর্তিটার সারা গায়ে পাতলা সোনার পাত দিয়ে মোড়া। তার চোখ দুটি ছিল জ্বলজ্বলে দুটি নীলকান্ত মণি। তার তলোয়ারের বাঁটের উপরে জ্বলজ্বল করছিল একটা বেশ বুড়ো লাল রঙের রুবি। সবাই এই মূর্তিটি দেখে খুব প্রশংসা করত। চারুশিল্পের সমঝদার হিসেবে নাম কিনতে চাইতেন এমন একজন বিশিষ্ট ব্যক্তি শহরের কাউন্সিলার। তিনি বললেন, মূর্তিটা ঠিক বায়ু-নিশানের মতোই সুন্দর। পাছে লোকে তাঁর কথা অবাস্তব বলে মনে করে অথবা খোদ তাঁকেই অবাস্তব প্রকৃতির মানুষ হিসেবে ধরে নেয়, এই ভয়ে তিনি আরও যোগ করলেন, তবে ততটা প্রয়োজনীয় নয়। একটা বাচ্চা ছেলে চাঁদ ধরার জন্য কাঁদছিল। তাকে তার বিজ্ঞ মা বললেন, তুমি সুখী রাজকুমারের মতো হতে পার না কেন? কোনো কিছু পাওয়ার জন্য তিনি কখনো কান্নাকাটি করতেন না। জীবনে হতাশ হয়েছে এরকম কোনো মানুষ এই অদ্ভুত সুন্দর মূর্তিটির দিকে তাকিয়ে বলতো, জগতে যে একজন মানুষও সুখী হতে পেরেছে এটা জেনে আমি আনন্দিত। চকচকে পরিষ্কার পোশাক পরে গির্জা থেকে বেরিয়ে এসে ছেলেরা বলতো, দেখতে একেবারে দেবদূতের মতো। অঙ্কের শিক্ষক জিজ্ঞাসা করতেন, তোমরা কী করে জানলে? দেবদূত তো তোমরা কোনোদিন দেখনি? ছেলেরা বলতো, স্বপ্নে দেখেছি। এই কথা শুনে গম্ভীর হয়ে শিক্ষক মশাই ভ্রু কুঞ্চিত করতেন; কারণ, ছেলেদের স্বপ্ন দেখাটা তিনি বেশি পছন্দ করতেন না। একদিন রাত্রিতে একটা ছোট দোয়েল পাখি শহরের উপর দিয়ে উড়ে যাচ্ছিল। প্রায় ছ’সপ্তাহ আগে তার বন্ধুরা ইজিপ্টে উড়ে গিয়েছে। কিন্তু সে পিছিয়ে পড়েছিল। তার কারণ, সে একটি সুন্দর শরগাছের সঙ্গে প্রেমে পড়েছিল। বেশ বড়ো একটা বেগুনি প্রজাপতির পিছনে ধাওয়া করার উদ্দেশ্যে সে একদিন যখন নদীর জলের উপর দিয়ে উড়ে যাচ্ছিল এমন সময় এক প্রথম বসন্তে তার সঙ্গে শরগাছটির দেখা হয়। শরগাছের সরু কোমর দেখে সে এতই মুগ্ধ হয়ে পড়েছিল যে তার সঙ্গে আলাপ করার জন্য সে থেমে গেল। দোয়েলটি সোজাসুজি কথা বলতে ভালোবাসত। তাই সে জিজ্ঞাসা করল, তোমাকে কি আমি ভালোবাসব? শরগাছটি সম্মতিসূচক মাথা নীচু করল। তাই দেখে সে তখন নদীর উপরে রূপালি ঢেউ তুলে তার চারপাশে ঘুরে ঘুরে উড়তে লাগল। এভাবে সে তার ভালোবাসা জানালো; আর এটা চলল সারা গ্রীষ্মকাল ধরে। অন্য সব দোয়েল পাখিরা ঠাট্টা করল তাকে, এই ভালোবাসা দেখে হাসি পাচ্ছে আমাদের। মেয়েটার কথার কোনো দাম নেই। আত্মীয়-স্বজনও ওর অনেক। আর নদীটা যে শরগাছে বোঝাই ছিল সেকথা তো মিথ্যে নয়। তারপরে, শরৎকাল আসার সঙ্গে সঙ্গে তারা সবাই উড়ে গেল। বন্ধুরা সবাই চলে গেলে তার বড়ো একা লাগলো। তার প্রেমিকাকে তার আর যেন ভালো লাগলো না। সে বলল ও কোনো কথা বলতে পারে না। তাছাড়া ও বড়ো ঢঙি। বাতাস একবার বইতে শুরু করলেই ব্যস। ও তার সঙ্গে অমনি ঢঙ করতে শুরু করে দেবে। আর কথাটা সত্যিই। যখনই বাতাস বইত তখনই ও সুন্দরভাবে কোমর দুলিয়ে তাকে অভিবাদন জানাত। সে বলে গেল, স্বীকার করছি ও ঘরোয়া। কিন্তু আমার নানা দেশ বেড়াতে ভালো লাগে; আর আমার স্ত্রীরও সেই রকম বেড়াতে ভালো লাগা উচিত। সে একবার শেষবারের মতো জিজ্ঞাসা করল তুমি কি আমার সঙ্গে আসবে? কিন্তু শরটি মাথা নেড়ে বলল, না। ঘরে থাকার মোহ তার এত বেশি! সে কান্নার সুরে বলল, এতদিন তুমি আমার সঙ্গে ছলনা করেছ। আমি পিরামিডের দিকে উড়ে চললাম। বিদায়! এভাবে সে উড়ে গেল। সারা দিন ধরেই সে উড়েছে। রাত্রিতে সে শহরে এসে হাজির হলো। সে বলল, কোথায় আমি থাকবো? আশা করি এই শহরে থাকার মতো জায়গা নিশ্চয় কোথাও রয়েছে। তারপরেই লম্বা বেদির ওপরে সে সেই মূর্তিটা দেখতে পেল। সে বলল, আমি এখানেই থাকবো। বেশ সুন্দর জায়গা পরিষ্কার বাতাসও রয়েছে প্রচুর। এই বলে সে সুখী রাজকুমারের দুটি পায়ের মাঝখানে এসে বসে পড়ল। চারপাশে তাকিয়ে দেখেই সে বলল, আমার শোয়ার ঘরটা তো দেখছি সোনার। এই বলেই সে ঘুমানোর ব্যবস্থা করল। কিন্তু যখনই সে তার পালকের ভেতরে মাথাটা ঢুকিয়ে দিয়েছে তখনই বড়ো এক ফোঁটা জল তার গায়ে এসে পড়ল। সে প্রায় চিৎকার করে উঠল, অবাক কাণ্ড! আকাশে এক ফোঁটা মেঘ নেই। নক্ষত্রগুলি বেশ পরিচ্ছন্ন আর উজ্জ্বল। তবু বৃষ্টি হচ্ছে? উত্তর ইউরোপের আবহাওয়া সত্যিই বড়ো ভয়ংকর। শরগাছ বৃষ্টি বড়ো ভালোবাসত। সেটা তার স্বার্থপরতা।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}

            </Drawer>
        </div>
    );
};

export default Type3;