/*

Illustrator CC script for moving each element of a selection in a separate new layer with the same name of the element itself.
======
Usage:
1. Select at least one item
2. Run this script

*/

#include 'helpers/moveToNewLayers.jsx'

#include 'helpers/deleteEmptyLayers.jsx'

#include 'helpers/deleteNotMovedLayers.jsx'

function main() {
    // check if there is an active document to work on
    try {
        var activeDoc = app.activeDocument
    } catch (e) {
        alert(
            'Create a new document or open an existing one before running this script'
        )
        return
    }

    // design the UI panel structure
    var res = "dialog { \
  frame: Panel { text: 'Optional cleaning features', \
    options: Group { orientation: 'column', alignChildren: 'left', margins: [5, 15, 5, 5], \
      cbEmpty: Checkbox { text: 'Delete empty layers', value: false, enabled: true }, \
      cbOthers: Checkbox { text: 'Keep the moved layers only', value: false, enabled: true } \
    } \
  }, \
    runBtn: Button { text: 'Move layers', margins: 5, enabled: true, properties: { name: 'ok' } } \
}";

    win = new Window(res)

    // data insertions logic
    win.frame.options.cbOthers.onClick = function() {
        if (win.frame.options.cbOthers.value == true) {
            win.frame.options.cbEmpty.value = true
            win.frame.options.cbEmpty.enabled = false
        } else {
            win.frame.options.cbEmpty.enabled = true
        }
    }

    win.center()
    win.show()

    var selectedItems = activeDoc.selection

    // executing main script anyway
    moveToNewLayers(activeDoc, selectedItems)

    // executing optional scripts bases on checkbox values
    if (win.frame.options.cbOthers.value == true) {
        deleteNotMovedLayers(activeDoc, selectedItems.length)
    } else if (win.frame.options.cbEmpty.value == true) {
        deleteEmptyLayers(activeDoc)
    }
}

main()