import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Field, FormikProvider } from 'formik';
import React from 'react';
import { RoleData } from '../../../../data/userManagement/UserManagementData';

const Role = ({ formik }: { formik: any }) => {
    return (
        <div>
            <FormGroup row>
                {RoleData.map((value, i) => (
                    <div key={i} className={`border-[1px] pl-[16px] border-ct-blue-05 rounded-tl-[7px] w-[196px] h-[46px] bg-[#FFFFFF]`}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name={value}
                                    checked={formik.values.role.includes(value)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            formik.setFieldValue("role", [...formik.values.role, value]);
                                        } else {
                                            formik.setFieldValue("role", formik.values.role.filter((item: any) => item !== value));
                                        }
                                    }}
                                />
                            }
                            label={<h1 className={`text-[14px] font-medium ${formik.values.role.includes(value) ? 'text-secondary-blue-50' : 'text-blue-gray-75 '} `}>{value}</h1>}
                        />
                    </div>
                ))}

                

            </FormGroup>

            <div>
              {formik.touched.role && formik.errors.role ? (
                    <div className='text-red-600 text-[12px]'>{formik.errors.role}</div>
                ) : null}
              </div>
        </div>
    );
};

export default Role;