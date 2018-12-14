import {Component, OnInit} from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'app-practice-four',
  templateUrl: './practice-four.component.html',
  styleUrls: ['./practice-four.component.css']
})
export class PracticeFourComponent implements OnInit {

  constructor() {
  }

  getMap() {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      center: [123.447791, 41.722535],
      zoom: 11,
      isHotspot: true
    });
    const marker = new AMap.Marker({
      position: new AMap.LngLat(123.447791, 41.722535),
      title: 'IT国际 美行科技'
    });
    map.add(marker);

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {

      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter()
      });

      const infoWindow = new SimpleInfoWindow({

        infoTitle: '<strong>IT国际</strong>',
        infoBody: '<p class="my-desc"><strong>美行科技。</strong> <br/> 哈哈哈哈哈</p >',

        offset: new AMap.Pixel(0, -31)
      });

      function openInfoWin() {
        infoWindow.open(map, marker.getPosition());
      }

      AMap.event.addListener(marker, 'click', function () {
        openInfoWin();
      });

      openInfoWin();
    });

    const placeSearch = new AMap.PlaceSearch();
    const infoWindow = new AMap.AdvancedInfoWindow({});
    map.on('hotspotclick', function (result) {
      placeSearch.getDetails(result.id, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });

    function placeSearch_CallBack(data) {
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      infoWindow.setContent(createContent(poiArr[0]));
      infoWindow.open(map, location);
    }

    function createContent(poi) {
      const s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
      s.push('<div>');
      return s.join('<br>');
    }

  }

  ngOnInit() {
    this.getMap();
  }
}
