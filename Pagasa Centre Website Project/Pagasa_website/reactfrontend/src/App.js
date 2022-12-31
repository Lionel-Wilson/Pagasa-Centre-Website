import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navbar">
            <a >Home</a>
            <a >Info</a>
            <a >Gallery</a>
            <div className="subnav">
                <button className="subnavbtn">Archive<i className="fa fa-caret-down"></i></button>
                <div id="subnav-evang-content">
                    <a>Evangelistic Night</a>
                    <a>Bible Study</a>
                    <a>Wildsons</a>
                    <a>Cell Celebration</a>
                    <a>SOL &amp; LifeClass</a>
                </div>
            </div>
            <div className="subnav">
                <button className="subnavbtn">Cell Group<i className="fa fa-caret-down"></i></button>
                <div id="subnav-cellgroup-content">
                    <a>VIP</a>
                    <a>Need a cell</a>
                    <a>Cell Leaders</a>
                </div>
            </div>
            <a>Students</a>
            <a>Sunday School</a>
        </div>
            
    </div>
  );
}

export default App;
