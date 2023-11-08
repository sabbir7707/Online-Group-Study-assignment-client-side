import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const Show_submitedpage = ({card}) => {
    const {userr} = useContext(AuthContext)
    const { pdf_link,  textarea } =  card
    return (
        <div>
              <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			
			{/* <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">{userr?.displayName}</a> */}
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-sm font-bold hover:underline">{pdf_link}</a>
			<p className="mt-2">{textarea}</p>
		</div>

		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
		</div>
        
	</div>
</div>
        </div>
    );
};

export default Show_submitedpage;