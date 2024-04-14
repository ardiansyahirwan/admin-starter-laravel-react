import { Link } from '@inertiajs/react';

export function SideBarLink ( { className = '', children, ...props } )
{
   return (
      <Link { ...props } className={ "flex w-full text-left items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group " + className }>
         { children }
      </Link>
   )
}