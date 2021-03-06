import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const content = event.target.value;
    dispatch({
      type: "anecdote/filterList",
      payload: content,
    });
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} name="anecdote" />
    </div>
  );
};

export default Filter;
