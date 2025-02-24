import { categoryCardData } from "./data/categories";

const App = () => {
  return (
    <div className="container">
      <ul>
        {categoryCardData.map((card) => (
          <li key={`category-card-${card.id}`}>
            <a className="category-card" href={card.linkUrl}>
              <img alt="" src={card.imageUrl} />
              <div className="category-card__content">
                <h3 className="category-card__title">{card.title}</h3>
                <p className="category-card__description">Shop Now</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
