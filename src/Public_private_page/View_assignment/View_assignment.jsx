import { Link, useLoaderData } from "react-router-dom";


const View_assignment = () => {
    const details = useLoaderData();
    const { _id, title, description, marks, due_date, thumbnail_url, difficulty_level } = details
    console.log(details);
    return (
        <div>

            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl"> {due_date}</h2>

                                    <p className="mt-4 text-gray-500">
                                       {description}
                                    </p>
                                </header>
                                <Link to="/take_assignment">
                                <a
                                    href="#"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                   Take Assignment 
                                </a>
                               </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-10">
                            <ul className="grid grid-cols-1 gap-4">
                                <li>
                                    <a href="#" className="block group">
                                        <img
                                            src={thumbnail_url}
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                              {title}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700"> Marks :{ marks}</p>
                                        </div>
                                    </a>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default View_assignment;