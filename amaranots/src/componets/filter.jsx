import React from "react";
import './filter.css'

function FilterSidebar() {
  return (
    <aside className="filter-sidebar">

      <div className="filter-section">
        <h3>Տարածաշրջան</h3>

        {[
          ["Դիլիջան", 179],
          ["Ծաղկաձոր", 103],
          ["Աշտարակ", 37],
          ["Գառնի", 35],
          ["Երևան", 25]
        ].map(([name, count]) => (
          <label className="filter-check" key={name}>
            <input type="checkbox" />
            <span>{name} {count}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Արժեք</h3>

        <div className="currency-options">
          <button className="active">֏</button>
          <button>$</button>
          <button>€</button>
          <button>₽</button>
        </div>

        <div className="price-inputs">
          <input placeholder="Սկսած" />
          <span>-</span>
          <input placeholder="Մինչև" />
        </div>
      </div>

      <div className="filter-section">
        <h3>Առանձին քնելուատեղի քանակ</h3>

        <div className="filter-counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Լողավազանի առկայություն</h3>

        <div className="filter-options">
          <button className="selected">Բոլորը</button>
          <button>Այո</button>
          <button>Ոչ</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Առանձին լոգասենյակի քանակը</h3>

        <div className="filter-counter">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Մահճակալների քանակ</h3>

        <div className="filter-options">
          <button className="selected">Բոլորը</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6 և ավելին</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Մասնակիցների քանակ</h3>

        <div className="filter-options">
          <button className="selected">Բոլորը</button>
          <button>1</button>
          <button>2</button>
          <button>3+</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Լողավազան</h3>

        <div className="filter-options">
          <button className="selected">Բոլորը</button>
          <button>Բաց</button>
          <button>Փակ</button>
          <button>Տաքացվող</button>
          <button>Առանց լողավազանի</button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Առավելություններ</h3>

        {[
          "Ջրաշխարհ",
          "Ջակուզի",
          "Բիլիարդ",
          "Սեղանի թենիս",
          "Բացօթյա տաղավար",
          "Փակ տաղավար",
          "Սաունա",
          "Մանղալ",
          "Խաղահրապարակ",
          "Wi-Fi",
          "Կայանատեղի"
        ].map(item => (
          <label className="filter-check" key={item}>
            <input type="checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </div>

    </aside>
  );
}

export default FilterSidebar;
