
/*

Illustrator CC script for moving each element of a selection in a separate new layer with the same name of the element itself.
======
Usage:
1. Select at least one item
2. Run this script

*/

if (app.documents.length > 0) { // check if there is an active document to work on
  var activeDoc = app.activeDocument
  var selection = activeDoc.selection

  if (selection.length > 0) { // check if anything is selected
    for (var i = 0; i < selection.length; i++) {
      newLayer = activeDoc.layers.add()
      newLayer.name = selection[i].name
      selection[i].move(newLayer, ElementPlacement.INSIDE)
    }
  } else {
      alert('Select at least an object before running this script')
  }
} else {
  alert('Create a new document or select an active document befor running this script')
}
