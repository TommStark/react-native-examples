/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {Fab} from './Fab';
import {useEffect} from 'react';

interface Props {
  markers?: MarkerProps[];
}

interface MarkerProps {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
}

export const Maps = ({markers = []}: Props) => {
  const {
    hasLocation,
    initialLocation,
    getCurrentLocation,
    followUserLocation,
    currentLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();

  const mapitaRef = useRef<MapView>();
  const following = useRef<Boolean>(true);
  const [showPolyline, setShowPolyline] = useState(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation;
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }

    const {longitude, latitude} = currentLocation;
    mapitaRef.current?.animateCamera({
      center: {longitude: longitude, latitude: latitude},
    });
  }, [currentLocation]);

  const centerPosition = async () => {
    following.current = true;
    const {longitude, latitude} = await getCurrentLocation();
    mapitaRef.current?.animateCamera({
      center: {longitude: longitude, latitude: latitude},
    });
  };

  return (
    <>
      {hasLocation && (
        <MapView
          ref={el => (mapitaRef.current = el!)}
          showsUserLocation
          onTouchStart={() => (following.current = false)}
          style={{flex: 1}}
          initialRegion={{
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markers.map((marker: MarkerProps, index: number) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
          {showPolyline && (
            <Polyline
              coordinates={routeLines}
              strokeColor={'black'}
              strokeWidth={3}
            />
          )}
        </MapView>
      )}

      <Fab
        onPress={centerPosition}
        iconName="compass"
        style={{position: 'absolute', bottom: 30, right: 30}}
      />
      <Fab
        onPress={() => setShowPolyline(value => !value)}
        iconName="brush-outline"
        style={{position: 'absolute', bottom: 100, right: 30}}
      />
    </>
  );
};
