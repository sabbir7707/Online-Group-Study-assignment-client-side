
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const Update_Assignment = () => {

    const product =useLoaderData();
    const { _id, title,  description,  marks,  due_date,  thumbnail_url ,difficulty_level} =product
    console.log(product);

    const   haldelupdateAssaignment = event => {
        
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const due_date = form.due_date.value;
        const difficulty_level= form.difficulty_level.value;
        const thumbnail_url = form.thumbnail_url.value;

        const newproduct = { title,  description,  marks,  due_date,  thumbnail_url ,difficulty_level}
        console.log(newproduct);

        const  toastId =toast.loading('Update assignment ')
        fetch(`http://localhost:5000/app/v1/allassignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('ADD Assignment', { id: toastId });
                  
                   

                }
            })



    }

    
    return (
        <div className="mt-6 mb-8">

        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                    <div className="mt-8">
                          <h2 className="font-semibold text-3xl mb-2 text-cyan-500"> Update  Assignment</h2>

                        </div>
                        <p className="max-w-xl text-lg font-semibold">
                        In this online group-study assignment, participants will have the opportunity to choose a topic of their interest within the fields of mathematics, chemistry, or physics for collaborative study. The objective is to promote self-directed learning, enhance knowledge in these subjects, and encourage interdisciplinary discussions.
                        </p>
                    </div>
                    {/* ai  add part start now  */}
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">


                        {/*  form ar kage  */}
                        <form 
                            onSubmit={haldelupdateAssaignment}
                        
                        action="" className="space-y-4">

                            {/* from start  */}


                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="Title">Title</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Title"
                                        type="text"
                                        name='title'
                                        id="title"
                                        defaultValue={title }
                                    />
                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="Description">Description</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        type="text"
                                        name="description"
                                        defaultValue={description}
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="sr-only" htmlFor="Image URL"></label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Image Url "
                                    type="url"
                                    id="Url"
                                    name='thumbnail_url'
                                    defaultValue={thumbnail_url}
                                />
                            </div>
                            {/* mark  level ar date  */}

                            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">


                                {/* marks  */}
                                <div>
                                    <label className="sr-only" htmlFor="Marks">Marks</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Marks"
                                        type="number"
                                        id="Marks"
                                        name='marks'
                                        defaultValue={marks}
                                    />
                                </div>

                                {/* defficalty */}

                                <div>  
                                    
                                    <select name='difficulty_level' defaultValue={difficulty_level} className="select select-bordered w-full max-w-xs">
                                        <option disabled selected> Difficulty level</option>
                                        <option>easy</option>
                                        <option>medium</option>
                                        <option>hard</option>
                                    </select>
                                    

                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="Marks">Date</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Marks"
                                        type="date"
                                        name="due_date"
                                        defaultValue={due_date}
                                    />
                                </div>



                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    );
};

export default Update_Assignment;