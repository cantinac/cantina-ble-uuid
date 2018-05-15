# Cantina UUID Generator Tool

As we're working on Bluetooth LE, we will sometimes need UUIDs for services or characteristics (or other things that need randomly generated UUIDs). This is a simple tool that generates 128 bit UUID v4 instances, returning them in a few handy formats.

## Dependencies

This tool is built using Node and NPM. You'll need a recent Node; if you don't have one, I recommend installing [Node Version Manager](https://github.com/creationix/nvm), then getting the latest LTS version (as of this writing, that's lts/carbon) like this:

```sh
nvm install lts/carbon
```

Once you've got Node, you can install the tool dependencies with:

```sh
npm install
```

## Running

It's pretty simple:

```sh
bin/ble-uuid
```

You'll get an output that looks like this:

```sh
New 128 Bit UUID v4 Generated:
UUID: 35848c69-4bf0-40dd-80cf-071eb25a4d38

array:
[0x35,0x84,0x8C,0x69,0x4B,0xF0,0x40,0xDD,0x80,0xCF,0x7,0x1E,0xB2,0x5A,0x4D,0x38]

array (reversed):
[0x38,0x4D,0x5A,0xB2,0x1E,0x7,0xCF,0x80,0xDD,0x40,0xF0,0x4B,0x69,0x8C,0x84,0x35]

uint8_t hex array:
{0x38,0x4D,0x5A,0xB2,0x1E,0x7,0xCF,0x80,0xDD,0x40,0xF0,0x4B,0x69,0x8C,0x84,0x35}

uint8_t hex array (reversed):
{0x35,0x84,0x8C,0x69,0x4B,0xF0,0x40,0xDD,0x80,0xCF,0x7,0x1E,0xB2,0x5A,0x4D,0x38}
```

You the new UUID as a formatted string, as the bytes of the UUID as Javascript/Java-compatible and uint8_t arrays (both in-order and reversed).

The uint8_t array versions are useful for dropping directly into certain C/C++ based code. For example, we have used the reversed version of these arrays with the Adafruit Bluefruit library for the nRF52 Feather.

## Using the UUID utility

This tool is a wrapper around the [UUID NPM package](https://registry.npmjs.org/uuid), meant to make it easy to get what we need when working with BLE services and characteristics.

You also use the CLI tool from the UUID package this relies on directly with:

```sh
npx uuid
```

This tools has many more options for generating UUIDs, so it might be worth looking at beyond the domain-specific use we are making.

If you want to see the options for that command, run `npx uuid --help`.