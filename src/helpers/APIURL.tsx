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

// Assign 

export const GET_ALL_SCRIPT_URL = `${REACT_APP_BASE_URL2}/all_scripts_with_frequency`;
export const POST_SELECTED_SCRIPT_URL = `${REACT_APP_BASE_URL2}/post_res_selected_script_assign_module`;
export const GET_SELECTED_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_selected_script_assign_module`;
export const GET_CRITERIA_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_criteria_assign_module`;
export const GET_ASSIGNEE_SCRIPT_URL = `${REACT_APP_BASE_URL2}/get_res_selected_assignee_assign_module`;
export const DELETE_SINGLE_SCRIPT_URL = `${REACT_APP_BASE_URL2}/delete_by_id_selected_script_assign_module`;
export const DELETE_SINGLE_CRITERIA_URL = `${REACT_APP_BASE_URL2}/delete_by_id_criteria_assign_module`;
export const DELETE_SINGLE_ASSIGNEE_URL = `${REACT_APP_BASE_URL2}/delete_by_id_selected_assignee_assign_module`;
export const POST_DRAFT_TARGET_URL = `${REACT_APP_BASE_URL2}/post_res_draft_target_assign_module`;
export const GET_DRAFT_TARGET_URL = `${REACT_APP_BASE_URL2}/get_res_draft_target_assign_module`;









