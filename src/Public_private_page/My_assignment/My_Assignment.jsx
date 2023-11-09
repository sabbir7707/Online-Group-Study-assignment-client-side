import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import My_submitAllassignmrnt from "./My_submitAllassignmrnt";


const My_Assignment = () => {
	const { userr } = useContext(AuthContext)
	const [ass, setAss] = useState()
	const [load,setLoad]=useState(true)
	const email = userr?.email
	console.log(email);

	useEffect(() => {
		fetch(`https://online-goup-stady-server.vercel.app/app/v1/task?email=${email}`)
			.then(res => res.json())
			.then(data => {
				setAss(data)
				setLoad(false)
			})
	}, []);
	if(load){
		return <span className="loading loading-bars loading-lg"></span>
	}
	console.log("ass",ass[0]);


	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 mt-4">
            
			{
				ass.map((data)=><My_submitAllassignmrnt card={data}/>)
			}
              

			 



		</div>
	);
};

export default My_Assignment;