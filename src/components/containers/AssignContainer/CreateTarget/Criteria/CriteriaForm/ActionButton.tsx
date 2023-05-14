import { FormikValues } from "formik";
import { useContext } from "react";
import { AssignContext } from "../../../../../../context/AssignProvider";
import { isEmpty } from "../../../../../../helpers/Utils";
import { CriteriaItemDT } from "../../../../../../types/assignTypes";

type Props = {
    formik: FormikValues,
    onCreate: () => void,
    data?: CriteriaItemDT
}


const ActionButton = ({ formik, onCreate, data }: Props) => {

    const AssignContexts = useContext(AssignContext);
    const { criterias } = AssignContexts;

    return (
        <div>
            {
                ((((formik.values.ageRange !== '') && (formik.values.district.length !== 0)) || criterias?.length !== 0)) &&
                <div className='flex justify-end px-5 py-4 bg-white'>

                    <div className='flex gap-x-[16px] '>
                        {
                            isEmpty(data) && (formik.values.ageRange !== '' && formik.values.district.length !== 0) &&
                            <button
                                // onClick={(event) => {
                                //     event?.preventDefault();
                                //     onCreate();
                                // }}

                                onClick={(event) => {
                                    if (criterias?.length > 0) {
                                        event.preventDefault();
                                        onCreate();
                                    } else {
                                        formik.setValues({
                                            ...formik.values,
                                            buttonName: 'create-button'
                                        });
                                        formik.handleSubmit(event); // call formik handleSubmit function
                                    }
                                }}
                                className='text-small font-semibold duration-300 transition ease-out border-[1px] border-blue-30 text-ct-blue-80 active:text-blue-gray-75 hover:bg-ct-blue-10 active:bg-blue-gray-10 hover:border-ct-blue-30 rounded-[6px] py-[9px] px-[32px]'
                            >
                                Create
                            </button>
                        }

                        {
                            (formik.values.ageRange === '' && formik.values.district.length === 0) &&
                            <button onClick={(event) => {
                                if (criterias?.length > 0) {
                                    event.preventDefault();
                                    onCreate();
                                } else {
                                    formik.setValues({
                                        ...formik.values,
                                        buttonName: 'create-button'
                                    });
                                    formik.handleSubmit(event); // call formik handleSubmit function
                                }
                            }} type='submit' className='text-small font-semibold duration-300 transition ease-out bg-primary-ct-blue-60 hover:bg-ct-blue-70 active:text-opacity-60 text-white rounded-[6px] py-[9px] px-[32px]'>
                                create
                            </button>
                        }

                        {
                            (formik.values.ageRange !== '' && formik.values.district.length !== 0) &&
                            <button className='text-small font-semibold duration-300 transition ease-out bg-primary-ct-blue-60 hover:bg-ct-blue-70 active:text-opacity-60 text-white rounded-[6px] py-[9px] px-[32px]'>
                                Save
                            </button>
                        }


                    </div>
                </div>
            }

        </div>
    );
};

export default ActionButton;