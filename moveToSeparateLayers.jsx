/*

Illustrator CC script for moving each element of a selection in a separate new layer with the same name of the element itself.
======
Usage:
1. Select at least one item
2. Run this script

*/

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

function deleteEmptyLayers(container) {
	var emptyLayers = []
	getEmptyLayers(container, emptyLayers)

	for (var i = 0; i < emptyLayers.length; i++) {
		emptyLayers[i].remove()
	}
}

function getEmptyLayers(container, arr) {
	var layers = container.layers

	for (var i = 0; i < layers.length; i++) {
		var currentLayer = layers[i]
		// initialize all layers with deletion flag set to true
		currentLayer.canDelete = true
		// process sublayers first
		if (currentLayer.layers.length > 0) {
			getEmptyLayers(currentLayer, arr)
		}

		// then process objects in current layer
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

main()
