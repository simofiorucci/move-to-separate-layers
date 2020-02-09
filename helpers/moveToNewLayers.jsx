function moveToNewLayers(container) {
    var selectedItems = container.selection

    // check if anything is selected
    if (selectedItems.length > 0) {
        for (var i = 0; i < selectedItems.length; i++) {
            // create a new layer for each item in the selection
            var newLayer = container.layers.add()
            // rename the new layer matching the name of the item
            newLayer.name = selectedItems[i].name
            // move the item inside the new layer
            selectedItems[i].move(newLayer, ElementPlacement.INSIDE)
        }
    } else {
        alert('Select at least an object before running this script')
    }
}