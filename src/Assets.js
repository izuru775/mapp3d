import 'aframe';
import React, {useState,useEffect} from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:3001/api")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data[0].vrObject[0]);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {//one two
        let modelUrl =
      "https://foresthouse.s3.ap-southeast-2.amazonaws.com/forest_house/house.gltf";
        console.log(items.url)
      return (
        <a-scene id="mainScene" background="color:black" environment="preset:forest">
        <a-entity
          scale={items.scale}
          rotation={items.rotation}
          position={items.position}
          gltf-model="#foresthouse"
        />
        <a-assets id="assets">
          <a-asset-item id="foresthouse" src={modelUrl} />
        </a-assets>
      </a-scene>
      );
    }
  }

  export default MyComponent;