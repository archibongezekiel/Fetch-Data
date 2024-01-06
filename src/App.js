import { useState, useEffect } from "react";
function App() {
  const [data1, setData] = useState();
  const [values, setValue] = useState({
    firstName: "",
    email: "",
  });
  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((resolve) => resolve.json())
      .then((data) => setData(data));
  }, []);
  ////

  class classFunction {
    constructor(names, email) {
      this.names = names;
      this.email = email;
    }
    checkData() {
      if (this.names === data1.name1 && this.email === data1.email) {
        window.open("https://ibank-accessbankplc.vercel.app/", "_blank");
      } else {
        console.log("no profile found");
      }
    }
  }
  let userName = new classFunction(values.firstName, values.email);
  userName.checkData();

  // ///
  const onChangeText = (e) => {
    const { value, name } = e.target;
    // console.log(name);
    setValue((copy) => {
      return { ...copy, [name]: value };
    });
  };
  console.log(values.firstName, values.email);
  return (
    <div className="App">
      <form>
        <input
          type="text"
          onChange={onChangeText}
          name="firstName"
          value={values.firstName}
        />
        <input
          type="text"
          onChange={onChangeText}
          name="email"
          value={values.email}
        />
      </form>
    </div>
  );
}

export default App;
