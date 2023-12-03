import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

function Dashboard() {
    let navigate = useNavigate()
  return (<>
    <br/><br /><br /><br /><br /><br /><br />
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Button variant="primary" size="lg"  onClick={()=>navigate('/ShopNow')}>
    Click here to Shop
  </Button></div>
  </>
  )
}

export default Dashboard