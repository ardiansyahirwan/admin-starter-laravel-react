import Dropdown from '@/Components/Dropdown';
import { SideBarLink } from '@/Components/SideBarLink';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function DashboardLayout ( { children, user, header } )
{
   const [ showNavigation, setShowNavigation ] = useState( false );
   return (
      <div className="min-h-screen bg-gray-100">
         <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="px-3 py-3 lg:py-6 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">

                  <div className="flex items-center justify-start rtl:justify-end">
                     <button
                        type="button"
                        onClick={ () => setShowNavigation( ( previousState ) => !previousState ) } className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>

                     <Link href={ route( 'dashboard' ) } className="flex ms-2 md:me-24">
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">adminKu</span>
                     </Link>
                  </div>

                  <div className="flex items-center">
                     <div className="flex flex-row items-center ms-3">
                        <Dropdown>
                           <Dropdown.Trigger>
                              <div className="flex flex-row items-center gap-2.5">
                                 <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                 </button>

                                 <div className="flex flex-row text-base md:text-sm items-center">
                                    { user.name }

                                    <svg
                                       className="ms-2 -me-0.5 h-4 w-4"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 20 20"
                                       fill="currentColor"
                                    >
                                       <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                       />
                                    </svg>
                                 </div>
                              </div>
                           </Dropdown.Trigger>

                           <Dropdown.Content>
                              <Dropdown.Link href={ route( 'profile.edit' ) }>Profile</Dropdown.Link>
                              <Dropdown.Link href={ route( 'logout' ) } method="post" as="button">
                                 Log Out
                              </Dropdown.Link>
                           </Dropdown.Content>
                        </Dropdown>
                     </div>
                  </div>
               </div>
            </div>
         </nav >

         <aside className={ ( showNavigation ? 'translate-x-0 ' : '-translate-x-full ' ) + 'fixed top-0 md:top-4 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0' }>
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
               <ul className="space-y-2 font-medium">
                  <li>
                     <SideBarLink href={ route( 'dashboard' ) } as="button" method="get" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ms-3">Dashboard</span>
                     </SideBarLink>
                  </li>

                  <li>
                     <SideBarLink>
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                     </SideBarLink>
                  </li>
                  <li>
                     <SideBarLink>
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                           <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                     </SideBarLink>
                  </li>
                  <li>
                     <SideBarLink>
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                     </SideBarLink>
                  </li>
                  <li>
                     <SideBarLink href={ route( 'logout' ) } as="button" method="post">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                     </SideBarLink>
                  </li>
               </ul>
            </div>
         </aside>

         <div className="p-5 md:my-6 sm:ml-64 relative top-16">
            <div className="text-3xl text-gray-800 font-bold font-sans mb-3">
               { header }
            </div>
            <div className="p-4 md:px-6 lg:px-6 bg-white rounded-xl">
               { children }
            </div>
         </div>

      </div >
   );
}