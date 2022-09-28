# Deno HTTP Server

## 1. Installing Nix and direnv
> Jump to _**2. Clone the repository**_ if both `Nix` and `direnv` are already installed to your machine.

### [`Nix`](https://nixos.org/)

A package manager. It's like Terraform for your machine.

```
sh <(curl -L https://nixos.org/nix/install)
```

### [direnv](https://direnv.net/)

direnv sets a scope for each directory to have a unique environment.


```
curl -sfL https://direnv.net/install.sh | bash
```

## 2. Clone the repository

```bash
git clone git@github.com:kdaisho/hello-deno.git
```

Once you've cloned this repo, Nix automatically starts installing each program listed in `shell.nix`. The environment is virtually limited within the directory where `.envrc` sits.

You'll be prompted to type
```
direnv allow .
```
This lets `direnv` override the environment within the current and subdirectories.

## 3. Running the server

```bash
deno run -A app.ts
```

For development, add `--watch` flag to demonize the server.

```bash
deno run -A --watch app.ts
```