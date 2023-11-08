import { Link } from "react-router-dom";



const All_assidnment_sgow = ({card}) => {


 
    const  { _id, title,  description,  marks,  due_date,  thumbnail_url ,difficulty_level} = card
   

    return (
        <div>

         
             <div>
            <div className="mt-2  mb-2">
                <div className="card w-96 h-80  bg-base-100 shadow-xl">
                    <figure>
                        <img className=" w-96 h-60"  src={thumbnail_url} alt="Shoes" />
                        </figure>
                    <div className="card-body">
                            <h2 className="card-title">
                            {title}
                            
                            </h2>
                               <div className="flex justify-between">
                            
                             <div className="badge badge-secondary"> Mark:{marks}</div>
                              <div><p className="font-bold"> { due_date} </p></div>
                               </div>
                              
                        
                       
                        <div className="card-actions justify-between">
                            
                          <div>

                            <h2 className="font-semibold"> <span className="font-bold text-red-600"> Level: </span>  {difficulty_level} </h2>
                          </div>
                          <div>
                          <Link to={`/update_assignment/${_id}`} > 
                            <div className="badge badge-outline">Update</div>
                            </Link>

                            <Link to={`/view_assignment/${_id}`} > 
                            <div className="badge badge-outline">view</div>
                            </Link>

                          </div>

                        </div>


                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default All_assidnment_sgow;