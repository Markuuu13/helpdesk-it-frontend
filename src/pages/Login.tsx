export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded shadow w-96">

        <h1 className="text-xl font-bold mb-4">IT Help Desk Login</h1>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Username"
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          type="password"
          placeholder="Password"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>

      </div>

    </div>
  );
}