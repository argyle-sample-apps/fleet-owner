import type { NextApiRequest, NextApiResponse } from "next";
import { formatISO, startOfMonth, subMonths } from "date-fns";
import { getAuthOpts } from "utils/auth";
import { getCookie } from "cookies-next";
import { fetchAll } from "utils/general";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = getCookie("argyle-x-user-id", { req, res });

  if (!userId) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const { headers } = getAuthOpts();

    const params = {
      user: userId,
      from_start_date: req.query.from,
      to_start_date: req.query.to,
      limit: 200,
    };

    const url = process.env.NEXT_PUBLIC_ARGYLE_BASE_URL + "/activities";
    const config = { headers, params };

    const data = await fetchAll<any>(url, config);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
