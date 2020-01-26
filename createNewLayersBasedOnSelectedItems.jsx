
/*********
Illustrator CC script for creating a number of new layers
equal to the number of items selected.
======
Usage:
1. Select at least one item
2. Run this script
*********/

var activeDoc = app.activeDocument
var selection = activeDoc.selection

// check if anything is selected
if (selection.length > 0) {
  for (var i = 0; i < selection.length; i++) {
    newLayer = activeDoc.layers.add()
    selection[i].move(newLayer, ElementPlacement.INSIDE)
  }
} else {
  alert('Select an object before running this script')
}
