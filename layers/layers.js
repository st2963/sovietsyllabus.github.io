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
var format_Found_at_Polytech_Kharkiv_1959_0 = new ol.format.GeoJSON();
var features_Found_at_Polytech_Kharkiv_1959_0 = format_Found_at_Polytech_Kharkiv_1959_0.readFeatures(json_Found_at_Polytech_Kharkiv_1959_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Found_at_Polytech_Kharkiv_1959_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Found_at_Polytech_Kharkiv_1959_0.addFeatures(features_Found_at_Polytech_Kharkiv_1959_0);var lyr_Found_at_Polytech_Kharkiv_1959_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Found_at_Polytech_Kharkiv_1959_0, 
                style: style_Found_at_Polytech_Kharkiv_1959_0,
                title: '<img src="styles/legend/Found_at_Polytech_Kharkiv_1959_0.png" /> Found_at_Polytech_Kharkiv_1959'
            });var format_Polytech_Kharkiv_1959_1 = new ol.format.GeoJSON();
var features_Polytech_Kharkiv_1959_1 = format_Polytech_Kharkiv_1959_1.readFeatures(json_Polytech_Kharkiv_1959_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polytech_Kharkiv_1959_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Polytech_Kharkiv_1959_1.addFeatures(features_Polytech_Kharkiv_1959_1);var lyr_Polytech_Kharkiv_1959_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polytech_Kharkiv_1959_1, 
                style: style_Polytech_Kharkiv_1959_1,
                title: '<img src="styles/legend/Polytech_Kharkiv_1959_1.png" /> Polytech_Kharkiv_1959'
            });var format_Found_at_Telecommunication_Leningrad_1959copy_2 = new ol.format.GeoJSON();
var features_Found_at_Telecommunication_Leningrad_1959copy_2 = format_Found_at_Telecommunication_Leningrad_1959copy_2.readFeatures(json_Found_at_Telecommunication_Leningrad_1959copy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Found_at_Telecommunication_Leningrad_1959copy_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Found_at_Telecommunication_Leningrad_1959copy_2.addFeatures(features_Found_at_Telecommunication_Leningrad_1959copy_2);var lyr_Found_at_Telecommunication_Leningrad_1959copy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Found_at_Telecommunication_Leningrad_1959copy_2, 
                style: style_Found_at_Telecommunication_Leningrad_1959copy_2,
                title: '<img src="styles/legend/Found_at_Telecommunication_Leningrad_1959copy_2.png" /> Found_at_Telecommunication_Leningrad_1959 copy'
            });var format_Telecommunication_Leningrad_1959_3 = new ol.format.GeoJSON();
var features_Telecommunication_Leningrad_1959_3 = format_Telecommunication_Leningrad_1959_3.readFeatures(json_Telecommunication_Leningrad_1959_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telecommunication_Leningrad_1959_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Telecommunication_Leningrad_1959_3.addFeatures(features_Telecommunication_Leningrad_1959_3);var lyr_Telecommunication_Leningrad_1959_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Telecommunication_Leningrad_1959_3, 
                style: style_Telecommunication_Leningrad_1959_3,
                title: '<img src="styles/legend/Telecommunication_Leningrad_1959_3.png" /> Telecommunication_Leningrad_1959'
            });var format_Found_at_Polytech_Peter_the_Great_1959copy_4 = new ol.format.GeoJSON();
var features_Found_at_Polytech_Peter_the_Great_1959copy_4 = format_Found_at_Polytech_Peter_the_Great_1959copy_4.readFeatures(json_Found_at_Polytech_Peter_the_Great_1959copy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Found_at_Polytech_Peter_the_Great_1959copy_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Found_at_Polytech_Peter_the_Great_1959copy_4.addFeatures(features_Found_at_Polytech_Peter_the_Great_1959copy_4);var lyr_Found_at_Polytech_Peter_the_Great_1959copy_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Found_at_Polytech_Peter_the_Great_1959copy_4, 
                style: style_Found_at_Polytech_Peter_the_Great_1959copy_4,
                title: '<img src="styles/legend/Found_at_Polytech_Peter_the_Great_1959copy_4.png" /> Found_at_Polytech_Peter_the_Great_1959 copy'
            });var format_Polytech_Peter_the_Great_1959_5 = new ol.format.GeoJSON();
var features_Polytech_Peter_the_Great_1959_5 = format_Polytech_Peter_the_Great_1959_5.readFeatures(json_Polytech_Peter_the_Great_1959_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polytech_Peter_the_Great_1959_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Polytech_Peter_the_Great_1959_5.addFeatures(features_Polytech_Peter_the_Great_1959_5);var lyr_Polytech_Peter_the_Great_1959_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Polytech_Peter_the_Great_1959_5, 
                style: style_Polytech_Peter_the_Great_1959_5,
                title: '<img src="styles/legend/Polytech_Peter_the_Great_1959_5.png" /> Polytech_Peter_the_Great_1959'
            });

lyr_Found_at_Polytech_Kharkiv_1959_0.setVisible(true);lyr_Polytech_Kharkiv_1959_1.setVisible(true);lyr_Found_at_Telecommunication_Leningrad_1959copy_2.setVisible(true);lyr_Telecommunication_Leningrad_1959_3.setVisible(true);lyr_Found_at_Polytech_Peter_the_Great_1959copy_4.setVisible(true);lyr_Polytech_Peter_the_Great_1959_5.setVisible(true);
var layersList = [baseLayer,lyr_Found_at_Polytech_Kharkiv_1959_0,lyr_Polytech_Kharkiv_1959_1,lyr_Found_at_Telecommunication_Leningrad_1959copy_2,lyr_Telecommunication_Leningrad_1959_3,lyr_Found_at_Polytech_Peter_the_Great_1959copy_4,lyr_Polytech_Peter_the_Great_1959_5];
lyr_Found_at_Polytech_Kharkiv_1959_0.set('fieldAliases', {'author': 'author', 'title': 'title', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'tag4': 'tag4', 'field_7': 'field_7', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Polytech_Kharkiv_1959_1.set('fieldAliases', {'author': 'author', 'title': 'title', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'tag4': 'tag4', 'field_7': 'field_7', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Found_at_Telecommunication_Leningrad_1959copy_2.set('fieldAliases', {'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing_house': 'publishing_house', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Telecommunication_Leningrad_1959_3.set('fieldAliases', {'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing_house': 'publishing_house', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Found_at_Polytech_Peter_the_Great_1959copy_4.set('fieldAliases', {'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing_house': 'publishing_house', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Polytech_Peter_the_Great_1959_5.set('fieldAliases', {'source_x': 'source_x', 'source_y': 'source_y', 'index': 'index', 'author': 'author', 'title': 'title', 'publishing_house': 'publishing_house', 'page_count': 'page_count', 'tag1': 'tag1', 'tag2': 'tag2', 'tag3': 'tag3', 'publish_x': 'publish_x', 'publish_y': 'publish_y', 'publish_x2': 'publish_x2', 'publish_y2': 'publish_y2', 'author_x': 'author_x', 'author_y': 'author_y', 'affiliation': 'affiliation', });
lyr_Found_at_Polytech_Kharkiv_1959_0.set('fieldImages', {'author': 'TextEdit', 'title': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'tag4': 'TextEdit', 'field_7': 'TextEdit', 'publish_x': 'ValueMap', 'publish_y': 'ValueMap', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'TextEdit', 'author_y': 'TextEdit', 'affiliation': 'TextEdit', });
lyr_Polytech_Kharkiv_1959_1.set('fieldImages', {'author': 'TextEdit', 'title': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'tag4': 'TextEdit', 'field_7': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'TextEdit', 'author_y': 'TextEdit', 'affiliation': 'TextEdit', });
lyr_Found_at_Telecommunication_Leningrad_1959copy_2.set('fieldImages', {'source_x': 'ValueMap', 'source_y': 'ValueMap', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing_house': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'TextEdit', 'author_y': 'TextEdit', 'affiliation': 'TextEdit', });
lyr_Telecommunication_Leningrad_1959_3.set('fieldImages', {'source_x': 'TextEdit', 'source_y': 'TextEdit', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing_house': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'ValueMap', 'author_y': 'ValueMap', 'affiliation': 'TextEdit', });
lyr_Found_at_Polytech_Peter_the_Great_1959copy_4.set('fieldImages', {'source_x': 'ValueMap', 'source_y': 'ValueMap', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing_house': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'TextEdit', 'author_y': 'TextEdit', 'affiliation': 'TextEdit', });
lyr_Polytech_Peter_the_Great_1959_5.set('fieldImages', {'source_x': 'TextEdit', 'source_y': 'TextEdit', 'index': 'TextEdit', 'author': 'TextEdit', 'title': 'TextEdit', 'publishing_house': 'TextEdit', 'page_count': 'TextEdit', 'tag1': 'TextEdit', 'tag2': 'TextEdit', 'tag3': 'TextEdit', 'publish_x': 'TextEdit', 'publish_y': 'TextEdit', 'publish_x2': 'TextEdit', 'publish_y2': 'TextEdit', 'author_x': 'ValueMap', 'author_y': 'ValueMap', 'affiliation': 'TextEdit', });
lyr_Found_at_Polytech_Kharkiv_1959_0.set('fieldLabels', {'author': 'no label', 'title': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'tag4': 'no label', 'field_7': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Polytech_Kharkiv_1959_1.set('fieldLabels', {'author': 'no label', 'title': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'tag4': 'no label', 'field_7': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Found_at_Telecommunication_Leningrad_1959copy_2.set('fieldLabels', {'source_x': 'no label', 'source_y': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'no label', 'publishing_house': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Telecommunication_Leningrad_1959_3.set('fieldLabels', {'source_x': 'no label', 'source_y': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'no label', 'publishing_house': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Found_at_Polytech_Peter_the_Great_1959copy_4.set('fieldLabels', {'source_x': 'no label', 'source_y': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'no label', 'publishing_house': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Polytech_Peter_the_Great_1959_5.set('fieldLabels', {'source_x': 'no label', 'source_y': 'no label', 'index': 'no label', 'author': 'no label', 'title': 'no label', 'publishing_house': 'no label', 'page_count': 'no label', 'tag1': 'no label', 'tag2': 'no label', 'tag3': 'no label', 'publish_x': 'no label', 'publish_y': 'no label', 'publish_x2': 'no label', 'publish_y2': 'no label', 'author_x': 'no label', 'author_y': 'no label', 'affiliation': 'no label', });
lyr_Polytech_Peter_the_Great_1959_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});