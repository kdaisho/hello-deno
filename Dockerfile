FROM denoland/deno:alpine-1.25.4

EXPOSE 3000

WORKDIR /home/deno

USER deno

COPY deps.ts .

RUN deno cache deps.ts

ADD . .

RUN deno cache app.ts

CMD ["run", "--allow-net", "app.ts"]