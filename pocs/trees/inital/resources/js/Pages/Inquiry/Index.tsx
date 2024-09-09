// Index.jsx
import { Link } from '@inertiajs/react';

export default function Index({ inquiries }) {
    return (
        <div>
            <h1>Inquiries</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                            <td>{inquiry.id}</td>
                            <td></td>
                            <td>{inquiry.type}</td>
                            <td>
                                <Link href={route('inquiries.show', inquiry)}>Show</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
