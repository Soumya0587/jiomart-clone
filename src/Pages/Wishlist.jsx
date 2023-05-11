import { Box,Grid, GridItem } from '@chakra-ui/react'

import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import { getWishlistData,deleteWishlistItem } from "../Redux/WishlistReducer/WishlistActions";

import WishlistBox from '../Components/Wishlist/WishlistBox';

const Wishlist = () => {
    const dispatch = useDispatch();
    const [change, setChange] = useState(false);
    
    const { isLoading, isError, items } = useSelector((store) => {
      return {
        isLoading: store.WishlistReducer.isLoading,
        isError: store.WishlistReducer.isError,
        items: store.WishlistReducer.items,
      };
    });
    let userId= JSON.parse(localStorage.getItem("UserDetails"))?.userId
    const handleChange = () => {
      setChange(!change);
    };
    useEffect(()=>{
      dispatch(getWishlistData(userId))
    },[change])
    console.log(items);
  return (
    <Box>
        <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              w={"100%"}
              boxSizing={"border-box"}
            >
              {items?.map((item, i) => (
                <WishlistBox
                //   handleOption={AddToWishlist}
                //   option={"WISHLIST"}
                //   key={item._id}
                  props={item}
                  handleChange={handleChange}
                />
              ))}
            </Grid>
    </Box>
  )
}

export default Wishlist