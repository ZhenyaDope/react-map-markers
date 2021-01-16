import React, { useEffect, useState } from "react";

// Leaflet library
import { MapContainer } from "react-leaflet";

// Components
import Sidebar from "./Sidebar/Sidebar.jsx";
import Map from "./Map/Map.jsx";
import Preloader from "./Preloader/Preloader.jsx";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../store/actionCreators";

// Assets
import styles from "./App.module.css";

function App() {
  // Dispatch from redux hooks
  const dispatch = useDispatch();

  // Markers
  const { items } = useSelector((listMarkers) => listMarkers.listMarkers);

  // Position map camera
  const [positionMap, setPositionMap] = useState({
    latitude: 48,
    longitude: 11,
    zoom: 5,
    id: 1,
  });

  // Flag download
  const [isLoading, setIsLoading] = useState(true);

  // Filter list markers
  const [visibleItems, setVisibleItems] = useState(items);

  // Fetch data on page loading
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json"
    )
      .then((data) => data.json())
      .then((res) => {
        dispatch(storeData(res));
        setIsLoading(false);
      });
  }, []);

  // Event onClick on list item
  const onChangePositionMap = ({ latitude, longitude, id }) => {
    setPositionMap({
      latitude,
      longitude,
      zoom: 7,
      id,
    });
  };

  // Search by list
  const onChangeSearch = (event) => {
    const inputValue = event.target.value;
    const result = items.filter((el) =>
      el.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ? el : null
    );
    setVisibleItems([...result]);
  };

  const { latitude, longitude, zoom, id } = positionMap;

  return (
    <div className={styles.App}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Sidebar
            onChangeSearch={onChangeSearch}
            onChangePositionMap={onChangePositionMap}
            listMarkers={visibleItems.length === 0 ? items : visibleItems}
            currentID={id}
          />

          <MapContainer
            className={styles.Map}
            center={[latitude, longitude]}
            zoom={zoom}
            scrollWheelZoom={true}
          >
            <Map
              currentID={id}
              markesList={visibleItems.length === 0 ? items : visibleItems}
              position={positionMap}
            />
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default App;
