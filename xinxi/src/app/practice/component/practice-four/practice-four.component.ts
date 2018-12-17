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

  public information = JSON.parse(localStorage.getItem('information'));

  public markerIT = new AMap.Marker({
    position: new AMap.LngLat(123.447791, 41.722535),
    title: 'IT国际 美行科技'
  });

  public placeSearch = new AMap.PlaceSearch();
  public infoWindow = new AMap.AdvancedInfoWindow({});

  ngOnInit() {
    const map = new AMap.Map('container', {
      resizeEnable: true,
      center: [123.447791, 41.722535],
      zoom: 11,
      isHotspot: true
    });
    map.add(this.markerIT);

    AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
      const marker = new AMap.Marker({
        map: map,
        zIndex: 9999999,
        position: map.getCenter()
      });

      const infoWindow = new SimpleInfoWindow({

        infoTitle: '<strong>IT国际</strong>',
        infoBody: '<p class="my-desc"><strong>个人信息</strong> ' +
          '<br/> 姓名：' + this.information.name + '' +
          '<br/> 性别：' + this.information.sex + '' +
          '<br/> 年龄：' + this.information.age + '' +
          '<br/> 电话：' + this.information.tel + '' +
          '<br/> 地址：' + this.information.address + '</p >',

        offset: new AMap.Pixel(0, -31)
      });

      let openInfoWin = () => {
        infoWindow.open(map, marker.getPosition());
      };

      AMap.event.addListener(marker, 'click', () => {
        openInfoWin();
      });
    });

    map.on('hotspotclick', (result) => {
      this.placeSearch.getDetails(result.id, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          placeSearch_CallBack(result);
        }
      });
    });

    let placeSearch_CallBack = (data) => {
      const poiArr = data.poiList.pois;
      const location = poiArr[0].location;
      this.infoWindow.setContent(createContent(poiArr[0]));
      this.infoWindow.open(map, location);
    };

    let createContent = (poi) => {
      const s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + '地址：' + poi.address);
      s.push('电话：' + poi.tel);
      s.push('类型：' + poi.type);
      s.push('<div>');
      return s.join('<br>');
    };
  }
}
