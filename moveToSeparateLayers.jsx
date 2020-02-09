/*

Illustrator CC script for moving each element of a selection in a separate new layer with the same name of the element itself.
======
Usage:
1. Select at least one item
2. Run this script

*/

#include 'helpers/moveToNewLayers.jsx'

#include 'helpers/deleteEmptyLayers.jsx'

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

    moveToNewLayers(activeDoc)
    deleteEmptyLayers(activeDoc)
}

main()