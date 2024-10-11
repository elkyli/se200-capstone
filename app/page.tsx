import Sidebar from '../components/ui/Sidebar'; 

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-14 p-4">
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
      </main>
    </div>
  );
}
