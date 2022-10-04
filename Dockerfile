FROM denoland/deno:alpine-1.25.4

WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache app.ts
ENV PORT 3011
EXPOSE 3011
CMD ["run", "--allow-net", "app.ts"]