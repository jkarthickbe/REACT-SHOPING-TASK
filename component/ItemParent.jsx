import React from 'react'
import Items from "../component/Items";

function ItemParent({X,addToCart,setAddToCart,CartCount,SetCartCount}) {
  return <>
  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {X.map((y, i) => {
        return (
          <Items
            X={y}
            key={i}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
            CartCount={CartCount}
            SetCartCount={SetCartCount}
          />
        );
      })}
    </div>
  </div>
</section>
</>
}

export default ItemParent