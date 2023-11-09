import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";

const All_assidnment_sgow = ({ card, prodictess, setprodictess }) => {
  const {userr}=useContext(AuthContext)
  const email=userr?.email





  const { _id, title, description, marks, due_date, thumbnail_url, difficulty_level } = card

  const handeleDelete = _id => {

    console.log(_id);
    const  toastId =toast.loading('DELETE ...')

    console.log('delet confriom')
    fetch(`https://online-goup-stady-server.vercel.app/app/v1/allassignment/${_id}`, {
      method: 'Delete'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {

          const remaning = prodictess.filter(pro => pro._id !== _id)

          setprodictess(remaning);
          toast.success('DELETE', { id: toastId });

          window.location.reload();





        }
      })
  }





  return (
    <div>


      <div>
        <div className="mt-2  mb-2">
          <div className="card w-96 h-80  bg-base-100 shadow-xl">
            <figure>
              <img className=" w-96 h-60" src={thumbnail_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}

              </h2>
              <div className="flex justify-between">

                <div className="badge badge-secondary"> Mark:{marks}</div>
                <div><p className="font-bold"> {due_date} </p></div>
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
                  {
                    card?.email == email?
                    <button  onClick={() => handeleDelete(_id)} className="badge badge-outline">DELETE</ button>
                    :
                    <button  onClick={() => toast("You are not the real owner of this assignment")} className="badge badge-outline">DELETE</ button>
                   

                  }
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