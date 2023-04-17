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
        <div className='w-[265px] h-[43px] flex gap-x-[18px]'>
            <div>
                {
                    gender ?
                    <RoleImage role={gender?.toLocaleLowerCase() === 'male' ? 'speaker' : 'speakerFemale'} height='h-9' width='w-9' />
                    :
                    <RoleImage role={primaryRole ? primaryRole : ''} height='h-9' width='w-9' />
                }
                {/* <img className='w-[36px] h-[36px]' src={Icons.Avatar} alt="" /> */}
            </div>
            <div>
                <h1 className='text-ct-blue-95 tex-[18px] font-medium'>{name}</h1>
                <div className='flex'>
                    <p className='text-ct-blue-90-70% text-small'>{role?.join(', ')} </p>
                </div>
            </div>
        </div>
    );
};

export default PersonalTitle;