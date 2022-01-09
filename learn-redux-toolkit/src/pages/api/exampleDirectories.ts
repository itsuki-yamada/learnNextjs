import type { NextApiHandler } from 'next'
import path from "path";
import * as fs from "fs";

const exampleDirectory = path.join(process.cwd(), '/src/pages/examples');

const countHandler: NextApiHandler = async (request, response) => {
  // Get files names under example directory
  const fileNames = fs.readdirSync(exampleDirectory);

  response.json({ fileNames });
}

export default countHandler