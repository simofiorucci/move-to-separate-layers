function deleteNotMovedLayers(container, num) {
    var allLayers = container.layers
    var layersToRemove = []

    // getting the array of layers to remove
    for (var i = 0; i < allLayers.length - num; i++) {
        layersToRemove[i] = allLayers[i + num]
    }

    // remove all the layers from that array
    for (var k = 0; k < layersToRemove.length; k++) {
        layersToRemove[k].remove()
    }
}