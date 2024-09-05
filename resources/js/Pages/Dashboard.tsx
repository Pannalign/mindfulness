import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import DAG from '../Components/Trees/DAG';
import Tree from '../Components/Trees/WebCola';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const sampleInquiryChart = [{
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
        content: 'The sky is clear.',
      }
    },
  ]
}]

// const nodes = [
//   { id: 0, name: 'Root', parent: null },
//   { id: 1, name: 'Child 1', parent: 0 },
//   { id: 2, name: 'Child 2', parent: 0 },
//   // ... additional nodes
// ];
// const links = nodes.filter(d => d.parent !== null).map(d => ({ source: d.parent, target: d.id }));

const example = {
    "nodes":[
      {"name":"a","width":60,"height":40},
      {"name":"b","width":60,"height":40},
      {"name":"c","width":60,"height":40},
      {"name":"d","width":60,"height":40},
      {"name":"e","width":60,"height":40}
    ],
    "links":[
      {"source":0,"target":1},
      {"source":1,"target":2},
      {"source":2,"target":0},
      {"source":2,"target":3}
    ]
}


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
                    <div className="row">
                      <div className="treeWrapper">
                          <DAG data={sampleInquiryChart} />
                      </div>
                      <div className="treeWrapper sm">
                          <Tree nodes={example.nodes} links={example.links} />
                      </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
