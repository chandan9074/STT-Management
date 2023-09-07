import { useFormik } from 'formik';
import * as yup from 'yup';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { OrganizerContext } from '../../../context/OrganizerProvider';
import { Grid, TextField } from '@mui/material';
import ActionButton from '../RoleForm/ActionButton';
import { TagDataDT, tagBodyDT } from '../../../types/organizerTypes';

const validationSchema = yup.object({
    // gender: yup.string().required('Gender is Required'),
});

type Props = {
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
    data?: TagDataDT;
    isEdit?: boolean;
    handleEdit?: () => void;
    handleSelectRow?: (value: TagDataDT[]) => void;
}

const TagForm = ({ setIsFormOpen, data, isEdit, handleEdit, handleSelectRow }: Props) => {

    const organizerContext = useContext(OrganizerContext);
    // const { selectedFieldOutline, setSelectedFieldOutline } = useContext(UserManagementContext);
    const [focus, setFocus] = useState("")


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tagName: isEdit ? data ? data?.tagName : '' : "",
            shortCut: isEdit ? data ? data?.shortCut : '' : "",
            description: isEdit ? data ? data?.description : '' : "",
        },
        validationSchema: validationSchema,
        onSubmit: (values: tagBodyDT) => {

            if (isEdit && data) {
                values.id = data.id;
                organizerContext.updateTag(values);
                handleSelectRow && handleSelectRow([])
                handleEdit && handleEdit();
            }
            else {
                organizerContext.postTag(values)
            }
            formik.resetForm();
            setIsFormOpen(false)

        }
    });

    return (
        <div className='px-6 py-6'>
            <form onSubmit={formik.handleSubmit}>

                <Grid container spacing={2}>
                    <Grid item xs={7.2}>
                        <TextField
                            id="tagName"
                            name="tagName"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "tagName" ? "" : "mt-[3px]"}`} ><span className={`${focus === "tagName" ? "font-medium" : "text-[14px] font-semibold"}`}>Tag Name </span><span className='text-[red]'>*</span></div>}
                            onFocus={() => setFocus("tagName")}
                            onBlur={() => setFocus("")}
                            value={formik.values.tagName}
                            onChange={formik.handleChange}
                            error={formik.touched.tagName && Boolean(formik.errors.tagName)}
                            helperText={formik.touched.tagName && formik.errors.tagName}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'tagName' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("tagName")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        // classes={{
                        //     option: classes.focused,
                        // }}
                        // classes={{ option: classes.option }}
                        // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                        />
                    </Grid>
                    <Grid item xs={4.8}>
                        <TextField
                            id="shortCut"
                            name="shortCut"
                            size='small'
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: 'rgb(19, 110, 229) !important',
                                },
                            }}
                            label={<div className={`${focus === "shortCut" ? "" : "mt-[3px]"}`} ><span className={`${focus === "shortCut" ? "font-medium" : "text-[14px] font-semibold"}`}>Shortcut </span><span className='text-[red]'>*</span></div>}
                            onFocus={() => setFocus("shortCut")}
                            onBlur={() => setFocus("")}
                            value={formik.values.shortCut}
                            onChange={formik.handleChange}
                            error={formik.touched.shortCut && Boolean(formik.errors.shortCut)}
                            helperText={formik.touched.shortCut && formik.errors.shortCut}
                            style={{ width: '100%' }}
                            InputProps={{
                                style: {
                                    color: '#464E5F',
                                    fontWeight: '600',
                                    fontSize: '15px',
                                    caretColor: '#136EE5',
                                    // border: selectedFieldOutline === 'shortCut' ? '1px solid #136EE5' : '1px solid transparent'
                                }
                            }}
                            variant="outlined"
                        // onFocus={() => setSelectedFieldOutline("shortCut")}
                        // onBlur={() => setSelectedFieldOutline("")}
                        // classes={{
                        //     option: classes.focused,
                        // }}
                        // classes={{ option: classes.option }}
                        // className={formik.touched.name && formik.errors.name ? "focused" : ""}
                        />
                    </Grid>
                </Grid>


                <div className='mt-4'>

                    <TextField
                        id="description"
                        name="description"
                        multiline={true}
                        rows={4}
                        size='small'
                        sx={{
                            '&:hover fieldset': {
                                borderColor: 'rgb(19, 110, 229) !important',
                            },
                        }}
                        label={<div className={`${focus === "description" ? "" : "mt-[3px]"}`} ><span className={`${focus === "description" ? "font-medium" : "text-[14px] font-semibold"}`}>Description </span></div>}
                        onFocus={() => setFocus("description")}
                        onBlur={() => setFocus("")}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        style={{ width: '100%' }}
                        InputProps={{
                            style: {
                                color: '#464E5F',
                                fontWeight: '600',
                                fontSize: '15px',
                                caretColor: '#136EE5',
                                // border: selectedFieldOutline === 'description' ? '1px solid #136EE5' : '1px solid transparent',
                            }
                        }}
                        variant="outlined"
                    // onFocus={() => setSelectedFieldOutline("description")}
                    // onBlur={() => setSelectedFieldOutline("")}
                    />
                    {/* {formik.touched.description && formik.errors.description ? (
                    <div className='text-red-600 text-xxs'>{formik.errors.description}</div>
                ) : null} */}
                </div>
                <ActionButton setIsDrawerOpen={setIsFormOpen} />
            </form>
        </div>
    );
};

export default TagForm;