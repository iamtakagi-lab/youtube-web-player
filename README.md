# yotube-web-player

## Install
`docker-compose.yml`
```yml
version: '3.9'
services:
  app:
    container_name: youtube-web-player
    image: ghcr.io/iamtakagi/yotube-web-player:latest
    environment:
      - TZ=Asia/Tokyo
      - PORT=3030
    restart: unless-stopped
```

## LICENCE
undecided.
