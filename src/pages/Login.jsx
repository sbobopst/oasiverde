import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="pt-24 flex items-center justify-center min-h-screen bg-gray-800">
            <div className="bg-gray-400 p-8 rounded-lg shadow-md w-full sm:max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Bentornato!</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                        >
                            Accedi
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-center">
                    <p className="text-gray-600">
                        Non sei ancora registrato? <span> </span>
                        <Link to="/register" className="font-medium text-green-700 hover:text-green-900">
                            Registrati!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
