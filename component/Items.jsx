import React from 'react'

function Items({X,addToCart,setAddToCart,CartCount,SetCartCount}) {
    function handleClick(X){
        SetCartCount(CartCount+1)
        setAddToCart(!addToCart)
      }
      function handleClickRemove(X){
        SetCartCount(CartCount-1)
        setAddToCart(!addToCart)
      }
  return (
    <>
{X.Rating? <div className="col mb-5">
              <div className="card h-100">
                  {X.sale?<div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:""}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center">
                          <h5 className="fw-bolder">{X.Name}</h5>
                          <div className="d-flex justify-content-center small text-warning mb-2">
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                              <div className="bi-star-fill"></div>
                          </div>
                          {X.strike?<span className="text-muted text-decoration-line-through">{X.strikeValue}</span>:""}
                          {X.Price}
                      </div>
                  </div>
                  {
                        addToCart?
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <button className="btn btn-outline-dark mt-auto" onClick={()=>handleClick()}>Add To Cart</button>
                        </div>
                        </div>
                        :
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <button className="btn btn-outline-dark mt-auto" onClick={()=>handleClickRemove()}>Remove From Cart</button>
                        </div>
                  </div>
                        }
              </div>
          </div>
          :
          <div className="col mb-5">
              <div className="card h-100">
              {X.sale?<div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:""}
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center">
                          <h5 className="fw-bolder">{X.Name}</h5>
                          {X.strike?<span className="text-muted text-decoration-line-through">{X.strikeValue}</span>:""}
                          {X.Price}
                      </div>
                  </div>
                  {
                        addToCart?
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <button className="btn btn-outline-dark mt-auto" onClick={()=>handleClick()}>Add To Cart</button>
                        </div>
                        </div>
                        :
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      <button className="btn btn-outline-dark mt-auto" onClick={()=>handleClickRemove()}>Remove From Cart</button>
                        </div>
                  </div>
                        }
              </div>
          </div>}
    </>
  )
}

export default Items