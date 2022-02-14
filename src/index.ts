import ytdl from "ytdl-core";
import Koa from "koa";
import Router from "@koa/router";
import serve from "koa-static";

const app = new Koa();
const router = new Router();

const getYtdlStream = (url: string) => {
  return ytdl(url);
};

router.get("/stream", async (ctx, next) => {
  const url = ctx.query.url;
  if (!url || typeof url != "string") return next();
  const id = new URL(url).searchParams.get("v");
  if (!id || typeof id != "string") return next();
  ctx.type = "application/octet-stream";
  const youtubeStream = getYtdlStream(url);
  ctx.body = youtubeStream;
});

app.use(serve("./public"));
app.use(router.routes());
app.use(router.middleware());
app.use(router.allowedMethods());
app.listen(process.env.PORT || 3030);