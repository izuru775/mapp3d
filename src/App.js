import "aframe";
import React from "react";
import "aframe-environment-component";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    let dataUrl = "http://localhost:3001/api";

    fetch(dataUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          // Saving dbData using state 
          this.setState({
            isLoaded: true,
            items: result.data[0].vrObject[0]
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    // Loading 3dObject from S3 bucket
    let modelUrl =
      "https://foresthouse.s3.ap-southeast-2.amazonaws.com/forest_house/house.gltf";
      const dbData =this.state.items;
      console.log(typeof(dbData.url))
    return (
      <a-scene id="mainScene" background="color:black" environment="preset:forest">
        <a-entity
          scale={dbData.scale}
          rotation={dbData.rotation}
          position={dbData.position}
          gltf-model="#foresthouse"
        />
        <a-assets id="assets">
          <a-asset-item id="foresthouse" src={modelUrl} />
        </a-assets>
      </a-scene>
    );
  }
}

export default App;
