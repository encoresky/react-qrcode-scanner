import QrScanner from './components/QrScanner/QrScanner';
import Qruploader from './components/QrUploader/QrUploader';
function App() {
  return (
    <div className="App">
      <Qruploader/>
      <QrScanner/>
    </div>
  );
}

export default App;
