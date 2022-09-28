let
  pkgsUnstable = import (fetchTarball "http://nixos.org/channels/nixos-unstable/nixexprs.tar.xz") {};
in
  pkgs2205.mkShell {
    buildInputs = [
      pkgsUnstable.deno
      pkgsUnstable.docker-compose
    ];
  }