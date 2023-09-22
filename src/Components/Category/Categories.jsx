import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://api.npoint.io/7e0cf073a47e2df4d827')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
           <div className="md:grid-cols-4 gap-8 px-4 grid mx-auto">
            {
                categories?.map(category => <Category key={category?.id} category={category}/>)
                
            }
           </div>
        </div>
    );
};

export default Categories;