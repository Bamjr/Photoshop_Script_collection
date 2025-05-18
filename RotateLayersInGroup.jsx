#target photoshop

function rotateLayersInGroup(groupName, angle) {
    var doc = app.activeDocument;
    var theGroup = null;


    for (var i = 0; i < doc.layerSets.length; i++) {
        if (doc.layerSets[i].name == groupName) {
            theGroup = doc.layerSets[i];
            break;
        }
    }

    if (theGroup == null) {
        alert("ไม่พบ Group ที่ชื่อว่า: " + groupName);
        return;
    }

    for (var j = 0; j < theGroup.artLayers.length; j++) {
        var layer = theGroup.artLayers[j];
        doc.activeLayer = layer;
        layer.rotate(angle);
    }

}

// using the function
rotateLayersInGroup("Group 3", -90);
rotateLayersInGroup("Group 4", 180);
