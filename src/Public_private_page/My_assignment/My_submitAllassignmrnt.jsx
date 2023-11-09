

const My_submitAllassignmrnt = ({ card }) => {
    const { pdf_link, textarea,email } = card
    console.log(pdf_link);

    return (
        <div>
            <a
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">

                            {pdf_link}

                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">   {email}</p>
                    </div>


                </div>

                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                      {textarea}
                    </p>
                </div>

                <div className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default My_submitAllassignmrnt; 