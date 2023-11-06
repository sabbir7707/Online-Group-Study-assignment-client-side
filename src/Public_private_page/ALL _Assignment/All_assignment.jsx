import { useLoaderData } from "react-router-dom";
import All_assidnment_sgow from "./all_assignment_show";
import { useState } from "react";


const All_assignment = () => {

    const loadedproduct = useLoaderData();
    const [prodictess, setprodictess] = useState(loadedproduct);


    return (


        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {
                    loadedproduct.map(card => <All_assidnment_sgow
                        card={card}
                        prodictess={prodictess}
                        setprodictess={setprodictess}

                        key={card._id}> </All_assidnment_sgow>
                        
                        )
                }

            </div>

        </div>

    );
};

export default All_assignment;