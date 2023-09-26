import type { NextApiRequest, NextApiResponse } from "next";
import { serializeCookie } from "@lib";
import {  APIURL } from "@lib/globalvalue";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { password, email } = req.body;

  const postData = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(APIURL + "/api/user/signin", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const cookie = serializeCookie("auth", { user: email }, { path: "/" });
      res.status(200).setHeader("Set-Cookie", cookie).json({ login: true,uname:response.data.uname });
    } else {
      res.status(404).send({ status: 404, msg: "invalid username password" });
    }
  } catch (err) {
    // Handle error
    res.status(404).send({ status: 404, msg: "invalid username password" });
  }
}
