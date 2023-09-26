import type { NextApiRequest, NextApiResponse } from "next";
import { serializeCookie } from "@lib";
import { APIURL } from "@lib/globalvalue";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    productname,
    vendorname,
    stock,
    price,
    discount,
    saleprice,
    commission,
    description,
    width,
    height,
    depth,
    vastlink,
   // images,
    productcategory,
    sellingcurrency,
    returnduration,
    details,
    deliverymethod,
    returnmethod
  
  } = req.body;
 // console.log(req.body)
  //res.status(201).json({ status: 201});

  const postData = {
  productname: productname,
  vendorname: vendorname,
  stock: stock,
  price: price,
  discount: discount,
  saleprice: saleprice,
  commission: commission,
  description: description,
  width: width,
  height: height,
  depth: depth,
  vastlink: vastlink,
  //images: "",
  productcategory: productcategory,
  sellingcurrency: sellingcurrency,
  returnduration: returnduration,
  details: details,
  deliverymethod: deliverymethod,
  returnmethod: returnmethod,
   };

  //console.log(postData)

  try {

    const response = await axios.post(APIURL + "/api/products/add", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
   // console.log(response)

    if (response.data.status === 209) {
      res.status(209).send({ status: 209, msg: "products  already exist" });
    }else if (response.data.status === 201){
      res.status(201).send({ status: 201, msg: "Successfully create a products  " });
    } 
    else {
      res.status(404).send({ status: 404, msg: "something went wrong" });
    }
  } catch (err) {
    // Handle error
    res.status(404).send({ status: 404, msg: "something went wrong" });
  }
}
