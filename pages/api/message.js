// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMessage } from "../../server/controllers/sendMessage";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sendMessage(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} not allowed`);
  }
};
