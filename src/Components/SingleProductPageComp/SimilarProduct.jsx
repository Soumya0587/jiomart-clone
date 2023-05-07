import React from 'react'
import ProductSlider from '../Slider/ProductSlider'
import axios from "axios";
import { BASE_URL } from "../../Util/Constant";
const SimilarProduct = ({value}) => {
    const [SliderProduct,SetSliderProduct]=React.useState([])
   
    console.log(value);
    async function getSliderData(){
        let Sdata = await axios.get(`${BASE_URL}/grocery?sub_category=${value.sub_category}`)
        SetSliderProduct(Sdata.data)
       
      }
      React.useEffect(()=>{
        getSliderData()
      },[])
    //   console.log(SliderProduct);
  return (
    <div>
        <ProductSlider data={SliderProduct} value="Similar Products"/>
    </div>
  )
}

export default SimilarProduct