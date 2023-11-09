import { useLoaderData } from "react-router-dom";
import Show_submitedpage from "./Show_submitedpage";


const Submitted_Assignment = () => {
    const loadedassignment = useLoaderData();
    console.log(loadedassignment);


    return (
        <div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {
                    loadedassignment.map(card => <Show_submitedpage
                        card={card}
                       

                        key={card._id}> </Show_submitedpage>
                        
                        )
                }
                </div>
        </div>
    );
};

export default Submitted_Assignment;