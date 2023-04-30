import Icons from '../../../../assets/Icons';
import RoleImage from '../../../Image/RoleImage';

type Props = {
    role: string[] | undefined;
    primaryRole?: string | undefined;
    name: string | undefined;
    gender?: string | undefined;
    isSpeaker?: boolean;
}

const PersonalTitle = ({ name, primaryRole, role, gender }: Props) => {

    return (
        // <div className='w-[265px] h-[43px] flex gap-x-[18px]'>
        <div className='w-full h-[43px] flex gap-x-[18px]'>
            <div>
                {
                    gender ?
                        <RoleImage role={gender?.toLocaleLowerCase() === 'male' ? 'speaker' : 'speakerFemale'} height='h-9' width='w-9' />
                        :
                        // <RoleImage role={primaryRole ? primaryRole : ''} height='h-9' width='w-9' />
                        primaryRole ?
                            <RoleImage role={primaryRole} height='h-9' width='w-9' />
                            :
                            <img className='w-10 h-10' src={Icons.UserGray} alt="" />

                }
                {/* <img className='w-[36px] h-[36px]' src={Icons.Avatar} alt="" /> */}
            </div>
            <div className='flex flex-col justify-center'>
                {
                    name !== '' ?
                        <h1 className='text-ct-blue-95 tex-[18px] font-medium'>{name}</h1>
                        :
                        <img className='w-[162px] h-2 mb-1' src={Icons.Rectangle2} alt="" />
                }
                <div className='flex item'>
                    {
                        role?.length !== 0 ?
                        <p className='text-ct-blue-90-70% text-small'>{role?.join(', ')} </p> 
                        :
                        <img className='w-[90px] h-2 mt-3' src={Icons.Rectangle1} alt="" />
                    }
                </div>
            </div>
        </div>
    );
};

export default PersonalTitle;