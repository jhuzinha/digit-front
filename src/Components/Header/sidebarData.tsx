import * as AiIcons from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCreate } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

export const sidebarData = [
    // {
    //     'name': 'Home',
    //     'path': '/timeline',
    //     'icon': <AiIcons.AiFillHome />
    // },
    {
        'name': 'Timeline',
        'path': '/profile',
        'icon': <CgProfile />
    },
    {
        'name': 'Write',
        'path': '/editor',
        'icon': <MdOutlineCreate />
    },
    {
        'name': 'Logout',
        'path': '/login',
        'icon': <BiLogOut />
    }
]