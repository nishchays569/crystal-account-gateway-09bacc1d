import { useState } from "react";
import { TreeNode } from "@/types/tree";
import TreeNodeCard from "./TreeNodeCard";
import AddUserNode from "./AddUserNode";
import { cn } from "@/lib/utils";

interface BinaryTreeViewProps {
  rootNode: TreeNode | null;
  onNodeClick?: (node: TreeNode) => void;
  onAddUser?: (parentId: number, position: "LEFT" | "RIGHT") => void;
  highlightedNodeIds?: Set<number>;
  searchQuery?: string;
}

const BinaryTreeView = ({ rootNode, onNodeClick, onAddUser, highlightedNodeIds, searchQuery }: BinaryTreeViewProps) => {
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);

  const handleNodeClick = (node: TreeNode) => {
    setSelectedNodeId(node.id);
    onNodeClick?.(node);
  };

  const renderNode = (node: TreeNode | null, parentId?: number, position?: "LEFT" | "RIGHT", depth: number = 0): React.ReactNode => {
    // Show AddUserNode for null children
    if (!node && parentId !== undefined && position) {
      return (
        <div className="flex flex-col items-center">
          <AddUserNode
            position={position}
            parentId={parentId}
            onClick={() => onAddUser?.(parentId, position)}
          />
        </div>
      );
    }

    if (!node) return null;

    // Always show children connectors for nodes (to show add user placeholders)
    const showChildren = true;

    return (
      <div className="flex flex-col items-center">
        {/* Current Node */}
        <TreeNodeCard
          node={node}
          isRoot={depth === 0}
          isSelected={selectedNodeId === node.id}
          isHighlighted={highlightedNodeIds?.has(node.id) ?? false}
          searchQuery={searchQuery}
          onClick={() => handleNodeClick(node)}
        />

        {/* Connector Lines & Children */}
        {showChildren && (
          <div className="flex flex-col items-center">
            {/* Vertical line from node */}
            <div className="w-0.5 h-8 bg-border/60" />

            {/* Horizontal connector */}
            <div className="relative flex items-center">
              <div className="w-[120px] h-0.5 bg-border/60" />
              <div className="w-[120px] h-0.5 bg-border/60" />
            </div>

            {/* Children Container */}
            <div className="flex">
              {/* Left Child Branch */}
              <div className="flex flex-col items-center" style={{ minWidth: '160px' }}>
                <div className="w-0.5 h-8 bg-border/60" />
                {renderNode(node.leftChild ?? null, node.id, "LEFT", depth + 1)}
              </div>

              {/* Right Child Branch */}
              <div className="flex flex-col items-center" style={{ minWidth: '160px' }}>
                <div className="w-0.5 h-8 bg-border/60" />
                {renderNode(node.rightChild ?? null, node.id, "RIGHT", depth + 1)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (!rootNode) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        No tree data available
      </div>
    );
  }

  return (
    <div className={cn(
      "w-full overflow-auto p-8",
      "scrollbar-thin scrollbar-track-background scrollbar-thumb-border"
    )}>
      <div className="min-w-max flex justify-center">
        {renderNode(rootNode)}
      </div>
    </div>
  );
};

export default BinaryTreeView;
