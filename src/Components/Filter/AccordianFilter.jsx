import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import { Link , useNavigate} from 'react-router-dom'
  import {useEffect,useState} from 'react'
  import { data } from '../Navbar/BottomNavbarCategory'
  const AccordianFilter = ({ Q, setBrand , initialBrands}) => {
    const [person, setPerson] = useState(Q);
    const navigate = useNavigate();
  
   
    
    useEffect(() => {
        setBrand(initialBrands);
        // const handleChange = (e) => {
            // console.log(e);
            // if(e.target.value==Q) setPerson(e.target.value);
        // };
        // handleChange()
        console.log(person);
        // setBrand(initialBrands);
        
        return navigate(`/grocery/${person}`);
      }, [Q]);
    return (
      <>
        {data.map((item)=>(
             <Accordion allowToggle>
             <AccordionItem onChange={(e)=>setPerson(e.target.value)}>
               <h2>
                 <AccordionButton>
                   <Box as="span" flex="1" textAlign="left">
                     {item.category}
                   </Box>
                   <AccordionIcon />
                 </AccordionButton>
               </h2>
               {item.subcategory.map((el) => (
                 <AccordionPanel  pb={4}>
                   {/* <Link */}
                    {/* to={`/grocery/${el}`}>  */}
                     {el}
                 {/* </Link>  */}
                 </AccordionPanel>
               ))}
             </AccordionItem>
           </Accordion>
        ))}
      </>
    )
  }
  
  export default AccordianFilter