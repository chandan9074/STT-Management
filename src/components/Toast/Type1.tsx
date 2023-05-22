import Icons from '../../assets/Icons';
interface Props {
    massage: string;
}


const Type1 = ({ massage }: Props) => {


    // const commonContext = useContext(CommonContext);

    // const { massages, iconSrc, open, setOpen } = props
    // const { iconSrc} = props


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         commonContext.handleToast(false);
    //     }, 3000);
    //     return () => clearTimeout(timer);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [commonContext.toastOpen]);



    return (
        <div className='flex items-center gap-x-2.5 justify-center py-2.5 px-6'>
            <img src={Icons.like_emoji} alt='like' />
            <span className='text-small font-medium text-white'>{massage}</span>
        </div>
    );
};

export default Type1;