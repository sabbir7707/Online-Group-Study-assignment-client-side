import { useLoaderData } from "react-router-dom";
import All_assidnment_sgow from "./all_assignment_show";
import { useEffect, useState } from "react";

 import './pgbutton.css';
const All_assignment = () => {
    

    const [products, setProducts] = useState([]);
    const cart = useLoaderData();
    const [prodictess, setprodictess] = useState(cart);


    /* paiginantion */

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage,   setItemsPerPage] = useState(10)
    const[ count , setCount ] = useState(0)
    
      
  
      
       const  numerOfPages = Math.ceil(count/itemsPerPage )

       //cosnt pages =[]
       //for(let i =0 ;i<numberOfpages ; i++){
       // pages.push(i)
       //}
       const pages =[...Array(numerOfPages).keys()];
       console.log(pages);


       useEffect( () =>{
        fetch('http://localhost:5000/app/v1/pgassignment')
        .then(res => res.json())
        .then(data => setCount(data.count))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/app/v1/allassignment?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage]);


    
  /*   const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
 */
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }









    return (


        <div className="mt-10">
            {/* <Assignment_lavel></Assignment_lavel> */}













            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">

            {
                    products.map(card  =><All_assidnment_sgow
                        card={card}
                        prodictess={prodictess}
                        setprodictess={setprodictess}
                        key={card._id}> </All_assidnment_sgow>
                    )
                }
           {/*      
                {
                    cart.map(card => <All_assidnment_sgow
                        card={card}
                        prodictess={prodictess}
                        setprodictess={setprodictess}

                        key={card._id}> </All_assidnment_sgow>

                    )
                }
 */}


            </div>




            <div className='pagination'>
                <p className="font-semibold text-orange-400">Current page: {currentPage}</p>
                <button className="btn" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select  className="btn"  value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>




        </div>

    );
};

export default All_assignment;