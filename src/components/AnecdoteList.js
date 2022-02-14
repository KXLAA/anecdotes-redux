import React from "react";
import { useSelector, useDispatch } from "react-redux";
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch({
      type: "anecdote/voteOnAnecdote",
      payload: anecdote.id,
    });
    dispatch({
      type: "notification/createNotification",
      payload: anecdote.content,
    });
    setTimeout(() => {
      dispatch({
        type: "notification/removeNotification",
      });
    }, 5000);
  };

  return (
    <>
      <h1>TEST</h1>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
