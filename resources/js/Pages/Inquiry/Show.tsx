export default function Show({ inquiry }) {
    return (
        <div>
            <h1>Inquiry Details</h1>
            <p><strong>ID:</strong> {inquiry.id}</p>
            <p><strong>Type:</strong> {inquiry.type}</p>
            {/* Add other inquiry details here */}
        </div>
    );
}
