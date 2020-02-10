function moveToNewLayers(container, arr) {

    // check if anything is selected
    if (arr.length > 0) {
        var arrCount = arr.length
        // Loop through layers from the back, to preserve index
        for (var ii = arrCount - 1; ii >= 0; ii--) {
            // create a new layer for each item in the selection
            var newLayer = container.layers.add()
            // rename the new layer matching the name of the item
            newLayer.name = arr[ii].name
            // move the item inside the new layer
            arr[ii].move(newLayer, ElementPlacement.INSIDE)
        }
    } else {
        alert('Select at least an object before running this script')
    }
}