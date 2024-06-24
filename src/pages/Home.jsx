import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="bg-gray-800 min-h-screen text-center flex flex-col justify-center items-center">
            <div className="pt-24 flex flex-col gap-10 text-white">
                <h1 className=' font-bold md:text-4xl text-3xl'>Benvenuto</h1>
                <p className='font-bold md:text-xl text-lg'>
                    Scopri il lusso e il comfort delle nostre stanze uniche. <br />
                    La tua oasi ti sta aspettando.
                </p>
                <Link className="transition-all hover:scale-105 bg-green-600 w-48 p-3 mx-auto rounded-lg text-white" to="/rooms">Visualizza stanze</Link>
            </div>
        </div>

    )
}

export default Home