ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32737").setExtent([481270.413028, 9247234.232475, 502737.189274, 9259102.645549]);
var wms_layers = [];

var lyr_sentinel_2025_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sentinel_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sentinel_2025_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4325468.340003, -758889.020254, 4343498.199660, -749122.177622]
        })
    });
var lyr_Sentnenl_2016_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sentnenl_2016<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sentnenl_2016_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4325468.340003, -758889.020254, 4343498.199660, -749122.177622]
        })
    });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI2025_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 2025<br />\
    <img src="styles/legend/NDVI2025_3_0.png" /> 0.0399<br />\
    <img src="styles/legend/NDVI2025_3_1.png" /> 0.8519<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2025_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4331220.000018, -758320.278188, 4335720.000042, -749529.217352]
        })
    });
var lyr_NDVI2015_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 2015<br />\
    <img src="styles/legend/NDVI2015_4_0.png" /> -0.0078<br />\
    <img src="styles/legend/NDVI2015_4_1.png" /> 0.8025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2015_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4331220.000018, -758320.278188, 4335720.000042, -749529.217352]
        })
    });
var lyr_NDVI2010_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 2010<br />\
    <img src="styles/legend/NDVI2010_5_0.png" /> -0.0545<br />\
    <img src="styles/legend/NDVI2010_5_1.png" /> 0.8473<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2010_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4331220.000018, -758320.278188, 4335720.000042, -749529.217352]
        })
    });
var lyr_slope_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'slope<br />\
    <img src="styles/legend/slope_6_0.png" /> 0.0000<br />\
    <img src="styles/legend/slope_6_1.png" /> 10.7912<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/slope_6.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489823.306053, 9248805.926961, 494306.212785, 9257464.692020]
        })
    });
var lyr_hillshade_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'hillshade<br />\
    <img src="styles/legend/hillshade_7_0.png" /> 147<br />\
    <img src="styles/legend/hillshade_7_1.png" /> 208<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/hillshade_7.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489823.306053, 9248805.926961, 494306.212785, 9257464.692020]
        })
    });
var lyr_DEM_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_8_0.png" /> 112<br />\
    <img src="styles/legend/DEM_8_1.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4331209.471198, -758304.333407, 4335724.094929, -749523.317322]
        })
    });
var lyr_aspect_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'aspect<br />\
    <img src="styles/legend/aspect_9_0.png" /> 0.0000<br />\
    <img src="styles/legend/aspect_9_1.png" /> 358.5312<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/aspect_9.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489823.306053, 9248805.926961, 494306.212785, 9257464.692020]
        })
    });
var lyr_slope_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'slope<br />\
    <img src="styles/legend/slope_10_0.png" /> 0.0025<br />\
    <img src="styles/legend/slope_10_1.png" /> 12.0280<br />\
    <img src="styles/legend/slope_10_2.png" /> 24.0535<br />\
    <img src="styles/legend/slope_10_3.png" /> 36.0790<br />\
    <img src="styles/legend/slope_10_4.png" /> 48.1045<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/slope_10.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [484968.414517, 9254188.333399, 487509.018787, 9256168.293751]
        })
    });
var lyr_DSM_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DSM<br />\
    <img src="styles/legend/DSM_11_0.png" /> 100.7528<br />\
    <img src="styles/legend/DSM_11_1.png" /> 112.5167<br />\
    <img src="styles/legend/DSM_11_2.png" /> 124.2805<br />\
    <img src="styles/legend/DSM_11_3.png" /> 136.0443<br />\
    <img src="styles/legend/DSM_11_4.png" /> 147.8082<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DSM_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4326315.563339, -752877.861204, 4328904.519416, -750818.669428]
        })
    });
var lyr_HILLSHADE_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILLSHADE<br />\
    <img src="styles/legend/HILLSHADE_12_0.png" /> 38<br />\
    <img src="styles/legend/HILLSHADE_12_1.png" /> 253<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_12.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [484968.414517, 9254188.333399, 487509.018787, 9256168.293751]
        })
    });
var lyr_DEM_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_13_0.png" /> 101.1443<br />\
    <img src="styles/legend/DEM_13_1.png" /> 136.2979<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4326318.378348, -752844.366031, 4328878.062420, -750836.019317]
        })
    });
var format_Contours_14 = new ol.format.GeoJSON();
var features_Contours_14 = format_Contours_14.readFeatures(json_Contours_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Contours_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_14.addFeatures(features_Contours_14);
var lyr_Contours_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_14, 
                style: style_Contours_14,
                popuplayertitle: 'Contours',
                interactive: true,
                title: '<img src="styles/legend/Contours_14.png" /> Contours'
            });
var lyr_Rainfall_2025_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2025<br />\
    <img src="styles/legend/Rainfall_2025_15_0.png" /> 1226.5883<br />\
    <img src="styles/legend/Rainfall_2025_15_1.png" /> 1251.6178<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2025_15.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Rainfall_2015_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2015<br />\
    <img src="styles/legend/Rainfall_2015_16_0.png" /> 1079.6633<br />\
    <img src="styles/legend/Rainfall_2015_16_1.png" /> 1096.0088<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2015_16.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Rainfall_2010_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rainfall_2010<br />\
    <img src="styles/legend/Rainfall_2010_17_0.png" /> 903.1277<br />\
    <img src="styles/legend/Rainfall_2010_17_1.png" /> 925.8512<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rainfall_2010_17.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_LST_2025_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_2025<br />\
    <img src="styles/legend/LST_2025_18_0.png" /> 28.4053<br />\
    <img src="styles/legend/LST_2025_18_1.png" /> 29.4312<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_2025_18.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [490000.000000, 9249000.000000, 494000.000000, 9257000.000000]
        })
    });
var lyr_LST_2015_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_2015<br />\
    <img src="styles/legend/LST_2015_19_0.png" /> 31.6302<br />\
    <img src="styles/legend/LST_2015_19_1.png" /> 34.1320<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_2015_19.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [490000.000000, 9249000.000000, 494000.000000, 9257000.000000]
        })
    });
var lyr_LST_2010_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST_2010<br />\
    <img src="styles/legend/LST_2010_20_0.png" /> 32.4382<br />\
    <img src="styles/legend/LST_2010_20_1.png" /> 33.5557<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_2010_20.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [490000.000000, 9249000.000000, 494000.000000, 9257000.000000]
        })
    });
var lyr_Evaporation_2025_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Evaporation_2025<br />\
    <img src="styles/legend/Evaporation_2025_21_0.png" /> 1049.0253<br />\
    <img src="styles/legend/Evaporation_2025_21_1.png" /> 1060.0779<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Evaporation_2025_21.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Evaporation_2015_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Evaporation_2015<br />\
    <img src="styles/legend/Evaporation_2015_22_0.png" /> 985.0460<br />\
    <img src="styles/legend/Evaporation_2015_22_1.png" /> 994.5250<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Evaporation_2015_22.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Evaporation_2010_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Evaporation_2010<br />\
    <img src="styles/legend/Evaporation_2010_23_0.png" /> 954.4913<br />\
    <img src="styles/legend/Evaporation_2010_23_1.png" /> 966.9890<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Evaporation_2010_23.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489833.760071, 9248790.212137, 494331.933794, 9257488.667282]
        })
    });
var lyr_Air_Temp_2015_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2015<br />\
    <img src="styles/legend/Air_Temp_2015_24_0.png" /> 26.0942<br />\
    <img src="styles/legend/Air_Temp_2015_24_1.png" /> 26.1222<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2015_24.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var lyr_Air_Temp_2010_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2010<br />\
    <img src="styles/legend/Air_Temp_2010_25_0.png" /> 26.1620<br />\
    <img src="styles/legend/Air_Temp_2010_25_1.png" /> 26.1863<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2010_25.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var lyr_Air_Temp_2020_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Air_Temp_2020<br />\
    <img src="styles/legend/Air_Temp_2020_26_0.png" /> 26.0461<br />\
    <img src="styles/legend/Air_Temp_2020_26_1.png" /> 26.0777<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Air_Temp_2020_26.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489813.883739, 9248829.937482, 494282.270515, 9257468.818582]
        })
    });
var format_joinedlayer_27 = new ol.format.GeoJSON();
var features_joinedlayer_27 = format_joinedlayer_27.readFeatures(json_joinedlayer_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_joinedlayer_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_joinedlayer_27.addFeatures(features_joinedlayer_27);
var lyr_joinedlayer_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_joinedlayer_27, 
                style: style_joinedlayer_27,
                popuplayertitle: 'joined layer',
                interactive: true,
    title: 'joined layer<br />\
    <img src="styles/legend/joinedlayer_27_0.png" /> Overserved<br />\
    <img src="styles/legend/joinedlayer_27_1.png" /> Served<br />\
    <img src="styles/legend/joinedlayer_27_2.png" /> Underserved<br />' });
var format_LowAccessibility2_28 = new ol.format.GeoJSON();
var features_LowAccessibility2_28 = format_LowAccessibility2_28.readFeatures(json_LowAccessibility2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_LowAccessibility2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowAccessibility2_28.addFeatures(features_LowAccessibility2_28);
var lyr_LowAccessibility2_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowAccessibility2_28, 
                style: style_LowAccessibility2_28,
                popuplayertitle: 'Low Accessibility 2',
                interactive: true,
                title: '<img src="styles/legend/LowAccessibility2_28.png" /> Low Accessibility 2'
            });
var format_ModerateAccessibility2_29 = new ol.format.GeoJSON();
var features_ModerateAccessibility2_29 = format_ModerateAccessibility2_29.readFeatures(json_ModerateAccessibility2_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_ModerateAccessibility2_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModerateAccessibility2_29.addFeatures(features_ModerateAccessibility2_29);
var lyr_ModerateAccessibility2_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModerateAccessibility2_29, 
                style: style_ModerateAccessibility2_29,
                popuplayertitle: 'Moderate Accessibility 2',
                interactive: true,
                title: '<img src="styles/legend/ModerateAccessibility2_29.png" /> Moderate Accessibility 2'
            });
var format_HighAccessibility1_30 = new ol.format.GeoJSON();
var features_HighAccessibility1_30 = format_HighAccessibility1_30.readFeatures(json_HighAccessibility1_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_HighAccessibility1_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighAccessibility1_30.addFeatures(features_HighAccessibility1_30);
var lyr_HighAccessibility1_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighAccessibility1_30, 
                style: style_HighAccessibility1_30,
                popuplayertitle: 'High Accessibility 1',
                interactive: true,
                title: '<img src="styles/legend/HighAccessibility1_30.png" /> High Accessibility 1'
            });
var format_500_31 = new ol.format.GeoJSON();
var features_500_31 = format_500_31.readFeatures(json_500_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_500_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500_31.addFeatures(features_500_31);
var lyr_500_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500_31, 
                style: style_500_31,
                popuplayertitle: '500',
                interactive: true,
                title: '<img src="styles/legend/500_31.png" /> 500'
            });
var format_1000_32 = new ol.format.GeoJSON();
var features_1000_32 = format_1000_32.readFeatures(json_1000_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_1000_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000_32.addFeatures(features_1000_32);
var lyr_1000_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000_32, 
                style: style_1000_32,
                popuplayertitle: '1000',
                interactive: true,
                title: '<img src="styles/legend/1000_32.png" /> 1000'
            });
var format_1500_33 = new ol.format.GeoJSON();
var features_1500_33 = format_1500_33.readFeatures(json_1500_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_1500_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1500_33.addFeatures(features_1500_33);
var lyr_1500_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1500_33, 
                style: style_1500_33,
                popuplayertitle: '1500',
                interactive: true,
                title: '<img src="styles/legend/1500_33.png" /> 1500'
            });
var format_markets_34 = new ol.format.GeoJSON();
var features_markets_34 = format_markets_34.readFeatures(json_markets_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_markets_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_markets_34.addFeatures(features_markets_34);
var lyr_markets_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_markets_34, 
                style: style_markets_34,
                popuplayertitle: 'markets',
                interactive: true,
                title: '<img src="styles/legend/markets_34.png" /> markets'
            });
var format_LowAccessibility1_35 = new ol.format.GeoJSON();
var features_LowAccessibility1_35 = format_LowAccessibility1_35.readFeatures(json_LowAccessibility1_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_LowAccessibility1_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowAccessibility1_35.addFeatures(features_LowAccessibility1_35);
var lyr_LowAccessibility1_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowAccessibility1_35, 
                style: style_LowAccessibility1_35,
                popuplayertitle: 'Low Accessibility 1',
                interactive: true,
                title: '<img src="styles/legend/LowAccessibility1_35.png" /> Low Accessibility 1'
            });
var format_ModerateAccessibility1_36 = new ol.format.GeoJSON();
var features_ModerateAccessibility1_36 = format_ModerateAccessibility1_36.readFeatures(json_ModerateAccessibility1_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_ModerateAccessibility1_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModerateAccessibility1_36.addFeatures(features_ModerateAccessibility1_36);
var lyr_ModerateAccessibility1_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModerateAccessibility1_36, 
                style: style_ModerateAccessibility1_36,
                popuplayertitle: 'Moderate Accessibility 1',
                interactive: true,
                title: '<img src="styles/legend/ModerateAccessibility1_36.png" /> Moderate Accessibility 1'
            });
var format_HighAccessibility_37 = new ol.format.GeoJSON();
var features_HighAccessibility_37 = format_HighAccessibility_37.readFeatures(json_HighAccessibility_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_HighAccessibility_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighAccessibility_37.addFeatures(features_HighAccessibility_37);
var lyr_HighAccessibility_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighAccessibility_37, 
                style: style_HighAccessibility_37,
                popuplayertitle: 'High Accessibility',
                interactive: true,
                title: '<img src="styles/legend/HighAccessibility_37.png" /> High Accessibility'
            });
var format_500m_38 = new ol.format.GeoJSON();
var features_500m_38 = format_500m_38.readFeatures(json_500m_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_500m_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500m_38.addFeatures(features_500m_38);
var lyr_500m_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500m_38, 
                style: style_500m_38,
                popuplayertitle: '500m',
                interactive: true,
                title: '<img src="styles/legend/500m_38.png" /> 500m'
            });
var format_1000m_39 = new ol.format.GeoJSON();
var features_1000m_39 = format_1000m_39.readFeatures(json_1000m_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_1000m_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000m_39.addFeatures(features_1000m_39);
var lyr_1000m_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000m_39, 
                style: style_1000m_39,
                popuplayertitle: '1000m',
                interactive: true,
                title: '<img src="styles/legend/1000m_39.png" /> 1000m'
            });
var format_1500m_40 = new ol.format.GeoJSON();
var features_1500m_40 = format_1500m_40.readFeatures(json_1500m_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_1500m_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1500m_40.addFeatures(features_1500m_40);
var lyr_1500m_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1500m_40, 
                style: style_1500m_40,
                popuplayertitle: '1500m',
                interactive: true,
                title: '<img src="styles/legend/1500m_40.png" /> 1500m'
            });
var format_joined_41 = new ol.format.GeoJSON();
var features_joined_41 = format_joined_41.readFeatures(json_joined_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_joined_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_joined_41.addFeatures(features_joined_41);
var lyr_joined_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_joined_41, 
                style: style_joined_41,
                popuplayertitle: 'joined',
                interactive: true,
    title: 'joined<br />\
    <img src="styles/legend/joined_41_0.png" /> Overserved<br />\
    <img src="styles/legend/joined_41_1.png" /> Served<br />\
    <img src="styles/legend/joined_41_2.png" /> Underserved<br />' });
var format_schools_42 = new ol.format.GeoJSON();
var features_schools_42 = format_schools_42.readFeatures(json_schools_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_schools_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_42.addFeatures(features_schools_42);
var lyr_schools_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_schools_42, 
                style: style_schools_42,
                popuplayertitle: 'schools',
                interactive: true,
                title: '<img src="styles/legend/schools_42.png" /> schools'
            });
var format_lowaccessibility1_43 = new ol.format.GeoJSON();
var features_lowaccessibility1_43 = format_lowaccessibility1_43.readFeatures(json_lowaccessibility1_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_lowaccessibility1_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowaccessibility1_43.addFeatures(features_lowaccessibility1_43);
var lyr_lowaccessibility1_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lowaccessibility1_43, 
                style: style_lowaccessibility1_43,
                popuplayertitle: 'low accessibility 1',
                interactive: true,
                title: '<img src="styles/legend/lowaccessibility1_43.png" /> low accessibility 1'
            });
var format_Moderateaccessibility1_44 = new ol.format.GeoJSON();
var features_Moderateaccessibility1_44 = format_Moderateaccessibility1_44.readFeatures(json_Moderateaccessibility1_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Moderateaccessibility1_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moderateaccessibility1_44.addFeatures(features_Moderateaccessibility1_44);
var lyr_Moderateaccessibility1_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moderateaccessibility1_44, 
                style: style_Moderateaccessibility1_44,
                popuplayertitle: 'Moderate accessibility 1',
                interactive: true,
                title: '<img src="styles/legend/Moderateaccessibility1_44.png" /> Moderate accessibility 1'
            });
var format_HighAccessibility_45 = new ol.format.GeoJSON();
var features_HighAccessibility_45 = format_HighAccessibility_45.readFeatures(json_HighAccessibility_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_HighAccessibility_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighAccessibility_45.addFeatures(features_HighAccessibility_45);
var lyr_HighAccessibility_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighAccessibility_45, 
                style: style_HighAccessibility_45,
                popuplayertitle: 'High Accessibility',
                interactive: true,
                title: '<img src="styles/legend/HighAccessibility_45.png" /> High Accessibility'
            });
var format_Servicearea1500m_46 = new ol.format.GeoJSON();
var features_Servicearea1500m_46 = format_Servicearea1500m_46.readFeatures(json_Servicearea1500m_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Servicearea1500m_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea1500m_46.addFeatures(features_Servicearea1500m_46);
var lyr_Servicearea1500m_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea1500m_46, 
                style: style_Servicearea1500m_46,
                popuplayertitle: 'Service area  1500m',
                interactive: true,
                title: '<img src="styles/legend/Servicearea1500m_46.png" /> Service area  1500m'
            });
var format_Servicearea1000m_47 = new ol.format.GeoJSON();
var features_Servicearea1000m_47 = format_Servicearea1000m_47.readFeatures(json_Servicearea1000m_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Servicearea1000m_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea1000m_47.addFeatures(features_Servicearea1000m_47);
var lyr_Servicearea1000m_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea1000m_47, 
                style: style_Servicearea1000m_47,
                popuplayertitle: 'Service area  1000m',
                interactive: true,
                title: '<img src="styles/legend/Servicearea1000m_47.png" /> Service area  1000m'
            });
var format_Servicearea500m_48 = new ol.format.GeoJSON();
var features_Servicearea500m_48 = format_Servicearea500m_48.readFeatures(json_Servicearea500m_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Servicearea500m_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea500m_48.addFeatures(features_Servicearea500m_48);
var lyr_Servicearea500m_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea500m_48, 
                style: style_Servicearea500m_48,
                popuplayertitle: 'Service area  500m',
                interactive: true,
                title: '<img src="styles/legend/Servicearea500m_48.png" /> Service area  500m'
            });
var format_joined_49 = new ol.format.GeoJSON();
var features_joined_49 = format_joined_49.readFeatures(json_joined_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_joined_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_joined_49.addFeatures(features_joined_49);
var lyr_joined_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_joined_49, 
                style: style_joined_49,
                popuplayertitle: 'joined',
                interactive: true,
    title: 'joined<br />\
    <img src="styles/legend/joined_49_0.png" /> Overserved<br />\
    <img src="styles/legend/joined_49_1.png" /> Served<br />\
    <img src="styles/legend/joined_49_2.png" /> Underserved<br />' });
var format_repro_hospital_50 = new ol.format.GeoJSON();
var features_repro_hospital_50 = format_repro_hospital_50.readFeatures(json_repro_hospital_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_repro_hospital_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_repro_hospital_50.addFeatures(features_repro_hospital_50);
var lyr_repro_hospital_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_repro_hospital_50, 
                style: style_repro_hospital_50,
                popuplayertitle: 'repro_hospital',
                interactive: true,
                title: '<img src="styles/legend/repro_hospital_50.png" /> repro_hospital'
            });
var lyr_Reclass_Weigschools_51 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reclass_Weigschools<br />\
    <img src="styles/legend/Reclass_Weigschools_51_0.png" /> 8691<br />\
    <img src="styles/legend/Reclass_Weigschools_51_1.png" /> 8895<br />\
    <img src="styles/legend/Reclass_Weigschools_51_2.png" /> 4300<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Reclass_Weigschools_51.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_Slope_52 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope<br />\
    <img src="styles/legend/Slope_52_0.png" /> 0.0000<br />\
    <img src="styles/legend/Slope_52_1.png" /> 9.6738<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_52.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4331205.762267, -758322.853809, 4335751.308079, -749510.698969]
        })
    });
var lyr_Reclass_Weigmarkets_53 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reclass_Weigmarkets<br />\
    <img src="styles/legend/Reclass_Weigmarkets_53_0.png" /> 7608<br />\
    <img src="styles/legend/Reclass_Weigmarkets_53_1.png" /> 8612<br />\
    <img src="styles/legend/Reclass_Weigmarkets_53_2.png" /> 5666<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Reclass_Weigmarkets_53.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_Reclass_Weigmarkets_54 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Reclass_Weigmarkets<br />\
    <img src="styles/legend/Reclass_Weigmarkets_54_0.png" /> 1<br />\
    <img src="styles/legend/Reclass_Weigmarkets_54_1.png" /> 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Reclass_Weigmarkets_54.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494334.576124, 9257475.929060]
        })
    });
var lyr_EucDist_school_55 = new ol.layer.Image({
        opacity: 1,
        
    title: 'EucDist_school<br />\
    <img src="styles/legend/EucDist_school_55_0.png" /> <= 313.7675<br />\
    <img src="styles/legend/EucDist_school_55_1.png" /> 313.7675 - 627.5350<br />\
    <img src="styles/legend/EucDist_school_55_2.png" /> 627.5350 - 941.3024<br />\
    <img src="styles/legend/EucDist_school_55_3.png" /> 941.3024 - 1255.0699<br />\
    <img src="styles/legend/EucDist_school_55_4.png" /> 1255.0699 - 1568.8374<br />\
    <img src="styles/legend/EucDist_school_55_5.png" /> 1568.8374 - 1882.6049<br />\
    <img src="styles/legend/EucDist_school_55_6.png" /> 1882.6049 - 2196.3724<br />\
    <img src="styles/legend/EucDist_school_55_7.png" /> 2196.3724 - 2510.1398<br />\
    <img src="styles/legend/EucDist_school_55_8.png" /> 2510.1398 - 2823.9073<br />\
    <img src="styles/legend/EucDist_school_55_9.png" /> > 2823.9073<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EucDist_school_55.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494329.344360, 9257496.646898]
        })
    });
var lyr_EucDist_roads_56 = new ol.layer.Image({
        opacity: 1,
        
    title: 'EucDist_roads<br />\
    <img src="styles/legend/EucDist_roads_56_0.png" /> 0.0000<br />\
    <img src="styles/legend/EucDist_roads_56_1.png" /> 1460.7289<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EucDist_roads_56.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494329.344360, 9257496.646898]
        })
    });
var lyr_EucDist_market1_57 = new ol.layer.Image({
        opacity: 1,
        
    title: 'EucDist_market1<br />\
    <img src="styles/legend/EucDist_market1_57_0.png" /> 0<br />\
    <img src="styles/legend/EucDist_market1_57_1.png" /> 5725.37<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EucDist_market1_57.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494329.344360, 9257496.646898]
        })
    });
var lyr_EucDist_building1_58 = new ol.layer.Image({
        opacity: 1,
        
    title: 'EucDist_building1<br />\
    <img src="styles/legend/EucDist_building1_58_0.png" /> 0.0000<br />\
    <img src="styles/legend/EucDist_building1_58_1.png" /> 675.9113<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/EucDist_building1_58.png",
            attributions: ' ',
            projection: 'EPSG:32737',
            alwaysInRange: true,
            imageExtent: [489821.265239, 9248787.038037, 494329.344360, 9257496.646898]
        })
    });
var format_Mkuzashp_59 = new ol.format.GeoJSON();
var features_Mkuzashp_59 = format_Mkuzashp_59.readFeatures(json_Mkuzashp_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Mkuzashp_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mkuzashp_59.addFeatures(features_Mkuzashp_59);
var lyr_Mkuzashp_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mkuzashp_59, 
                style: style_Mkuzashp_59,
                popuplayertitle: 'Mkuza shp',
                interactive: true,
                title: '<img src="styles/legend/Mkuzashp_59.png" /> Mkuza shp'
            });
var format_roads_60 = new ol.format.GeoJSON();
var features_roads_60 = format_roads_60.readFeatures(json_roads_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_roads_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_60.addFeatures(features_roads_60);
var lyr_roads_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_60, 
                style: style_roads_60,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_60.png" /> roads'
            });
var group_suitabilitymap = new ol.layer.Group({
                                layers: [lyr_Reclass_Weigschools_51,lyr_Slope_52,lyr_Reclass_Weigmarkets_53,lyr_Reclass_Weigmarkets_54,lyr_EucDist_school_55,lyr_EucDist_roads_56,lyr_EucDist_market1_57,lyr_EucDist_building1_58,],
                                fold: 'close',
                                title: 'suitability map'});
var group_hospitalaccesibility = new ol.layer.Group({
                                layers: [lyr_lowaccessibility1_43,lyr_Moderateaccessibility1_44,lyr_HighAccessibility_45,lyr_Servicearea1500m_46,lyr_Servicearea1000m_47,lyr_Servicearea500m_48,lyr_joined_49,lyr_repro_hospital_50,],
                                fold: 'close',
                                title: 'hospital accesibility'});
var group_SchoolAccessibility = new ol.layer.Group({
                                layers: [lyr_LowAccessibility1_35,lyr_ModerateAccessibility1_36,lyr_HighAccessibility_37,lyr_500m_38,lyr_1000m_39,lyr_1500m_40,lyr_joined_41,lyr_schools_42,],
                                fold: 'close',
                                title: 'School Accessibility'});
var group_MarketAccessibility = new ol.layer.Group({
                                layers: [lyr_joinedlayer_27,lyr_LowAccessibility2_28,lyr_ModerateAccessibility2_29,lyr_HighAccessibility1_30,lyr_500_31,lyr_1000_32,lyr_1500_33,lyr_markets_34,],
                                fold: 'close',
                                title: 'Market Accessibility'});
var group_airtemperaturevariation = new ol.layer.Group({
                                layers: [lyr_Air_Temp_2015_24,lyr_Air_Temp_2010_25,lyr_Air_Temp_2020_26,],
                                fold: 'close',
                                title: 'air temperature variation'});
var group_evaporationvariation = new ol.layer.Group({
                                layers: [lyr_Evaporation_2025_21,lyr_Evaporation_2015_22,lyr_Evaporation_2010_23,],
                                fold: 'close',
                                title: 'evaporation variation'});
var group_landsurfacetemperaturevariation = new ol.layer.Group({
                                layers: [lyr_LST_2025_18,lyr_LST_2015_19,lyr_LST_2010_20,],
                                fold: 'close',
                                title: 'land surface temperature variation'});
var group_rainfallvariation = new ol.layer.Group({
                                layers: [lyr_Rainfall_2025_15,lyr_Rainfall_2015_16,lyr_Rainfall_2010_17,],
                                fold: 'close',
                                title: 'rainfall variation'});
var group_Terrainanalysis = new ol.layer.Group({
                                layers: [lyr_slope_10,lyr_DSM_11,lyr_HILLSHADE_12,lyr_DEM_13,lyr_Contours_14,],
                                fold: 'close',
                                title: 'Terrain analysis'});
var group_studyareaterrainanalysis = new ol.layer.Group({
                                layers: [lyr_slope_6,lyr_hillshade_7,lyr_DEM_8,lyr_aspect_9,],
                                fold: 'close',
                                title: 'study area terrain analysis'});
var group_Changedetectionanalysis = new ol.layer.Group({
                                layers: [lyr_NDVI2025_3,lyr_NDVI2015_4,lyr_NDVI2010_5,],
                                fold: 'close',
                                title: 'Change detection analysis'});
var group_landcoverlanduse = new ol.layer.Group({
                                layers: [lyr_sentinel_2025_0,lyr_Sentnenl_2016_1,lyr_OpenStreetMap_2,],
                                fold: 'close',
                                title: 'landcover &landuse'});

lyr_sentinel_2025_0.setVisible(true);lyr_Sentnenl_2016_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_NDVI2025_3.setVisible(true);lyr_NDVI2015_4.setVisible(true);lyr_NDVI2010_5.setVisible(true);lyr_slope_6.setVisible(true);lyr_hillshade_7.setVisible(true);lyr_DEM_8.setVisible(true);lyr_aspect_9.setVisible(true);lyr_slope_10.setVisible(true);lyr_DSM_11.setVisible(true);lyr_HILLSHADE_12.setVisible(true);lyr_DEM_13.setVisible(true);lyr_Contours_14.setVisible(true);lyr_Rainfall_2025_15.setVisible(true);lyr_Rainfall_2015_16.setVisible(true);lyr_Rainfall_2010_17.setVisible(true);lyr_LST_2025_18.setVisible(true);lyr_LST_2015_19.setVisible(true);lyr_LST_2010_20.setVisible(true);lyr_Evaporation_2025_21.setVisible(true);lyr_Evaporation_2015_22.setVisible(true);lyr_Evaporation_2010_23.setVisible(true);lyr_Air_Temp_2015_24.setVisible(true);lyr_Air_Temp_2010_25.setVisible(true);lyr_Air_Temp_2020_26.setVisible(true);lyr_joinedlayer_27.setVisible(true);lyr_LowAccessibility2_28.setVisible(true);lyr_ModerateAccessibility2_29.setVisible(true);lyr_HighAccessibility1_30.setVisible(true);lyr_500_31.setVisible(true);lyr_1000_32.setVisible(true);lyr_1500_33.setVisible(true);lyr_markets_34.setVisible(true);lyr_LowAccessibility1_35.setVisible(true);lyr_ModerateAccessibility1_36.setVisible(true);lyr_HighAccessibility_37.setVisible(true);lyr_500m_38.setVisible(true);lyr_1000m_39.setVisible(true);lyr_1500m_40.setVisible(true);lyr_joined_41.setVisible(true);lyr_schools_42.setVisible(true);lyr_lowaccessibility1_43.setVisible(true);lyr_Moderateaccessibility1_44.setVisible(true);lyr_HighAccessibility_45.setVisible(true);lyr_Servicearea1500m_46.setVisible(true);lyr_Servicearea1000m_47.setVisible(true);lyr_Servicearea500m_48.setVisible(true);lyr_joined_49.setVisible(true);lyr_repro_hospital_50.setVisible(true);lyr_Reclass_Weigschools_51.setVisible(true);lyr_Slope_52.setVisible(true);lyr_Reclass_Weigmarkets_53.setVisible(true);lyr_Reclass_Weigmarkets_54.setVisible(true);lyr_EucDist_school_55.setVisible(true);lyr_EucDist_roads_56.setVisible(true);lyr_EucDist_market1_57.setVisible(true);lyr_EucDist_building1_58.setVisible(true);lyr_Mkuzashp_59.setVisible(true);lyr_roads_60.setVisible(true);
var layersList = [group_landcoverlanduse,group_Changedetectionanalysis,group_studyareaterrainanalysis,group_Terrainanalysis,group_rainfallvariation,group_landsurfacetemperaturevariation,group_evaporationvariation,group_airtemperaturevariation,group_MarketAccessibility,group_SchoolAccessibility,group_hospitalaccesibility,group_suitabilitymap,lyr_Mkuzashp_59,lyr_roads_60];
lyr_Contours_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_joinedlayer_27.set('fieldAliases', {'confidence': 'confidence', 'area_in_me': 'area_in_me', 'id_count': 'id_count', 'Classes': 'Classes', });
lyr_LowAccessibility2_28.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_ModerateAccessibility2_29.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_HighAccessibility1_30.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', });
lyr_500_31.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'type': 'type', 'start': 'start', });
lyr_1000_32.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'type': 'type', 'start': 'start', });
lyr_1500_33.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'type': 'type', 'start': 'start', });
lyr_markets_34.set('fieldAliases', {'id': 'id', 'Names': 'Names', });
lyr_LowAccessibility1_35.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_ModerateAccessibility1_36.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_HighAccessibility_37.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_500m_38.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'amenity': 'amenity', 'capacity': 'capacity', 'isced_leve': 'isced_leve', 'layer': 'layer', 'path': 'path', 'type': 'type', 'start': 'start', });
lyr_1000m_39.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'amenity': 'amenity', 'capacity': 'capacity', 'isced_leve': 'isced_leve', 'layer': 'layer', 'path': 'path', 'type': 'type', 'start': 'start', });
lyr_1500m_40.set('fieldAliases', {'id': 'id', 'Names': 'Names', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'amenity': 'amenity', 'capacity': 'capacity', 'isced_leve': 'isced_leve', 'layer': 'layer', 'path': 'path', 'type': 'type', 'start': 'start', });
lyr_joined_41.set('fieldAliases', {'confidence': 'confidence', 'area_in_me': 'area_in_me', 'id_count': 'id_count', 'classes': 'classes', });
lyr_schools_42.set('fieldAliases', {});
lyr_lowaccessibility1_43.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Moderateaccessibility1_44.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_HighAccessibility_45.set('fieldAliases', {'id': 'id', 'start': 'start', 'radius': 'radius', 'area': 'area', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Servicearea1500m_46.set('fieldAliases', {'id': 'id', 'name_1': 'name_1', 'type': 'type', 'start': 'start', });
lyr_Servicearea1000m_47.set('fieldAliases', {'id': 'id', 'name_1': 'name_1', 'type': 'type', 'start': 'start', });
lyr_Servicearea500m_48.set('fieldAliases', {'id': 'id', 'name_1': 'name_1', 'type': 'type', 'start': 'start', });
lyr_joined_49.set('fieldAliases', {'confidence': 'confidence', 'area_in_me': 'area_in_me', 'id_count': 'id_count', 'classes': 'classes', });
lyr_repro_hospital_50.set('fieldAliases', {'id': 'id', 'name_1': 'name_1', });
lyr_Mkuzashp_59.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_roads_60.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Contours_14.set('fieldImages', {'fid': 'Range', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_joinedlayer_27.set('fieldImages', {'confidence': 'TextEdit', 'area_in_me': 'TextEdit', 'id_count': 'TextEdit', 'Classes': 'TextEdit', });
lyr_LowAccessibility2_28.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_ModerateAccessibility2_29.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_HighAccessibility1_30.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', });
lyr_500_31.set('fieldImages', {'id': '', 'Names': '', 'type': '', 'start': '', });
lyr_1000_32.set('fieldImages', {'id': '', 'Names': '', 'type': '', 'start': '', });
lyr_1500_33.set('fieldImages', {'id': '', 'Names': '', 'type': '', 'start': '', });
lyr_markets_34.set('fieldImages', {'id': '', 'Names': '', });
lyr_LowAccessibility1_35.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_ModerateAccessibility1_36.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_HighAccessibility_37.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_500m_38.set('fieldImages', {'id': '', 'Names': '', 'osm_id': '', 'osm_type': '', 'name': '', 'amenity': '', 'capacity': '', 'isced_leve': '', 'layer': '', 'path': '', 'type': '', 'start': '', });
lyr_1000m_39.set('fieldImages', {'id': '', 'Names': '', 'osm_id': '', 'osm_type': '', 'name': '', 'amenity': '', 'capacity': '', 'isced_leve': '', 'layer': '', 'path': '', 'type': '', 'start': '', });
lyr_1500m_40.set('fieldImages', {'id': '', 'Names': '', 'osm_id': '', 'osm_type': '', 'name': '', 'amenity': '', 'capacity': '', 'isced_leve': '', 'layer': '', 'path': '', 'type': '', 'start': '', });
lyr_joined_41.set('fieldImages', {'confidence': 'TextEdit', 'area_in_me': 'TextEdit', 'id_count': 'TextEdit', 'classes': 'TextEdit', });
lyr_schools_42.set('fieldImages', {});
lyr_lowaccessibility1_43.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_Moderateaccessibility1_44.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_HighAccessibility_45.set('fieldImages', {'id': 'TextEdit', 'start': 'TextEdit', 'radius': 'TextEdit', 'area': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_Servicearea1500m_46.set('fieldImages', {'id': '', 'name_1': '', 'type': '', 'start': '', });
lyr_Servicearea1000m_47.set('fieldImages', {'id': '', 'name_1': '', 'type': '', 'start': '', });
lyr_Servicearea500m_48.set('fieldImages', {'id': '', 'name_1': '', 'type': '', 'start': '', });
lyr_joined_49.set('fieldImages', {'confidence': 'TextEdit', 'area_in_me': 'TextEdit', 'id_count': 'TextEdit', 'classes': 'TextEdit', });
lyr_repro_hospital_50.set('fieldImages', {'id': '', 'name_1': '', });
lyr_Mkuzashp_59.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_roads_60.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Contours_14.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_joinedlayer_27.set('fieldLabels', {'confidence': 'no label', 'area_in_me': 'no label', 'id_count': 'no label', 'Classes': 'no label', });
lyr_LowAccessibility2_28.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_ModerateAccessibility2_29.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_HighAccessibility1_30.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', });
lyr_500_31.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_1000_32.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_1500_33.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_markets_34.set('fieldLabels', {'id': 'no label', 'Names': 'no label', });
lyr_LowAccessibility1_35.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_ModerateAccessibility1_36.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_HighAccessibility_37.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_500m_38.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'isced_leve': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_1000m_39.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'isced_leve': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_1500m_40.set('fieldLabels', {'id': 'no label', 'Names': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'amenity': 'no label', 'capacity': 'no label', 'isced_leve': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_joined_41.set('fieldLabels', {'confidence': 'no label', 'area_in_me': 'no label', 'id_count': 'no label', 'classes': 'no label', });
lyr_schools_42.set('fieldLabels', {});
lyr_lowaccessibility1_43.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Moderateaccessibility1_44.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_HighAccessibility_45.set('fieldLabels', {'id': 'no label', 'start': 'no label', 'radius': 'no label', 'area': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Servicearea1500m_46.set('fieldLabels', {'id': 'no label', 'name_1': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea1000m_47.set('fieldLabels', {'id': 'no label', 'name_1': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea500m_48.set('fieldLabels', {'id': 'no label', 'name_1': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_joined_49.set('fieldLabels', {'confidence': 'no label', 'area_in_me': 'no label', 'id_count': 'no label', 'classes': 'no label', });
lyr_repro_hospital_50.set('fieldLabels', {'id': 'no label', 'name_1': 'no label', });
lyr_Mkuzashp_59.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_roads_60.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_roads_60.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});