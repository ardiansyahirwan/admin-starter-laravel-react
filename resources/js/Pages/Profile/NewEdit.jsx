import DashboardLayout from '@/Layouts/DashboardLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit ( { auth, mustVerifyEmail, status } )
{
    return (
        <DashboardLayout
            user={ auth.user }
            header={ "Profile" }
        >
            <Head title="Profile" />

            <div className="py-2 lg:py-4">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="p-2">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={ mustVerifyEmail }
                            status={ status }
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-2">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-2">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
