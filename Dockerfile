FROM denoland/deno:alpine-1.25.4

WORKDIR /app
# USER deno
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache app.ts
ENV PORT 1020
EXPOSE 1020
CMD ["run", "--allow-net", "app.ts"]