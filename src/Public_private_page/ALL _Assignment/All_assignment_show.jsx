

const All_assidnment_sgow = ({card}) => {
    console.log(card);
    const  { title,  Description,  marks,  due_date,  thumbnail_url ,difficulty_level} = card
   

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
                              
                        
                       
                        <div className="card-actions justify-end">
                            
                            <div className="badge badge-outline">Update</div>

                            <div className="badge badge-outline"> View</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default All_assidnment_sgow;