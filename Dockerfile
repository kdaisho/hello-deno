FROM denoland/deno:alpine-1.25.4

WORKDIR /app
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache app.ts
ENV PORT 3009
EXPOSE 80
CMD ["run", "--allow-net", "app.ts"]