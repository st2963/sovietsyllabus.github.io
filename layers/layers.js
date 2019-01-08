var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Importedknowledge_0 = new ol.format.GeoJSON();
var features_Importedknowledge_0 = format_Importedknowledge_0.readFeatures(json_Importedknowledge_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Importedknowledge_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Importedknowledge_0.addFeatures(features_Importedknowledge_0);var lyr_Importedknowledge_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Importedknowledge_0, 
                style: style_Importedknowledge_0,
                title: '<img src="styles/legend/Importedknowledge_0.png" /> Imported knowledge'
            });var format_Locallyproducedknowledge_1 = new ol.format.GeoJSON();
var features_Locallyproducedknowledge_1 = format_Locallyproducedknowledge_1.readFeatures(json_Locallyproducedknowledge_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locallyproducedknowledge_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Locallyproducedknowledge_1.addFeatures(features_Locallyproducedknowledge_1);var lyr_Locallyproducedknowledge_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Locallyproducedknowledge_1, 
                style: style_Locallyproducedknowledge_1,
                title: '<img src="styles/legend/Locallyproducedknowledge_1.png" /> Locally produced knowledge'
            });

lyr_Importedknowledge_0.setVisible(true);lyr_Locallyproducedknowledge_1.setVisible(true);
var layersList = [baseLayer,lyr_Importedknowledge_0,lyr_Locallyproducedknowledge_1];
lyr_Importedknowledge_0.set('fieldAliases', {'uni name': 'uni name', 'uni librar': 'uni librar', 'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing': 'publishing', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliatio': 'affiliatio', 'field_20': 'field_20', 'field_21': 'field_21', 'other_titl': 'other_titl', });
lyr_Locallyproducedknowledge_1.set('fieldAliases', {'uni name': 'uni name', 'uni library link': 'uni library link', 'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing_house': 'publishing_house', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', 'field_20': 'field_20', 'field_21': 'field_21', 'other_title': 'other_title', });
lyr_Importedknowledge_0.set('fieldImages', {'uni name': 'TextEdit', 'uni librar': 'TextEdit', 'source_x': 'TextEdit', 'source_y': 'TextEdit', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'TextEdit', 'author_y': 'TextEdit', 'affiliatio': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'other_titl': 'TextEdit', });
lyr_Locallyproducedknowledge_1.set('fieldImages', {'uni name': 'TextEdit', 'uni library link': 'Hidden', 'source_x': 'Hidden', 'source_y': 'Hidden', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing_house': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'ValueMap', 'author_y': 'ValueMap', 'affiliation': 'TextEdit', 'field_20': 'Hidden', 'field_21': 'Hidden', 'other_title': 'TextEdit', });
lyr_Importedknowledge_0.set('fieldLabels', {'uni name': 'no label', 'uni librar': 'no label', 'source_x': 'no label', 'source_y': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'no label', 'publishing': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliatio': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'other_titl': 'no label', });
lyr_Locallyproducedknowledge_1.set('fieldLabels', {'uni name': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'header label', 'publishing_house': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', 'other_title': 'no label', });
lyr_Locallyproducedknowledge_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});