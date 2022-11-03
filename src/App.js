import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";
import StepTwo from "./components/StepTwo";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header>
        <p>Simple Form</p>
      </header>
      <main>
        {visible === false ? (
          <Forms
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            visible={visible}
            setVisible={setVisible}
          />
        ) : (
          ""
        )}
        {visible === true ? (
          <StepTwo
            name={name}
            email={email}
            password={password}
            visible={visible}
            setVisible={setVisible}
          />
        ) : (
          ""
        )}
      </main>
      <footer>
        <p>Made at le Reacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
