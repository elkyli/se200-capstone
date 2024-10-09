import Sidebar from '../components/ui/Sidebar'; // Adjust path if necessary

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

// export default function Home() {
//   return (
//     <Sidebar />
//     <h1 className="text-sm font-bold underline">
// This is the home page
//   </h1>
//   );
// }
