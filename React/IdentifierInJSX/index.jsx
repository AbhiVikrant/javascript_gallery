

const App = () => {
      let name = 'Alexa';
      let age = 24;
      let bool = true;
      let nul = null;
      let undefine = undefined;
      let symb = Symbol();;
      let str = 'Abhishek';
      let not = Number.nan;
      let obj = {
            car: 'BYD',
            color: 'blue',
            price: 30
      }
      const t = (props) => { return (typeof(props)) };
      return (
            <>
                  <h1>How to use the identifier in JSX and its value?</h1>
                  <h2>Hello {name}!</h2>
                  <h2>Age is {age} and data type is {t(age)}.</h2>
                  <h2>Boolean Data Type value is {bool} and data type is {t(bool)}.</h2>
                  <h2>Null Data Type Value is {nul} and data type is {t(nul)}.</h2>
                  <h2>Undefined  Data Type Value is {undefine} and data type is {t(undefine)}.</h2>
                  <h2>Symbol Data Type Value is {symb} and data type is {t(symb)}.</h2>
                  <h2>String Data Type Value is {str} and and data type is {t(str)}.</h2>
                  <h2>Nan Data Type Value is {not} and data type is {t(not)}.</h2>
                  <h2>Object Data Type  is {obj.car} and data type is {t(obj)}.</h2>
                  <h2>Car color is {obj.color} and data type is {t(obj.color)}.</h2>
                  <h2>Car price is {obj.price} and data type is {t(obj.price)}.</h2>


            </>
      )
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);