
import toast from "react-hot-toast";
const Take_assignment = () => {

    const handelAddproduct= event => {
        
        event.preventDefault();
        const form = event.target;

        const pdf_link= form.pdf_link.value;
        const textarea= form.textarea.value;
      

        const newproduct = { pdf_link,  textarea }
        console.log(newproduct);

        const  toastId =toast.loading(' submit Assignment...')

        fetch('https://online-goup-stady-server.vercel.app/app/v1/addassignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    
                    toast.success('Submit Assignment', { id: toastId });


                 
                    window.location.reload()

                }
            })


        }






    return (

        <div>



            <section className="rounded-3xl shadow-2xl">
                <form
                       onSubmit={handelAddproduct}

                >
                <div className="p-8 text-center sm:p-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                       TAKE ASSIGNMENT
                    </p>
                    {/* input link  */}

                    
                    <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
                <input
                     name="pdf_link"
                    type="url"
                    id="UserEmail"
                    placeholder="Link"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span
                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                    PDF Link
                </span>
            </label>
            {/* taxt area  */}

            
            <div>
                

                <textarea
                    name="textarea"
                    id="OrderNotes"
                    className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                    rows="4"
                    placeholder="Enter any additional  notes..."
                ></textarea>
            </div> 
             <button type="submit"  className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl">

                          

                    
                         SUBMIT
                
                    </button>
                   

                </div>
                </form>
            </section>


        </div>
    );
};

export default Take_assignment;