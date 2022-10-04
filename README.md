# Deno HTTP Server

## 1. Installing Nix and direnv

> Jump to _**2. Clone the repository**_ if both `Nix` and `direnv` are already
> installed to your machine.

### [`Nix`](https://nixos.org/)

A package manager. It's like Terraform for your machine.

#### Installation

```
sh <(curl -L https://nixos.org/nix/install)
```

### [direnv](https://direnv.net/)

direnv sets a scope for each directory to have a unique environment. (below command should work for zsh/fish/bash)

#### Installation

```
curl -sfL https://direnv.net/install.sh | bash
```

_If installation doesn't complete due to errors related to PATH, install [deno](https://deno.land/manual@v1.26.0/getting_started/installation) first_

#### Setup
For direnv to work properly it needs to be hooked into the shell. Once the hook is configured, restart your shell for direnv to be activated.

BASH

Add the following line at the end of the ~/.bashrc file:
```
eval "$(direnv hook bash)"
```
ZSH

Add the following line at the end of the ~/.zshrc file:
```
eval "$(direnv hook zsh)"
```

Make sure it appears even after rvm, git-prompt and other shell extensions that manipulate the prompt.

## 2. Clone the repository

```bash
git clone git@github.com:kdaisho/hello-deno.git
```

Once you've cloned this repo, Nix automatically starts installing each program
listed in `shell.nix`. The environment is virtually limited within the directory
where `.envrc` sits.

You'll be prompted to type

```
direnv allow .
```

This lets `direnv` override the environment within the current and
subdirectories.

## 3. Running the server

```bash
deno run -A app.ts
```

For development, add `--watch` flag to demonize the server.

```bash
deno run -A --watch app.ts
```

## 4. Dockerization

### Create a network

A shared network is required for containerized servers to communicate each
other.

```
docker network create --driver=bridge deno-net
```

_deno-net = network name (can be anything)_

To see list of networks, type `docker network ls`.

### Build an image

```
docker build -t deno:1 .
```

_deno = name, 1 = tag_

### Run a container

```
docker run --network=deno-net --platform linux/amd64 -p 1025:1025 --name=deno-net --rm deno:1
```

_--network=deno-net = specifies to use a newly created `deno-net` network_

_--platform linux/amd64 = (optional) suppresses "WARNING: The requested image's
platform (linux/amd64) does not match the detected host platform"_

_-p = publish, 1025:1025 = maps port 1025 (right) to 1025 (left) to expose_

_--name=deno-net = specifies network for this container to use. other container
instances can join the network by referencing the name_

_--rm = cleans up after stopping the container_
