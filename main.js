markers = [
      {
        "id": "0001",
        "type": "RetailLocation",
        "address": "Fremont, CA 94538",
        "latitude":37.342773,
        "longitude":-121.870702,
        "$revenue": 10000000
      },
      {
        "id": "0002",
        "type": "RetailLocation",
        "address": "Newark, CA",
        "latitude":37.342973,
        "longitude":-121.870002,
        "$revenue": 3000000
      },
      {
        "id": "0003",
        "type": "red",
        "address": "4100-4198 Pleiades Pl,Union City, CA 94587",
       "latitude":37.343510,
        "longitude":-121.869102,
        "$revenue": 120000000
      },
      {
      "id": "0004",
      "type": "red",
      "address": "4100-4198 Pleiades Pl,Union City, CA 94587",
      "latitude":37.343910,
      "longitude":-121.868102,
      "$revenue": 120000000
    },
      {
        "id": "0005",
        "type": "RetailLocation",
        "address": "Burbank,Hayward, CA",
        "latitude":37.344110,
        "longitude":-121.869102,
        "$revenue": 5000000
      },
      {
        "id": "0006",
        "type": "red",
        "address": "Sugarloaf San Mateo, CA",
        "latitude":37.342110,
        "longitude":-121.871102,
        "$revenue": 300000
      },
    {
        "id": "0007",
        "type": "RetailLocation",
        "address": "San Carlos, CA",
         "latitude": 37.348670,
        "longitude": -121.900844,
        "$revenue": 3002000
      },
      {
        "id": "0007",
        "type": "red",
        "address": "San Carlos, CA",
         "latitude": 37.348570,
        "longitude": -121.901844,
        "$revenue": 3002000
      },
      {
        "id": "0008",
        "type": "RetailLocation",
        "address": "Santa Cruz County CA",
        "latitude": 37.348170,
        "longitude": -121.902844,
        "$revenue": 88999090
      },
      {
        "id": "0009",
        "type": "RetailLocation",
        "address": "Santa Clara County CA",
        "latitude": 37.347470,
        "longitude": -121.903844,
        "$revenue": 88999090
      },
      {
        "id": "0010",
        "type": "red",
        "address": "Santa Cruz County CA",
        "latitude": 37.346900,
        "longitude": -121.904844,
        "$revenue": 1000000
      }, 
    {
      "id": "0011",
      "type": "RetailLocation",
      "address": "Santa Clara, CA",
     "latitude": 37.346270,
     "longitude": -121.905444,
      "$revenue": 1000000
    },
    {
      "id": "0012",
      "type": "RetailLocation",
      "address": "Pleasanton, CA",
      "latitude": 37.345470,
     "longitude": -121.906444,
      "$revenue": 1000000
    },
      {
        "id": "0013",
        "type": "HeadQuarters",
        "address": "Mission District San Francisco, CA",
        "latitude": 37.753038,
        "longitude":  -122.423198,
        "$revenue": 1000000
      },
      {
        "id": "0014",
        "type": "RetailLocation",
        "address": "Pacifica, CA",
        "latitude": 37.594870,
        "longitude":  -122.473562,
        "$revenue": 50000
      },
    {
        "id": "0015",
        "type": "RetailLocation",
        "address": "Status: Active , C37.335993-121.890927S1",
        "latitude": 37.336693,
        "longitude": -121.889927,
        "$revenue": 50000
      },
    {
        "id": "0015",
        "type": "red",
        "address": "Status: Active , C37.335993-121.890927S1",
        "latitude": 37.336693,
        "longitude": -121.889927,
        "$revenue": 50000
      },
      {
        "id": "0015",
        "type": "RetailLocation",
        "address": "Status: Active , C37.335993-121.890927S1",
        "latitude": 37.335993,
        "longitude": -121.890927,
        "$revenue": 50000
      },
    {
        "id": "0015",
        "type": "RetailLocation",
        "address": "Status: Active , C37.335993-121.890927S2",
        "latitude": 37.335794,
        "longitude": -121.891927,
        "$revenue": 50000
      }
    ,
    {
        "id": "0015",
        "type": "RetailLocation",
        "address": "Status: Active , ID: C37.335993-121.890927S3",
        "latitude": 37.335094,
        "longitude": -121.892927,
        "$revenue": 50000
      }
    ,
    {
        "id": "0015",
        "type": "red",
        "address": "Status: Active , ID: C37.335993-121.890927S4",
        "latitude": 37.334794,
        "longitude": -121.893927,
        "$revenue": 50000
      }
    ,
    {
        "id": "0015",
        "type": "red",
        "address": 'Status: InActive , ID: C37.335993-121.890927S5',
        "latitude": 37.334794,
        "longitude": -121.893927,
        "$revenue": 50000
      }
    ]

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.334794, lng: -121.893927},
          zoom: 16,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
          
          for(x=0;x<markers.length;x++){
              addMarker(markers[x]);
          }
          function addMarker(prods){
            if(prods.type=="HeadQuarters"){
                icon="http://icons.veryicon.com/png/System/Onebit%201-3/flag%20white.png"
            }
            else if(prods.type=="RetailLocation"){
                icon="http://icons.veryicon.com/png/System/Farm%20Fresh/flag%20green.png"
            }
            else if(prods.type=="red"){
                icon="http://icons.veryicon.com/png/System/Farm%20Fresh/flag%20red.png"
            }
            else{
                icon="http://icons.veryicon.com/png/System/Farm%20Fresh/flag%20blue.png"
            }
            var marker = new google.maps.Marker({
            position: {lat:prods.latitude, lng:prods.longitude},
            map: map,
            icon:new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(30,30)), draggable: false
            
        })
            var infowindow = new google.maps.InfoWindow({
            content:prods.address
            });
            marker.addListener("mouseover",function(){
            infowindow.open(map,marker);
            })
            marker.addListener("mouseout",function(){
            infowindow.close(map,marker);
            })
        
          }
          
          
      }

function change(){
            val = $("#input-box").val();
   
            if(val=="San Fernando"){
                lat2 =  37.343680,
                lng2 = -121.871510
            }
            else if(val=="San Pedro"){
                lat2 = 37.348170,
                lng2 = -121.902844
            }
            else{
                lat2 = 37.334794,
                lng2 = -121.893927
            }
            map.setCenter(new google.maps.LatLng(lat2, lng2));
}



      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        data.addColumn('number', 'Intensity');

        data.addRows([
          [new Date(2017, 10, 5), 5],  [new Date(2017, 10, 10), 7],  [new Date(2017, 10, 15), 3],
          [new Date(2017, 11, 20), 1],  [new Date(2017, 11, 25), 3],  [new Date(2017, 11, 30), 4],
          [new Date(2017, 12, 5), 3],  [new Date(2017, 12, 10), 4],  [new Date(2017, 12, 15), 2],
          [new Date(2017, 12, 20), 5], [new Date(2017, 12, 25), 8], [new Date(2018, 1, 1), 6],
          [new Date(2018, 1, 5), 3], [new Date(2018, 1, 10), 3], [new Date(2018, 1, 15), 5],
          [new Date(2018, 1, 20), 3], [new Date(2018, 1, 25), 3], [new Date(2018, 1, 30), 5],
          [new Date(2018, 2, 5), 3], [new Date(2018, 2, 10), 3], [new Date(2018, 2, 15), 5],
          [new Date(2018, 2, 20), 3], [new Date(2018, 2, 25), 3],
          [new Date(2018, 3, 5), 3], [new Date(2018, 3, 10), 3], [new Date(2018, 3, 15), 5],
          [new Date(2018, 3, 20), 3], [new Date(2018, 3, 25), 3], [new Date(2018, 3, 30), 5],
          [new Date(2018, 4, 5), 3], [new Date(2018, 4, 10), 3], [new Date(2018, 4, 15), 25],
          [new Date(2018, 4, 20), 3], [new Date(2018, 4, 25), 13], [new Date(2018, 4, 30), 5],
          [new Date(2018, 5, 5), 3], [new Date(2018, 5, 10), 23], [new Date(2018, 5, 15), 5],
          [new Date(2018, 5, 20), 3], [new Date(2018, 5, 25), 5], [new Date(2018, 5, 30), 15],
          [new Date(2018, 6, 5), 3], [new Date(2018, 6, 10), 9], [new Date(2018, 6, 15), 5],
          [new Date(2018, 6, 20), 3], [new Date(2018, 6, 25), 18], [new Date(2018, 6, 30), 5],
          [new Date(2018, 7, 5), 3], [new Date(2018, 7, 10), 9], [new Date(2018, 7, 15), 5],
          [new Date(2018, 7, 20), 3], [new Date(2018, 7, 25), 3], [new Date(2018, 7, 30), 5],
        ]);


        var options = {
          title: 'Month wise Light Intensity',
          width: 1100,
          height: 400,
          hAxis: {
            format: 'M/d/yy',
            gridlines: {count: 15}
          },
          vAxis: {
            gridlines: {color: 'none'},
            minValue: 0
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart'));

        chart.draw(data, options);
      }




      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Number of Smart Nodes'],
          ['Active',     170],
          ['Inactice',      30]
        ]);

        var options = {
          title: 'Status'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
      }


 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['Sensor Type', 'Number of Sensors'],
          ['Temperature Sensor',     70],
          ['Motion Sensor',      55],
          ['Light Sensor',  75]
        ]);

        var options = {
          title: 'Sensors'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

        chart.draw(data, options);
      }
