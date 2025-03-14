import { useState } from 'react'
import { redirect } from "next/navigation";
import { product } from "@tool/request/types";
import { requestGet } from "@model/request/get";
import { requestDelete } from "@model/request/delete";
import Images from "@view/image"
import Loading from "@view/loading";
import useId from "@tool/getid";
import "@css/product";


export default function ProductAsync(): React.JSX.Element {
  const [data, setData] = useState<product>();

  const id = useId();
  const [deleted, setDeleted] = useState<boolean>(false);
  function ProductBox(
    { title, value } : {
      title : string,
      value : number
    }
  ) : React.JSX.Element {
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
    if(id != 0){
      redirect(`/edit?id=${id}`);
    }
  };
  async function Delete(){
    await requestDelete(id);
    setDeleted(true);
  };

  if (deleted){
    redirect('/');
  }
  if ( !data ){
    requestGet({
      id
    }).then((d:product[])=>{
      setData(d[0]);
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
