import styles from "./DetailItemList.module.css";

function DetailItemList({ items, title }) {
  function onLinkClick({ query }) {
    window.open(
      `https://www.marvel.com/search?limit=20&query=${query}`,
      "_blank"
    );
  }

  return (
    <div className={styles.container}>
      <h2> {title} </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={onLinkClick}>
            <p>
              {index + 1} {item.name}{" "}
            </p>
            <p>🌐</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailItemList;
