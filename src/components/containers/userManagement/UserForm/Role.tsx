import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FormikValues } from 'formik';
import { RoleData } from '../../../../data/userManagement/UserManagementData';

const Role = ({ formik }: { formik: FormikValues }) => {

    // const [isSpeaker, setIsSpeaker] = useState<string>('');

    return (
        <div>
            <h3 className='text-blue-gray-80 text-xxs font-medium mb-2'>Select Role <span className='text-secondary-red-50'>*</span></h3>
            <FormGroup row>
                {RoleData.map((value, i) => (
                    <div key={i} className={`border-[1px] pl-[16px] border-ct-blue-05 rounded-tl-[7px] w-[196px] h-[46px] bg-[#FFFFFF]`}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={((formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")) ? <div className='h-4 w-4 bg-blue-gray-40'></div> : undefined}
                                    disabled={(formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")}
                                    name={value}
                                    checked={formik.values.role.some((role: any) => role.toLowerCase() === value.toLowerCase())}
                                    // formik.values.role.some((role: any) => role.toLowerCase() === value.toLowerCase())
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            if (value === "Speaker") {
                                                formik.setFieldValue("role", [value]);
                                                // setIsSpeaker('Speaker');
                                            } else {
                                                formik.setFieldValue("role", [...formik.values.role.filter((item: string) => item !== "Speaker"), value]);
                                                // setIsSpeaker('not speaker')
                                            }
                                        } else {
                                            formik.setFieldValue("role", formik.values.role.filter((item: string) => item !== value));
                                        }
                                    }}

                                />
                            }
                            // label={<h1 className={`text-small font-medium ${formik.values.role.some((role: any) => role.toLowerCase() === value.toLowerCase()) ? 'text-secondary-blue-50' : ((formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")) ? 'text-blue-gray-45' : 'text-blue-gray-75 '} `}>{value}</h1>}
                            label={<h1 className={`text-small ${formik.values.role.some((role: any) => role.toLowerCase() === value.toLowerCase()) ? 'text-secondary-blue-50 font-medium' : ((formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")) ? 'text-blue-gray-45 ' : 'text-blue-gray-75 '} `}>{value}</h1>}
                        />
                    </div>
                ))}



            </FormGroup>

            <div>
                {formik.touched.role && formik.errors.role ? (
                    <div className='text-red-600 text-xxs'>{formik.errors.role}</div>
                ) : null}
            </div>
        </div>
    );
};

export default Role;