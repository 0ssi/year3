// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerlessMysql } from 'serverless-mysql'
import withMySQL from '../../_server/utils/withMySQL'

type Data = {
  id: number,
  name: string,
  score: number
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
  db: ServerlessMysql
) {
  const rows = await db.query<Data[]>('SELECT * FROM score ORDER BY score ASC')

  res.status(200).json(rows);
}

export default withMySQL(handler)