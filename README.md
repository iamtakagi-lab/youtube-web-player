# youtube-web-player
サーバサイドからytdlのstreamをpipeで流してフロント側で再生することが出来るプレイヤーです。シーク機能はありません。

## Install
`docker-compose.yml`
```yml
version: '3.9'
services:
  app:
    container_name: youtube-web-player
    image: ghcr.io/iamtakagi/youtube-web-player:latest
    environment:
      - TZ=Asia/Tokyo
      - PORT=3030
    restart: unless-stopped
```

## LICENCE
undecided.
