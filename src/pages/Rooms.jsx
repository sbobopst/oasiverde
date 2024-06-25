import SetImg from '../../img.json'
const Rooms = () => {
    return (
        <div className='pt-24'>
            {SetImg.map((imageData, index) => (
                <div key={index} className='flex flex-col items-center justify-between bg-gray-700 border border-gray-200 shadow md:flex-row w-full dark:border-gray-700  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700'>
                    <div className='flex flex-col items-center md:flex-row'>
                        <img className="hover:scale-105 hover:border-0 transition-all duration-100 object-fit border-4 border-gray-900 h-48 w-screen md:w-48" src={new URL(imageData.imageUrl, import.meta.url).href} alt='immagine stanza' />
                        <div className="justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{imageData.name}</h5>
                            <p className="mb-3 text-start whitespace-pre-line text-gray-700 dark:text-gray-400">{imageData.descr}</p>
                        </div>
                    </div>
                    <div className='pb-5 md:pb-0 gap-1 w-32 h-full mr-4 text-center flex flex-col text-white'>
                        <button className='font-bold bg-yellow-300 border-4 border-yellow-400 transition-all duration-300 hover:scale-105' > PRENOTA</button>
                        <button className='font-bold bg-green-500 border-4 border-green-400 hover:scale-105 transition-all duration-300 hover:border-green-500 hover:bg-green-400 '>DETTAGLI</button>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Rooms
