import type { NextApiRequest, NextApiResponse } from "next";
import { serializeCookie } from "@lib";
import { APIURL } from "@lib/globalvalue";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    studioname,
    scategory,
    slanguage,
    scurrency,
    seotittle,
    adult,
    firstname,
    lastname,
    email,
    telephone,
    companyname,
    address,
    city,
    scountry,
    postcode,
    autoshipping,
    studiopagebio,
    aboutstudio,
    bannerimage,
    profileimage,
  } = req.body;
  //res.status(200).json({ status: 200});

  const postData = {
    studioname: studioname,
    category: scategory,
    language: slanguage,
    currency: scurrency,
    seotittle: seotittle,
    adult: adult,
    firstname: firstname,
    lastname: lastname,
    email: email,
    telephone: telephone,
    companyname: companyname,
    address: address,
    city: city,
    country: scountry,
    postcode: postcode,
    autoshipping: autoshipping,
    studiopagebio: studiopagebio,
    aboutstudio: aboutstudio,
    bannerimage: bannerimage,
    profileimage: profileimage,
  };

  console.log(postData)

  try {

    const response = await axios.post(APIURL + "/api/studio/add", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)

    if (response.data.status === 209) {
      res.status(209).send({ status: 209, msg: "Studio already exist" });
    }else if (response.data.status === 201){
      res.status(201).send({ status: 201, msg: "Successfully create a studio" });
    } 
    else {
      res.status(404).send({ status: 404, msg: "something went wrong" });
    }
  } catch (err) {
    // Handle error
    res.status(404).send({ status: 404, msg: "something went wrong" });
  }
}
