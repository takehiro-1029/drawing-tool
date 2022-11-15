import { rest } from "msw";
import { baseurl,GetDogImageRes } from "../dogImageApi.infra";

export const dogImageApiHandlers = [
  rest.get(baseurl, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<GetDogImageRes>({
        status: "200",
        message: "https://images.dog.ceo//breeds//retriever-golden//n02099601_1580.jpg",
      })
    )
  ),
];
