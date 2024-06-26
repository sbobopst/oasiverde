const Registerform = ({ register, handleSubmit, errors }) => {
    return (
        <div className=" flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 ">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full sm:max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Registrati</h2>
                <form className="space-y-4 text-white" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white"> Nome </label>
                        <input className={`mt-1 bg-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50
                          ${errors.Name && 'border-red-500 focus:ring-red-500'}`} type="text" {...register("Name")} />
                        {errors.Name && <p className="text-red-500 text-sm mt-1">{errors.Name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="surname" className="block text-sm font-medium text-white">Cognome</label>
                        <input className={`mt-1 bg-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50
                          ${errors.Surname && 'border-red-500 focus:ring-red-500'}`} type="text" {...register("Surname")} />
                        {errors.Surname && <p className="text-red-500 text-sm mt-1">{errors.Surname.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input className={`mt-1 block w-full bg-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50
                          ${errors.Email && 'border-red-500 focus:ring-red-500'}`} type="email"  {...register("Email")} />
                        {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password </label>
                        <input className={`mt-1 block w-full bg-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50
                        ${errors.Password && 'border-red-500 focus:ring-red-500'}`} type="password" {...register("Password")} />
                        {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirm" className="block text-sm font-medium text-white">Conferma password</label>
                        <input className={`mt-1 block w-full bg-gray-700  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50
                        ${errors.confirmPassword && 'border-red-500 focus:ring-red-500'}`} type="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Registrati</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registerform;

