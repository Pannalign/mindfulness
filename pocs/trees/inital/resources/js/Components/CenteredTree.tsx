import React from "react";
import Tree from "react-d3-tree";
import { scaleOrdinal } from 'd3';

const containerStyles = {
  width: '100%',
  height: '100vh',
}

const colorScale = scaleOrdinal()
  .domain(['Inquiry', 'Reflection', 'Response'])
  .range(['yellow', 'blue', 'green']); // Adjust colors as needed

interface CenteredTreeProps {}

export default class CenteredTree extends React.Component<CenteredTreeProps> {
  state = {}

  // TODO: Kenji - this breaks clicking on nodes to expand/collapse, and also renders improperly.
  // renderNode = (nodeData) => {
  //   console.log(nodeData);
  //   const color = colorScale(nodeData.nodeDatum.type);
  //   return (
  //     <g>
  //       <circle r="20" fill={color} />
  //       <text x="25" y="25" fill="black">{nodeData.nodeDatum.attributes.content}</text>
  //     </g>
  //   );
  // };


  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 4 // TODO: Kenji, why does this need to be /4 for it to be centered?
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={this.props.data}
          translate={this.state.translate}
          //renderCustomNodeElement={this.renderNode}
          orientation={'vertical'}
        />
      </div>
    );
  }
}
