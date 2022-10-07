# Deno HTTP Server

## Cloning the repository

```bash
git clone https://github.com/kdaisho/hello-deno.git
```

Once cloned the repository, navigate into it. You'll be prompted to allow direnv to trigger dependency installation.

Type

```
direnv allow .
```

Nix automatically starts installing each dependency listed in `shell.nix`.

## Development

### Running a server

```bash
deno run -A --watch app.ts
```
_-A = alias for `--allow-all`. Use for development only_

_--watch = daemonizes the server_

### Formatter & linter (VS Code)

Adding this to `settings.json` enables formatting TS files on save.

```
"[deno]": {
  "deno.enable": true,
  "deno.lint": true,
  "editor.formatOnSave": true,
  "[typescript]": { "editor.defaultFormatter": "denoland.vscode-deno" }
}
```

## Dockerization

### Creating a network

A shared network is required for containerized servers to communicate each
other.

```
docker network create --driver=bridge deno-net
```

_deno-net = network name (can be anything)_

To see list of networks, type `docker network ls`.

### Building an image

```
docker build -t deno:1 .
```

_deno = name, 1 = tag_

### Running a container

```
docker run --network=deno-net --platform linux/amd64 -p 3009:3009 --name=deno-net --rm deno:1
```

_--network=deno-net = specifies to use a newly created `deno-net` network_

_--platform linux/amd64 = (optional) suppresses "WARNING: The requested image's
platform (linux/amd64) does not match the detected host platform"_

_-p = publish, 3009:3009 = maps port 3009 (right) to 3009 (left) to expose_

_--name=deno-net = specifies network for this container to use. other container
instances can join the network by referencing the name_

_--rm = cleans up after stopping the container_
