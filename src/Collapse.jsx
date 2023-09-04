import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть', children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const contentStyle = {
    maxHeight: isCollapsed ? '0' : '1000px', 
    opacity: isCollapsed ? '0' : '1',
    overflow: 'hidden', 
    transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        {isCollapsed ? collapsedLabel : expandedLabel}
      </div>
      <div className="collapse-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;

