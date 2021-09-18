import { useContext, createContext, useState } from "react";

const themes = {
  light: {
    text: "Light Theme",
    background: "rgb(180, 187, 199)",
    
  },
  dark: {
    text: "Dark Mode",
    background: "rgb(99, 112, 133)",
  },
};

const ThemeContext = createContext();

export default function Context() {
const [show, setShow] = useState(false);
  const [valueTheme, setValueTheme] = useState(themes.dark);

    
    function num1() {
      setValueTheme(valueTheme === themes.light ? themes.dark : themes.light)
  }  
    function num2() {
      setShow(!show)
  }  
       
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
        className="contentWrapper"
        style={{ backgroundColor: valueTheme.background, padding:40 }}
          >
            <h1 className="kelompok">Tugas Modul 4 PRPLBK Kelompok 16 </h1>
              {show && (
                  <Content tema={valueTheme} />
              )}
              
            <button
                className="Button"
                onClick={() => { num1(); num2() }}>change
            </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
    const Data = [
    {
        name: "Aldy Sufriyanto",
        nim: "21120118120021",
        kel: "16",
        image: "https://source.unsplash.com/qsjM7zomoEI/230x230"
    },

    {
        name: "Yunita Andriana",
        nim: "21120118120031",
        kel: "16",
        image: "https://source.unsplash.com/QsxToVwo1iE/230x230"
    }
    ]
  return (
        <div>
          <div className="center">
                {Data.map((p) => (
                <div className="property-card">
                    <div className="property-image" style={{ backgroundImage: `url(${p.image})`}}>
                    <div className="property-image-title" >
                        </div>
                    </div>
                    <div className="property-description">
                    <h5 style={{ color:"#a265e7" }}> {p.name} </h5>
                        <p>{ p.nim }</p>
                    </div>
                </div>
                ))}
        </div>
      <Text/>
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      // tinggal uncomment aja
      // cara 1
      className="titleContext"
      style={{ color: theme.text }}
      // cara 2
      // className={`titleContext ${theme === themes.light ? "dark" : "light"}`}
    >
      {theme.text} diterapkan
    </p>
  );
}