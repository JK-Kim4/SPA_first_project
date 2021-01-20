/*global kakao*/
import React, { useEffect } from "react";
import "./Map.css";


export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.568113, 126.825376),
      level: 2,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        37.568113,
        126.825376
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
  <div className="map__container">
    <div id="map" style={{ width: "750px", height: "750px" }}></div>
    <span className="location">위치 : 서울 강서구 마곡서로 158 센트럴타워 2차 409호</span>
  </div>)
  ;
}