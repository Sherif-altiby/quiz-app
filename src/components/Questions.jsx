import "../App.css";
import { useEffect, useState } from "react";
import { useQuestionContext } from "./Context/QuestionContext";

const Questions = ({ index }) => {
  const { setRightAnswer } = useQuestionContext();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/question.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, [index]);

  return (
    <div className="question_container">
      {data ? (
        <>
          <h1> {data[index]["title"]} </h1>
          <div className="answers">
            <ul>
              <li>
                <input
                  type="radio"
                  id="answer_1"
                  name="answer"
                  onChange={(e) => setRightAnswer(e.target.id)}
                />
                <label htmlFor="answer_1"> {data[index].answer_1} </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="answer_2"
                  name="answer"
                  onChange={(e) => setRightAnswer(e.target.id)}
                />
                <label htmlFor="answer_2"> {data[index].answer_2} </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="answer_3"
                  name="answer"
                  onChange={(e) => setRightAnswer(e.target.id)}
                />
                <label htmlFor="answer_3"> {data[index].answer_3} </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="answer_4"
                  name="answer"
                  onChange={(e) => setRightAnswer(e.target.id)}
                />
                <label htmlFor="answer_4"> {data[index].answer_4} </label>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
};

export default Questions;
