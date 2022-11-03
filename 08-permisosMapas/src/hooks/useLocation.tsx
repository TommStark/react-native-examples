import {useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

interface Location {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [routeLines, setRouteLines] = useState<Location[]>([]);
  const [initialLocation, setInitialLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [currentLocation, setCurrentLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  const watchId = useRef<number>();
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getCurrentLocation().then(coords => {
      if (!isMounted.current) {
        return;
      }
      setInitialLocation(coords);
      setCurrentLocation(coords);
      setRouteLines(prev => [...prev, coords]);
      setHasLocation(true);
    });
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({latitude: coords.latitude, longitude: coords.longitude});
        },
        err => reject({err}),
        {
          enableHighAccuracy: true,
        },
      );
    });
  };

  const followUserLocation = () => {
    watchId.current = Geolocation.watchPosition(
      ({coords}) => {
        if (!isMounted.current) {
          return;
        }

        const location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };
        setCurrentLocation(location);
        setRouteLines(prev => [...prev, location]);
      },
      err => console.log(err),
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
      },
    );
  };

  const stopFollowUserLocation = () => {
    if (watchId.current) {
      Geolocation.clearWatch(watchId.current);
    }
  };

  return {
    hasLocation,
    initialLocation,
    getCurrentLocation,
    currentLocation,
    followUserLocation,
    stopFollowUserLocation,
    routeLines,
  };
};
