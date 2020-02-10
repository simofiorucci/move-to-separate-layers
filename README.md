# Move selected objects to separate layers

> An Adobe Illustrator JS script that, given a selection of objects in an active document, separately moves them to new layers.

Whether you're a tidy and clean designer or not, it might be the chance that — once you're quite satisfied with your current project — your Illustrator artboard is quite messy. You know: a bit of hurry, deadlines approaching, the creative process — stuff like that. This piece of code helps you clean it up.

Just select the objects you want to keep and run this script: they will be put on top of your layers stack (each of them inside its own new layer), keeping their original Z-order.

> It comes particularly handy when you need to prepare you `.ai` file to be imported into some other Adobe Creative Suite software (i.e. After Effects — all the pieces of art you want to animate will be ready for the useful AE `Composition` option for importing layers.)

## Pre-requisites

Requires `moveToNewLayers.jsx`, `getEmptyLayers.jsx`, `deleteEmptyLayers.jsx` and `deleteNotMovedLayers` in the `/helpers` folder

## Initial scenario

An active `.ai` document with one or more objects selected.

## Usage

It couldn't be easier:

1. Create a new document or open an existing one
2. Design your art
3. Select the objects you want to move to separate layers
4. Run this script

## Additional options

This script comes with two additional "cleaning" options:

- **Delete empty layers** — the above moving process can generate some little garbage (i.e. an empty layer, in case you choose to move the only object which is inside a layer). Check this box to automatically get rid of them.
- **Keep the selected layers only** — if you're in a "drastic-cleaning" mood you can choose to delete all the layers except the one you select. Check the related box before running the script.

## Credits

`deleteEmptyLayers.jsx` is inspired by [this Ai Scripts example](https://aiscripts.com/delete-empty-layers-script/).
