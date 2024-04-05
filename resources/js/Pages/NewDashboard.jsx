import AuthenticatedLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function NewDashboard ( { auth } )
{
    return (
        <AuthenticatedLayout
            user={ auth.user }
            header="Dashboard"
        >
            <Head title="Dashboard" />

            <div className="py-3 px-1 md:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-0">
                    <div className="bg-green-200 overflow-hidden rounded-lg shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
