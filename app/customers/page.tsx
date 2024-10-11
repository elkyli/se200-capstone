import Sidebar from '../../components/ui/Sidebar'; // Adjust path if necessary

export default function Customers() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4">
        <h1>This is customers page </h1>
      </main>
    </div>
  );
}