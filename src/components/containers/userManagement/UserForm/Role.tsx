import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { boolean } from 'yup';
import { RoleData } from '../../../../data/userManagement/UserManagementData';

const Role = ({ formik }: { formik: any }) => {

    const [isSpeaker, setIsSpeaker] = useState<string>('');

    return (
        <div>
            <FormGroup row>
                {RoleData.map((value, i) => (
                    <div key={i} className={`border-[1px] pl-[16px] border-ct-blue-05 rounded-tl-[7px] w-[196px] h-[46px] bg-[#FFFFFF]`}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={((formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")) ? <div className='h-4 w-4 bg-blue-gray-40'></div> : undefined}
                                    disabled={(formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")}
                                    name={value}
                                    checked={formik.values.role.includes(value)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            if (value === "Speaker") {
                                                formik.setFieldValue("role", [value]);
                                                setIsSpeaker('Speaker');
                                            } else {
                                                formik.setFieldValue("role", [...formik.values.role.filter((item: string) => item !== "Speaker"), value]);
                                                setIsSpeaker('not speaker')
                                            }
                                        } else {
                                            formik.setFieldValue("role", formik.values.role.filter((item: string) => item !== value));
                                        }
                                    }}

                                />
                            }
                            label={<h1 className={`text-small font-medium ${formik.values.role.includes(value) ? 'text-secondary-blue-50' : ((formik.values.role.length > 0 && !formik.values.role.includes("Speaker") && value === "Speaker") || (formik.values.role.includes("Speaker") && value !== "Speaker")) ? 'text-blue-gray-45' : 'text-blue-gray-75 '} `}>{value}</h1>}
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