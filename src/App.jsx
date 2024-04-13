import "./App.css";
import Description from "./components/description/Description";
import Notification from "./components/notification/Notification";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import { useEffect, useState } from "react";

function App() {
  const getInitialValues = () => {
    const storageValues = localStorage.getItem("values");
    return storageValues !== null
      ? JSON.parse(storageValues)
      : {
          good: 0,
          bad: 0,
          neutral: 0,
        };
  };

  const [values, setValues] = useState(getInitialValues);

  const total = values.good + values.bad + values.neutral;
  const positivFeedBack = Math.round((values.good / total) * 100);

  const updateFeedback = (key) => {
    key === "resetAll"
      ? setValues({
          good: 0,
          bad: 0,
          neutral: 0,
        })
      : setValues({
          ...values,
          [key]: values[key] + 1,
        });
  };

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} show={total} />
      {total > 0 ? (
        <Feedback
          good={values.good}
          bad={values.bad}
          neutral={values.neutral}
          total={total}
          positivFeedBack={positivFeedBack}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
