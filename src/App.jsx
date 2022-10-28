import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Map, Marker } from "pigeon-maps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Map height={2000} defaultCenter={[50, 879, 4.6997]} defaultZoom={11}>
        <Marker width={300} anchor={[50.879, 4.6996]} />
      </Map>
    </div>
  );
}

export default App;
