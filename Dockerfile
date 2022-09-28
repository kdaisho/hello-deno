FROM denoland/deno:1.25.4

USER deno

WORKDIR /home/deno

COPY --chown=deno:deno . /home/deno

EXPOSE 3000

CMD ["deno", "run", "--allow-net", "app.ts"]