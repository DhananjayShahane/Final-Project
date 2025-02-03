import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () =>{
    const [serchParams,setSerchParams] = useSearchParams();
    const success = serchParams.get('success');
    const orderId = serchParams.get('orderId');
    console.log(orderId, success);
    
    const {URL} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayemt = async () =>{
        const response = await axios.post(URL+"/api/orders/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders")
        }else{
            navigate("/")
        }
    }
    
    useEffect(() => {
        verifyPayemt()
    },[])
    
    return(
        <>
         <div className="verify h-screen flex items-center justify-center">
                <div className="spinner border-4 border-t-4 border-gray-200 rounded-full w-12 h-12 animate-spin"></div>
            </div>
        </>
    )
}

export default Verify;