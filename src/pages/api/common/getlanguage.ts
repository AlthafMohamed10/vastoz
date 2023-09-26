import type { NextApiRequest, NextApiResponse } from 'next'
import language from './languages.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  res.status(200).json(language)
}
