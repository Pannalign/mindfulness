import React, { useRef, useEffect, useState } from 'react';
import * as cola from 'webcola';
import * as d3 from 'd3';

// Based on: https://github.com/tgdwyer/WebCola/blob/master/website/examples/smallnonoverlappinggraph.html
const Tree = ({ nodes, links }) => {
  const svgRef = useRef(null);
  const width = 800;
  const height = 600;
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const colad3 = cola.d3adaptor(d3)
    .linkDistance(120)
    .avoidOverlaps(true)
    .size([width, height]);


  useEffect(() => {
    const svg = d3.select(svgRef.current); // Select SVG element

    // Render nodes and links using colad3
    colad3
      .nodes(nodes)
      .links(links)
      .start();

    var link = svg.selectAll(".link")
      .data(links)
      .enter().append("line")
      .attr("class", "link");

    var node = svg.selectAll(".node")
      .data(nodes)
      .enter().append("rect")
      .attr("class", "node")
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height)
      .attr("rx", 5).attr("ry", 5)
      .style("fill", (d) => color(1))
      .call(colad3.drag);

    var label = svg.selectAll(".label")
      .data(nodes)
      .enter().append("text")
      .attr("class", "label")
      .text((d) => d.name)
      .call(colad3.drag);

    colad3.on('tick', () => {
        link
          .attr('x1', (d) => d.source.x)
          .attr('y1', (d) => d.source.y)
          .attr('x2', (d) => d.target.x)
          .attr('y2', (d) => d.target.y);

        node
          .attr('x', (d) => d.x - d.width / 2)
          .attr('y', (d) => d.y - d.height / 2);

        label
          .attr('x', (d) => d.x)
          .attr('y', function(d) {
            const h = this.getBBox().height;
            return d.y + h / 4;
          });
    });
  }, [nodes, links]);

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  )
}

export default Tree;
