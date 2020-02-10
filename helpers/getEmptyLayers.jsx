function getEmptyLayers(container, arr) {
    var layers = container.layers

    for (var i = 0; i < layers.length; i++) {
        var currentLayer = layers[i]
        // initializing all layers with deletion flag set to true
        currentLayer.canDelete = true
        // process sublayers first
        if (currentLayer.layers.length > 0) {
            getEmptyLayers(currentLayer, arr)
        }

        // processing objects in current layer:
        // if layer has a sublayer with objects, deletion flag was previously set to false
        // ignore this layer and set its parent layer (container) to false as well, otherwise add to empty layers array
        if (currentLayer.pageItems.length == 0 && currentLayer.canDelete) {
            arr.push(currentLayer)
        }
        // if layer has objects, set deletion flag to false and its parent layer to false as well
        else {
            currentLayer.canDelete = false
            container.canDelete = false
        }
    }
}