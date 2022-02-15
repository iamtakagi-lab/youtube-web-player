import ytdl from "ytdl-core";
import Koa from "koa";
import Router from "@koa/router";
import serve from "koa-static";

const app = new Koa();
const router = new Router();

type Quality = 'lowest' | 'highest' | 'highestaudio' | 'lowestaudio' | 'highestvideo' | 'lowestvideo' | string | number | string[] | number[];

const getYtdlStream = (url: string, quality: Quality) => {
  return ytdl(url, {quality});
};

router.get("/stream", async (ctx, next) => {
  const url = ctx.query.url;
  const quality = ctx.query.quality;
  if (!url || typeof url != "string") return next();
  if (!quality || typeof quality != "string") return next();
  ctx.type = "application/octet-stream";
  const youtubeStream = getYtdlStream(url, quality);
  ctx.body = youtubeStream;
});

app.use(serve("./public"));
app.use(router.routes());
app.use(router.middleware());
app.use(router.allowedMethods());
app.listen(process.env.PORT || 3030);