// Create a document and an initial layer
var docRef = app.documents.add();
docRef.artLayers.add();

var layerSetRef = docRef.layerSets.add();
var layerRef = docRef.artLayers[0].duplicate(layerSetRef,
    ElementPlacement.PLACEATEND);
    
// Link the layers together so that you can move or transform the layers in a single statement.
var layerRef1 = docRef.artLayers.add();
var layerRef2 = docRef.artLayers.add();
layerRef1.link(layerRef2);
