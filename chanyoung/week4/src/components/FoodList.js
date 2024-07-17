import './FoodList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content, createdAt } = item;

  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
    return (
      <ul className="FoodList">
        {items.map((item) => (
        //요소의 id 라는 프로퍼티가 각 요소를 구분할 수 있는 고유한 값이므로, 최상위 태그인 <li> 태그에 item.id 라는 값으로 key 지정
          <li key={item.id}> 
            <FoodListItem item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
  

export default FoodList;
