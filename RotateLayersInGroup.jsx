#target photoshop

function rotateLayersInGroup(groupName, angle) {
    var doc = app.activeDocument;
    var theGroup = null;

    // ค้นหา Group ที่ชื่อว่า groupName
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

    // วนลูปทุก Layer ในกลุ่ม แล้วหมุน
    for (var j = 0; j < theGroup.artLayers.length; j++) {
        var layer = theGroup.artLayers[j];
        doc.activeLayer = layer;
        layer.rotate(angle);
    }

}

// เรียกใช้ฟังก์ชัน หมุน Group 2 ทีละ Layer 90 องศา
rotateLayersInGroup("Group 3", -90);
rotateLayersInGroup("Group 4", 180);
