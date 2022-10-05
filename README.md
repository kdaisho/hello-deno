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


## Running the server

```bash
deno run --allow-net app.ts
```

For development, add `--watch` flag to demonize the server.

```bash
deno run --allow-net --watch app.ts
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
