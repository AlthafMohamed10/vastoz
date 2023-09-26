import type { NextApiRequest, NextApiResponse } from 'next'
import countries from './countrynames.json'
import axios from "axios";
import {  APIURL } from "@lib/globalvalue";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(APIURL + "/api/category/get", {
      headers: {
        "Content-Type": "application/json",
      },
    });
      res.status(200).json(response.data);
  } catch (err) {
    // Handle error
    res.status(404).send({ status: 404, msg: "invalid username password" });
  }
}
