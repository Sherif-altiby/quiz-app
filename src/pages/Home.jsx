import Questions from "../components/Questions";
import LoadingPage from "./LoadingPage";
import { useQuestionContext } from "../components/Context/QuestionContext";
import { useEffect, useState } from "react";

const Home = () => {
  const { answer, setAnswer, rightAnswer } = useQuestionContext();
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(120);
  const [degree, setDegree] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(countdown);
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

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
  }, []);

  const handleAnswer = () => {
    if (data[answer].right_answer === data[answer][rightAnswer]) {
      setDegree((x) => x + 1);
    }

    if (answer < 8) {
      console.log(answer);
      setAnswer((x) => x + 1);
    }
    if (answer === 7) {
      setDisplayResult(true);
    }
  };

  return (
    <>
      <LoadingPage />
      <div className="home">
        <div className="border"></div>
        {displayResult === false ? (
          <>
            <div className="category">
              <div className="category_name">
                Category: <span>htm</span>
              </div>
              <div className="questions_count">
                Qusetions Count: <span> {data?.length} </span>
              </div>
            </div>

            <Questions index={answer} />

            <button onClick={handleAnswer}> Submit Answer </button>
            <div className="progress">
              <div className={`span ` + `s` + answer}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="time">
                {minutes}:{seconds}
              </div>
            </div>
          </>
        ) : (
          <div className="display_result">
            <h2>
              YOU ANSWERED <span> {degree} </span> QUESTIONS FROM
              <span> 9 </span>
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
