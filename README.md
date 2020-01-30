# blockchain

### set up

```bash

$brew update
$brew tap loomnetwork/client
$brew install loom
$loom spin weave-blueprint
$cd blueprint
$make deps
$make
$cd build
$loom init
$cp ../genesis.example.json genesis.json
$loom run
```


