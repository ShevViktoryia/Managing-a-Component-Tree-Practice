type ToDoItemPropsType = {
  text: string;
  id: number;
  deleteItem: (id: number) => void;
};

function ToDoItem(props: ToDoItemPropsType) {
  return (
    <div
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
