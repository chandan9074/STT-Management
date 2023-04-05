// sidebar nav links
import * as PATH from "../helpers/Slug";
import * as Permission from "../helpers/Permission";
import Icons from "../assets/Icons";

let sidebarMenu = {
  category1: [
    {
      menu_title: "Script",
      menu_icon: Icons.post_add,
      type_multi: null,
      path: PATH.SCRIPT_PATH,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "Dashboard",
      menu_icon: Icons.dashboard,
      type_multi: null,
      path: PATH.DASHBOARD_PATH,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "Assign",
      menu_icon: Icons.target,
      type_multi: null,
      // path: PATH.ASSIGN_PATH,
      path: `${PATH.ASSIGN_PATH}/${PATH.ALL_TARGET_PTAH}`,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "Audio Management",
      menu_icon: Icons.songDashboard,
      type_multi: null,
      // path: PATH.AUDIO_PATH,
      // path: PATH.COLLECTING_AUDIO,
      path: `${PATH.AUDIO_PATH}/${PATH.COLLECTING_AUDIO}`,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "User Management",
      menu_icon: Icons.user2,
      type_multi: null,
      path: PATH.USER_PATH,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "Billing",
      menu_icon: Icons.group,
      type_multi: null,
      path: PATH.BILLING_PATH,
      permissions: [Permission.ALL],
    },
    {
      menu_title: "Organize",
      menu_icon: Icons.settings,
      type_multi: null,
      path: `${PATH.ORGANIZER_PATH}/${PATH.ROLE}`,
      permissions: [Permission.ALL],
    },
    // {
    //   menu_title: "Organizer",
    //   menu_icon: Icons.settings,
    //   type_multi: null,
    //   path: PATH.SETTINGS_PATH,
    //   permissions: [Permission.ALL],
    // },
  ],
};

export default sidebarMenu;
