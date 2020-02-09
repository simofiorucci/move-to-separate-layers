#include 'getEmptyLayers.jsx'

function deleteEmptyLayers(container) {
    var emptyLayers = []
    getEmptyLayers(container, emptyLayers)

    for (var i = 0; i < emptyLayers.length; i++) {
        emptyLayers[i].remove()
    }
}