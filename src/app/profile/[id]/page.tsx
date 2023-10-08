export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>
      <hr />
      <p className="text-4xl">Profile page
      <span className="bg-orange-500 text-black rounded ml-2 p-2">
      {params.id}
        </span> 
      </p>
    </div>
  );
}
