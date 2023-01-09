import { createSignal } from 'solid-js';

const [item,addItem] = createSignal([{name: String, upc: Number, price: Number}]);

export default function Newitem() {
    return <><div className="page"><h1 className="card-title text-primary-content text-2xl text-center">New Listing</h1>
 <div className="carousel card w-full">
 
        <div  className="rounded-box bg-primary p-2 shadow-lg  text-center items-center flex w-full">
           
  <div id="slide1" className="carousel-item w-full flex items-center text-center"><label className=" " htmlFor="title"><span className="text-lg">Title:  </span><input placeholder="What are you selling?" name="title"  /></label><a className="btn  btn-circle btn-sm m-1 bg-blue-500 "href="#slide2">~›</a></div>
  
  <div id="slide2" className="carousel-item w-full  bg-base-200 rounded-box place-items-center">Check the wanted section for inpiration! <a className="btn "href="#slide1">1</a></div>
</div>
    
</div>
</div>

  </>
};
