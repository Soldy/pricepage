import { useState } from 'react'
import { redirect } from "next/navigation";
import Images from "@view/image"
import { requestGet } from "@model/request/get";
import { requestDelete } from "@model/request/delete";
import Loading from "@view/loading";
import "@css/product";


export default function ProductAsync(
  {id} : {id : number} 
): JSX.Element {
  function ProductBox(
    { title, value } : {
      title : string,
      value : number
    }
  ) : JSX.Element {
    return (
        <div className="productBox">
          <div className="productBoxTitle">
            <h3>
              {title}
            </h3>
          </div>
          <div>
            {value}
          </div>
        </div>

    );
  };
  async function Edit(){
    redirect(`/edit?id=${data.id}`);
  };
  async function Delete(){
    await requestDelete(data.id);
    setDeleted(true);
  };
  const [data, setData] = useState(0);
  const [deleted, setDeleted] = useState(false);

  if (deleted){
    redirect('/');
  }
  if (!data){
    requestGet({id}).then((d)=>{
      setData(d[0])
    });
    return <Loading />;
  }
  return(
    <div className="productShell">
      <div className="productData">
        <div className="productName">
          <h2>
            {data.name}
          </h2>
        </div>
        <div className="productDetails">
          <ProductBox
            title="Quantity"
            value={data.quantity}
          />
          <ProductBox
            title="Price"
            value={data.price}
          />
        </div>
      </div>
      <Images
        urls={data.image_urls}
      />
      <div className="productControl">
        <div className="productControlHalf">
          <button
            className="middleButton"
            onClick={Edit}
          >Edit</button>
        </div>
        <div className="productControlHalf">
          <button
            className="middleButton"
            onClick={Delete}
          >Delete</button>
        </div>
      </div>
    </div>
  );
}
