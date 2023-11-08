import {  useLoaderData } from "react-router-dom";


const Assignment_lavel = () => {
    const  card = useLoaderData();

   /*  const  { _id, title,  description,  marks,  due_date,  thumbnail_url ,difficulty_level} = card 
    console.log(difficulty_level); */

    
    return (
        <div>


            <div>

                <select name='difficulty_level' className="select select-bordered w-full max-w-xs">
                    <option disabled selected> Difficulty level</option>

                  {/*   <Link to={`/assignment_lavel/:difficulty_level/${difficulty_level}`}> */}
                          <option>easy</option>
                        
             
                    <option>medium</option>


                    <option>hard</option>
                </select>


            </div>
        </div>
    );
};

export default Assignment_lavel;