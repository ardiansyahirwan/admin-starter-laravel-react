import { Link } from '@inertiajs/react';

export function SideBarLink ( { className = '', children, ...props } )
{
   return (
      <Link { ...props } className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
         { children }
      </Link>
   )
}