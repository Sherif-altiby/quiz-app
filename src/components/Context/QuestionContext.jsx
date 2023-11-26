import { createContext, useContext, useState } from "react";

export const myContext = createContext();

const QuestionContext = ({ children }) => {
  const [answer, setAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(null);

  return (
    <myContext.Provider
      value={{ answer, setAnswer, rightAnswer, setRightAnswer }}
    >
      {children}
    </myContext.Provider>
  );
};

export default QuestionContext;

export const useQuestionContext = () => {
  return useContext(myContext);
};
