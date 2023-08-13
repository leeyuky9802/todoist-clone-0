import { FirebaseProvider } from "./context"
import { Bar } from "./cpmponents/Bar"


function App() {
  

  return (
    <FirebaseProvider>
      <Bar />
    </FirebaseProvider>
  )
}

export default App;
