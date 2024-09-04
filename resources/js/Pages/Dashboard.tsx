import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import CenteredTree from '../Components/CenteredTree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const sampleInquiryChart = {
  name: 'Inquiry',
  attributes: {
    content: 'What is the colour of the sky?',
  },
  children: [
    {
      name: 'Inquiry',
      attributes: {
        content: "The sky itself, or our perception of it?",
      },
      children: [
        {
          name: 'Response',
          attributes: {
            content: 'The sky itself.',
          },
        },
      ],
    },
    {
      name: 'Response',
      attributes: {
          content: 'The sky is clear.'
      },
    },
  ],
};

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </div>
                    <div id="treeWrapper">
                        <CenteredTree data={sampleInquiryChart} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
