import { Link } from "react-router-dom";
import img from '/About.jpg'

const About = () => {
    return (
        <div className="pt-28 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900  flex flex-col items-center pb-10">
            <div className="container mx-auto px-5 lg:px-32 text-center">
                <h1 className="text-5xl font-extrabold text-green-800 mb-10">
                    Scopri il paesaggio<br />
                </h1>
                <img
                    src={img}
                    alt="Oasi Verde"
                    className="w-full h-80  object-cover rounded-xl shadow-lg mb-10 transition-transform duration-500 hover:scale-105"
                />
                <div className="text-white">
                    <p className="text-xl  leading-relaxed mb-8">
                        Immerso nella natura, Oasi Verde è il luogo perfetto per una fuga rilassante. Situato nel cuore della campagna,
                        il nostro BnB offre un'esperienza unica e autentica. Con camere confortevoli, un giardino lussureggiante e una calda ospitalità,
                        Oasi Verde è il rifugio ideale per chi cerca pace e tranquillità.
                    </p>
                    <p className="text-xl  leading-relaxed mb-8">
                        Ogni mattina, potrete gustare una colazione preparata con ingredienti freschi e locali, mentre la sera potrete rilassarvi
                        nel nostro accogliente salotto o fare una passeggiata nei dintorni pittoreschi. Siamo orgogliosi di offrire un servizio
                        personalizzato e di far sentire ogni ospite come a casa propria.
                    </p>
                    <p className="text-xl  leading-relaxed mb-10">
                        Venite a scoprire la bellezza e la serenità di Oasi Verde. Vi aspettiamo!
                    </p>
                    <Link to="/rooms"><button className="bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-700 transition-colors duration-300">
                        Prenota Ora
                    </button></Link>
                </div>
            </div>
        </div >
    );
};

export default About;
