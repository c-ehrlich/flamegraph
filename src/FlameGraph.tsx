import { useEffect, useRef, useState } from "react";
import { flamegraph, StackFrame } from "d3-flame-graph";
import * as d3 from "d3";
import "d3-flame-graph/dist/d3-flamegraph.css";

export const FlameGraph = ({ data }: { data: StackFrame }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [selectedNode, setSelectedNode] = useState<StackFrame | null>(null);

  const selectedNodeText = selectedNode ? `${selectedNode.name}` : "(none)";

  useEffect(() => {
    const renderFlameGraph = () => {
      const flameGraph = flamegraph()
        .width(960)
        .cellHeight(18)
        .transitionDuration(500)
        .transitionEase(d3.easeCubic)
        .sort(true)
        .title("")
        .inverted(true)
        .onClick((d) => setSelectedNode(d.data));

      d3.select(divRef.current).datum(data).call(flameGraph);
    };

    renderFlameGraph();
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h2>Flame Graph</h2>
      <p>Selected Node - {selectedNodeText}</p>
      <div ref={divRef}></div>
    </div>
  );
};
