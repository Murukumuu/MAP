var wms_layers = [];

var format_EnginneringBlockS_0 = new ol.format.GeoJSON();
var features_EnginneringBlockS_0 = format_EnginneringBlockS_0.readFeatures(json_EnginneringBlockS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnginneringBlockS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnginneringBlockS_0.addFeatures(features_EnginneringBlockS_0);
var lyr_EnginneringBlockS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnginneringBlockS_0, 
                style: style_EnginneringBlockS_0,
                popuplayertitle: 'Enginnering - Block S',
                interactive: false,
                title: '<img src="styles/legend/EnginneringBlockS_0.png" /> Enginnering - Block S'
            });
var format_FoundationWalls_1 = new ol.format.GeoJSON();
var features_FoundationWalls_1 = format_FoundationWalls_1.readFeatures(json_FoundationWalls_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoundationWalls_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoundationWalls_1.addFeatures(features_FoundationWalls_1);
var lyr_FoundationWalls_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoundationWalls_1, 
                style: style_FoundationWalls_1,
                popuplayertitle: 'Foundation(Walls)',
                interactive: false,
                title: '<img src="styles/legend/FoundationWalls_1.png" /> Foundation(Walls)'
            });
var format_Rooms_2 = new ol.format.GeoJSON();
var features_Rooms_2 = format_Rooms_2.readFeatures(json_Rooms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rooms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rooms_2.addFeatures(features_Rooms_2);
var lyr_Rooms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rooms_2, 
                style: style_Rooms_2,
                popuplayertitle: 'Rooms',
                interactive: true,
                title: '<img src="styles/legend/Rooms_2.png" /> Rooms'
            });

lyr_EnginneringBlockS_0.setVisible(true);lyr_FoundationWalls_1.setVisible(true);lyr_Rooms_2.setVisible(false);
var layersList = [lyr_EnginneringBlockS_0,lyr_FoundationWalls_1,lyr_Rooms_2];
lyr_EnginneringBlockS_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_FoundationWalls_1.set('fieldAliases', {'id': 'id', });
lyr_Rooms_2.set('fieldAliases', {'room_name': 'room_name', });
lyr_EnginneringBlockS_0.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_FoundationWalls_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Rooms_2.set('fieldImages', {'room_name': 'TextEdit', });
lyr_EnginneringBlockS_0.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'no label', });
lyr_FoundationWalls_1.set('fieldLabels', {'id': 'no label', });
lyr_Rooms_2.set('fieldLabels', {'room_name': 'inline label - visible with data', });
lyr_Rooms_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});