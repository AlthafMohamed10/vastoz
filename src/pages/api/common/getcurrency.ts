import type { NextApiRequest, NextApiResponse } from 'next'
import currency from './currencyname.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  res.status(200).json(currency)
  
}
