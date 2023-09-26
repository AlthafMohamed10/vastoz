import type { NextApiRequest, NextApiResponse } from 'next'
import countries from './countrynames.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  res.status(200).json(countries)
  
}
