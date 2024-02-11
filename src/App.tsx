import Button from "./components/Button";
import Container from "./components/Container";
import Greating from "./components/Greating";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Status from "./components/Status";
import Counter from "./components/state/Counter";
import User from "./components/state/User";
import Login from "./components/state/Login";
import { ThemeProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserProvider } from "./components/context/UserContext";
import Userrr from "./components/context/Userrr";

function App() {
  const obj = { fname: "ziad", lname: "ahmed" };
  const numArr = [1, 2, 3];
  const strArr = ["str1", "str2", "str3"];
  const arrOfObj = [
    { id: 2, title: "str" },
    { id: 2, title: "str" },
  ];

  return (
    <>
      <h1>types</h1>
      <Greating
        str="Ziad"
        num={480}
        bol={false}
        obj={obj}
        numArr={numArr}
        strArr={strArr}
        bolOrNum={500}
        yesOrNo="Yes"
        arrOfObj={arrOfObj}
        onClick={() => console.log("s")}
        onClick2={(val) => console.log(val)}
      />

      <h1>union</h1>
      <Status statusMsg="loading" />
      <Status statusMsg="error" />

      <h1>children props & optional</h1>
      <Heading>Ziad Ahmed String</Heading>
      <Heading num={500}>Ziad Ahmed String</Heading>

      <h1>children props</h1>
      <Oscar>
        <Heading num={4647}>Hello Oscar</Heading>
        Hello World 100
        <p>Hello P</p>
      </Oscar>

      <h1>event props</h1>
      {/* <Button handleClick={() => console.log("click")} /> */}
      <Button handleClick={(e, id) => console.log("click", e, id)} />

      {/* <Input /> */}
      <Input hanhleChange={(e) => console.log(e.target.value)} />

      <h1>Style</h1>
      <Container styles={{ color: "yellow", fontWeight: "bold" }} />

      <h1>useState</h1>
      <Login />

      <h1>useState</h1>
      <User />

      <h1>useReducer</h1>
      <Counter />

      <h1>useContext</h1>
      <ThemeProvider>
        <Box />
      </ThemeProvider>

      <h1>useContext</h1>
      <UserProvider>
        <Userrr />
      </UserProvider>
    </>
  );
}

export default App;
