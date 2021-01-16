import React from "react";

// Assets
import carIcon from "../../../assets/img/carIcon.svg";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  // Current ID active element
  const activeID = props.currentID;

  // List elements
  const markers = props.listMarkers;
  // Событие на поле поиска
  const onChangeSearch = props.onChangeSearch;

  // Disable default submition form
  const onSubmit = (event) => {
    event.preventDefault();
  };

  // Output list elements
  const listItem = markers.map((marker) => {
    return (
      <li
        className={`${styles.List_Item} ${
          activeID === marker.id ? styles.active : ""
        }`}
        key={marker.name}
        onClick={() => props.onChangePositionMap(marker)}
      >
        <img src={carIcon} alt="Автомобиль" />
        {marker.name}
      </li>
    );
  });

  return (
    <div className={styles.Sidebar}>
      <h3 className={styles.Title}>Доступные машины</h3>
      <form onSubmit={(event) => onSubmit(event)} className={styles.form}>
        <input
          onChange={(event) => {
            onChangeSearch(event);
          }}
          className={styles.searchInput}
          type="text"
          placeholder={"Поиск"}
        />
      </form>
      <ul className={styles.List}>{listItem}</ul>
    </div>
  );
};

export default Sidebar;
