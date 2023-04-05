import { Dispatch, SetStateAction, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../../../assets/Icons';
import { EDIT_SCRIPT_PATH } from '../../../../helpers/Slug';
import { PDF } from '../../../PDF';
import 'react-toastify/dist/ReactToastify.css';
import { callingToast } from '../../../../helpers/Utils';

interface Props {
    setMetaDataOpen: Dispatch<SetStateAction<boolean>>;
    drawerData: any
}
const ScriptsDetails = ({ drawerData, setMetaDataOpen }: Props) => {

    // const scriptContext = useContext(ScriptContext);

    const textRef = useRef<HTMLParagraphElement>(null);
    // const [open, setOpen] = useState<boolean>(false);

    function copyToClipboard(text: string) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    const handleCopyClick = () => {
        if (textRef.current) {
            // navigator.clipboard.writeText(textRef.current.innerText);
            copyToClipboard(textRef.current.innerText);
            callingToast("Copied")
        }
    };
    return (
        <div className='animate-fadeIn'>
            <div className='p-5 bg-ct-blue-05 border-b-ct-blue-20'>
                <div className="flex w-full justify-between items-center">
                    <div>
                        <p className="text-xs font-normal text-ct-blue-90-70%">Script Title</p>
                        <p className='text-heading-6 font-semibold text-ct-blue-95 mt-1'>{drawerData.title}</p>
                    </div>
                    <div>
                        <Link to={`${EDIT_SCRIPT_PATH}/${drawerData?.id}`}>
                            <button
                                className='px-4 py-2 text-small font-medium text-ct-blue-60 rounded-md hover:bg-white'
                            >
                                Edit
                            </button>
                        </Link>

                    </div>

                </div>

                <div className='flex justify-between gap-x-3 mt-4 mb-1 w-full items-start'>
                    <div>
                        <p className='text-xxs font-normal text-blue-gray-75'>Script ID</p>
                        <p className='text-small font-medium text-[#780595]'>{drawerData.id}</p>
                    </div>
                    <div className=''>
                        <p className='text-xxs font-normal text-blue-gray-75 w-[70px]'>Data Source</p>
                        <p className='text-small font-medium text-[#059514]'>{drawerData.distributionSource}</p>
                    </div>
                    <div className=''>
                        <p className='text-xxs font-normal text-blue-gray-75 w-[160px]'>Script Domain</p>
                        <p className='text-small font-medium text-[#956105]'>{drawerData.domain}</p>
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
                        {/* <div className='flex gap-2 items-center animate-fadeIn px-2 py-2 cursor-pointer border border-white hover:border-gray-300 rounded-[4px]'>
                            <img
                                className='w-[13px] h-[13px]'
                                src={Icons.fileDownload}
                                alt="" />
                            <p className='text-small font-medium text-[#136EE5]'>Download Script</p>
                        </div> */}
                        <PDF.Type2 data={drawerData} />
                        <img
                            className='w-[18px] h-[18px] cursor-pointer'
                            src={Icons.contentCopy}
                            alt=""
                            onClick={handleCopyClick}
                        />

                    </div>
                </div>
                {/* content */}
                <div className='pt-5'>
                    <div className='custom-script-body'>
                        <p
                            ref={textRef}
                            className='mr-3 text-base font-normal text-ct-blue-90'
                        >
                            {drawerData.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScriptsDetails;