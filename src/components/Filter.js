import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);

  const handleChange = (event) => {
    const content = event.target.value;
    dispatch({
      type: "filter/filterList",
      payload: {
        search: content,
        state: anecdotes,
      },
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
