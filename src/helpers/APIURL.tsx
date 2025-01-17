const REACT_APP_BASE_URL = "https://amarkantho.revesoft.com:12142";
const REACT_APP_BASE_URL2 = "https://amarkantho.revesoft.com:3456";

// Billing
export const GET_TIME_WISE_DISBURSEMENTS_URL = `${REACT_APP_BASE_URL}/time-wise-disbursement`;
export const GET_MANAGER_BY_ID_URL = `${REACT_APP_BASE_URL}/managers/get-get-by-id`;
export const DELETE_MANAGER_BY_ID_URL = `${REACT_APP_BASE_URL}/managers/delete`;
export const GET_TOTAL_AMOUNT_DISBURSEMENTS_URL = `${REACT_APP_BASE_URL}/total-amount-disbursed`;

//Billing Info
export const GET_ALL_BILLING_INFO_URL = `${REACT_APP_BASE_URL}/all-billing-info`;
export const GET_LAST_BILLING_INFO_URL = `${REACT_APP_BASE_URL}/last-billing-info`;

//Billing Payment
export const GET_ALL_BILLING_PAYMENT_URL = `${REACT_APP_BASE_URL}/payment-history`;

// Role List
export const GET_ROLE_LIST_URL = `${REACT_APP_BASE_URL}/roles-list`;

// Dashboard
export const GET_TOTAL_DATA_URL = `${REACT_APP_BASE_URL}/total-data-dashboard`;
export const GET_OVER_THE_TIME_DATA_URL = `${REACT_APP_BASE_URL}/over-the-time-dashboard`;
export const GET_CREATE_COLLECT_DATA_URL = `${REACT_APP_BASE_URL}/create-collect-data`;

// Script
export const GET_ALL_SCRIPTS_URL = `${REACT_APP_BASE_URL}/get-all-scripts`;
export const CREATE_SCRIPTS_URL = `${REACT_APP_BASE_URL}/create-script`;
export const GET_SCRIPT_BY_ID = `${REACT_APP_BASE_URL}/get-script-by-id`;
export const UPDATE_SCRIPT_URL = `${REACT_APP_BASE_URL}/update-script`;
export const UPLOAD_SCRIPT_CSV_FILE_URL = `${REACT_APP_BASE_URL}/upload-csv`;
export const DELETE_SCRIPT_URL = `${REACT_APP_BASE_URL}/delete-script-by-id`

// Assign 
export const GET_ALL_SCRIPT_URL = `${REACT_APP_BASE_URL2}/all_scripts_with_frequency`;
export const POST_SELECTED_SCRIPT_URL = `${REACT_APP_BASE_URL2}/post_res_selected_script_assign_module`;
export const POST_RES_CRITERIA_URL = `${REACT_APP_BASE_URL2}/post_res_criteria_assign_module`;
export const GET_ASSIGN_CRITERIA_BY_ID_URL = `${REACT_APP_BASE_URL2}/get_res_by_id_criteria_assign_module`;
export const UPDATE_ASSIGN_CRITERIA_URL = `${REACT_APP_BASE_URL2}/update_criteria_assign_module`;
export const GET_SELECTED_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_selected_script_assign_module`;
export const GET_CRITERIA_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_criteria_assign_module`;
export const GET_ASSIGNEE_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_selected_assignee_assign_module`;
export const DELETE_SINGLE_SCRIPT_URL = `${REACT_APP_BASE_URL2}/delete_by_id_selected_script_assign_module`;
export const DELETE_SINGLE_CRITERIA_URL = `${REACT_APP_BASE_URL2}/delete_by_id_criteria_assign_module`;
export const DELETE_SINGLE_ASSIGNEE_URL = `${REACT_APP_BASE_URL2}/delete_by_id_selected_assignee_assign_module`;
export const POST_DRAFT_TARGET_URL = `${REACT_APP_BASE_URL2}/post_res_draft_target_assign_module`;
export const GET_DRAFT_TARGET_URL = `${REACT_APP_BASE_URL2}/get_res_draft_target_assign_module`;
export const UPDATE_DRAFT_TARGET_URL = `${REACT_APP_BASE_URL2}/update_draft_target_assign_module`;
export const CREATE_ASSIGNEE_URL = `${REACT_APP_BASE_URL2}/post_res_selected_assignee_assign_module`;
export const GET_TARGET_ASSIGN_URL = `${REACT_APP_BASE_URL2}/get_res_target_assign_module`;
export const GET_ID_TARGET_ASSIGN_URL = `${REACT_APP_BASE_URL2}/get_res_by_id_target_module`;
export const GET_ROLE_LIST_BY_ROLE = `${REACT_APP_BASE_URL2}/get_res_role_list_by_role`;
export const UPDATE_ASSIGNEE_MAIN_TARGET_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/update_assignee_main_target_assign_module`;
export const POST_RES_TARGET_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/post_res_target_assign_module`;
export const DELETE_DRAFT_TARGET_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/delete_by_id_selected_draft_target_assign_module`;
export const GET_RES_SINGLE_TARGET_SPEECHES_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/get_res_single_target_speeches_assign_module`;
export const POST_SINGLE_TARGET_SPEECHES_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/post_single_target_speeches_assign_module`;
export const GET_RES_AUDIO_STATISTICS_PATH = `${REACT_APP_BASE_URL2}/get_res_statistics_assign_module`;
export const POST_RES_RECREATE_TARGET_ASSIGN_PATH = `${REACT_APP_BASE_URL2}/post_res_recreate_target_table_assign_module`;
export const GET_RES_PREDEFINED_REMARKS = `${REACT_APP_BASE_URL2}/get_res_predefined_remarks`;
export const GET_RES_ROLES_UPDATE_ASSIGNEE_ASSIGN_MODULE = `${REACT_APP_BASE_URL2}/get_res_roles_update_assignee_assign_module`;
export const POST_RES_SPEECH_UPLOAD_AUDIO_MGT_MODULE_URL = `${REACT_APP_BASE_URL2}/post_res_speech_upload_audio_audio_mgt_module`;

// User Management

export const GET_RES_USER_MANAGEMENT_MODULE = `${REACT_APP_BASE_URL2}/get_res_user_userManagement_module`;
export const GET_RES_ACTIVITY_STATISTICS_USER_MANAGEMENT_MODULE = `${REACT_APP_BASE_URL2}/get_res_activity_statistics_userManagement_module`;
export const POST_RES_USER_MANAGEMENT_MODULE = `${REACT_APP_BASE_URL2}/post_res_create_user_userManagement_module`;
export const GET_RES_USER_MANAGEMENT_BY_ID_MODULE = `${REACT_APP_BASE_URL2}/get_res_update_user_userManagement_module`;
export const UPDATE_RES_USER_MANAGEMENT_BY_ID_MODULE = `${REACT_APP_BASE_URL2}/update_res_user_userManagement_module`;
export const GET_RES_ACTIVITY_TABLE_USER_MANAGEMENT_MODULE = `${REACT_APP_BASE_URL2}/get_res_activity_table_userManagement_module`;



//Audio Management

export const GET_RES_COLLECTED_AUDIO_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_CHECKING_STATUS_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_checking_status_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ALL_CHECKED_AUDIOS_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_all_checked_audios_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ANNOTATION_TYPE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_annotation_type_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ANNOTATION_SENTENCE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_annotation_sentence_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ANNOTATION_WORD_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_annotation_word_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ANNOTATION_PHONEME_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_annotation_phoneme_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_ANNOTATED_FILES_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_annotated_files_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_VALIDATED_LEVEL_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_validated_level_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_VALIDATION_SENTENCE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_validation_sentence_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_VALIDATION_WORD_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_validation_word_audio_mgt_module`;
export const GET_RES_COLLECTED_AUDIO_VALIDATION_PHONEME_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_collected_audio_validation_phoneme_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_CHECKING_STATUS_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_checking_status_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ALL_CHECKED_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_all_checked_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ANNOTATION_TYPE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_annotation_type_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ANNOTATION_SENTENCE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_annotation_sentence_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ANNOTATION_WORD_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_annotation_word_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ANNOTATION_PHONEME_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_annotation_phoneme_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_ANNOTATED_FILES_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_annotated_files_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_VALIDATION_SENTENCE_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_validation_sentence_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_VALIDATION_WORD_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_validation_word_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_VALIDATION_PHONEME_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_validation_phoneme_audio_mgt_module`;
export const GET_RES_UPLOAD_AUDIO_VALIDATED_FILES_AUDIO_MGT_MODULE = `${REACT_APP_BASE_URL2}/get_res_upload_audio_validated_files_audio_mgt_module`;
export const POST_RES_REASSIGN_ALL_CHECKING_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_reassign_all_checking_audio_mgt`;
export const POST_RES_REASSIGN_ANNOTATED_FILES_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_reassign_annotated_files_audio_mgt`;
export const POST_RES_REASSIGN_VALIDATION_LEVEL_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_reassign_validation_level_audio_mgt`;
export const POST_RES_CLAIM_APPLICATION_ALL_CHECKED_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_claim_application_all_checked_audio_mgt`;
export const POST_RES_CLAIM_APPLICATION_ANNOTATED_FILES_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_claim_application_annotated_files_audio_mgt`;
export const POST_RES_CLAIM_APPLICATION_VALIDATED_LEVEL_AUDIO_MGT = `${REACT_APP_BASE_URL2}/post_res_claim_application_validated_level_audio_mgt`;


//Organize

export const GET_RES_ROLE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/get_res_role_organize_module`;
export const GET_RES_TAG_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/get_res_tag_organize_module`;
export const GET_RES_DEVICE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/get_res_device_organize_module`;

//Organize->POST

export const POST_RES_ROLE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/post_res_role_organize_module`;
export const POST_RES_TAG_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/post_res_tag_organize_module`;
export const POST_RES_DEVICE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/post_res_device_organize_module`;

//Organize->UPDATE

export const UPDATE_RES_ROLE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/update_res_role_organize_module`;
export const UPDATE_RES_TAG_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/update_res_tag_organize_module`;
export const UPDATE_RES_DEVICE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/update_res_device_organize_module`;

//Organize->DELETE

export const DELETE_RES_ROLE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/delete_res_role_organize_module`;
export const DELETE_RES_TAG_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/delete_res_tag_organize_module`;
export const DELETE_RES_DEVICE_ORGANIZE_MODULE = `${REACT_APP_BASE_URL2}/delete_res_device_organize_module`;


