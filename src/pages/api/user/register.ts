import type { NextApiRequest, NextApiResponse } from "next";
import { serializeCookie } from "@lib";
import {  APIURL } from "@lib/globalvalue";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullname,cpassword,password, email } = req.body;

  const postData = {
    fullname: fullname,
    email: email,
    password: password,
    cpassword: cpassword,
  };
  if (password === cpassword){
  try {
    const response = await axios.post(APIURL + "/api/user/signup", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.status)
    if (response.data.status === 209) {
      res.status(209).send({ status: 209, msg: "User already exist" });
    }else if (response.data.status === 201){
      res.status(201).send({ status: 201, msg: "Successfully signup" });
    } 
    else {
      res.status(404).send({ status: 404, msg: "invalid username password" });
    }
  } catch (err) {
    // Handle error
    res.status(404).send({ status: 404, msg: "invalid username password" });
  }
} else {
  res.status(404).send({ status: 404, msg: "Password not match" });
}
}
