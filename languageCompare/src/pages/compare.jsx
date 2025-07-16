import './compare.css';
import { useState, useMemo, useCallback, memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PLATFORM_CONFIG } from '../config/platforms';


// 常量配置
const MAX_SELECTION = 5; // 最大选择数量配置

// 平台选择器组件
const PlatformSelector = memo(({ platformKey, platform, isSelected, selectionIndex, onToggle }) => {
  return (
    <button
      key={platformKey}
      className={`platform-btn ${isSelected ? 'active' : ''}`}
      onClick={() => onToggle(platformKey)}
    >
      <div className="platform-icon" style={{ backgroundColor: platform.color }}>
        {platform.name.charAt(0)}
      </div>
      {platform.name}
      {isSelected && (
        <span className="selection-indicator">
          {selectionIndex + 1}
        </span>
      )}
    </button>
  );
});

// 代码面板组件
const CodePanel = memo(({ platformKey, platform, onRemove }) => {
  return (
    <div key={platformKey} className="code-panel">
      <div className="panel-header">
        <div className="platform-icon" style={{ backgroundColor: platform.color }}>
          {platform.name.charAt(0)}
        </div>
        <div className="panel-info">
          <h3>{platform.name}</h3>
          <span className="filename">{platform.filename}</span>
        </div>
        <button
          className="remove-btn"
          onClick={() => onRemove(platformKey)}
          title="移除此平台"
        >
          ×
        </button>
      </div>
      <div className="code-content">
        <pre>
          <CodeHighlighter code={platform.code} language={platform.language} />
        </pre>
      </div>
    </div>
  );
});

// 代码高亮组件
const CodeHighlighter = memo(({ code, language = 'javascript' }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      showLineNumbers={true}
      customStyle={{
        margin: 0,
        background: 'transparent',
        fontSize: '0.9rem',
        lineHeight: '1.4'
      }}
      wrapLongLines={true}
      lineNumberStyle={{
        minWidth: '3em',
        paddingRight: '1em',
        textAlign: 'right',
        userSelect: 'none',
        opacity: 0.6
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
});

// 主应用组件
const CompareApp = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['flutter', 'react']);

  // 处理平台选择/取消
  const handlePlatformToggle = useCallback((platformKey) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(platformKey)) {
        // 如果已选中，则取消选择
        return prev.filter(p => p !== platformKey);
      } else {
        // 如果未选中，检查是否已达到最大选择数量
        if (prev.length >= MAX_SELECTION) {
          // 如果已选择最大数量，替换最后一个
          return [...prev.slice(0, MAX_SELECTION - 1), platformKey];
        } else {
          // 添加到选择列表
          return [...prev, platformKey];
        }
      }
    });
  }, []);

  // 计算网格列数
  const gridColumns = useMemo(() => {
    const count = selectedPlatforms.length;
    if (count === 0) return '1fr';
    if (count <= 4) return `repeat(${count}, 1fr)`;
    return '1fr';
  }, [selectedPlatforms.length]);

  // 渲染平台选择器
  const renderPlatformSelectors = useMemo(() => {
    return Object.entries(PLATFORM_CONFIG).map(([key, platform]) => {
      const isSelected = selectedPlatforms.includes(key);
      const selectionIndex = selectedPlatforms.indexOf(key);

      return (
        <PlatformSelector
          key={key}
          platformKey={key}
          platform={platform}
          isSelected={isSelected}
          selectionIndex={selectionIndex}
          onToggle={handlePlatformToggle}
        />
      );
    });
  }, [selectedPlatforms, handlePlatformToggle]);

  // 渲染代码面板
  const renderCodePanels = useMemo(() => {
    if (selectedPlatforms.length === 0) {
      return (
        <div className="empty-state">
          <p>请选择要对比的平台（最多 {MAX_SELECTION} 个）</p>
        </div>
      );
    }

    return (
      <div
        className="code-comparison"
        style={{ gridTemplateColumns: gridColumns }}
      >
        {selectedPlatforms.map((platformKey) => {
          const platform = PLATFORM_CONFIG[platformKey];
          return (
            <CodePanel
              key={platformKey}
              platformKey={platformKey}
              platform={platform}
              onRemove={handlePlatformToggle}
            />
          );
        })}
      </div>
    );
  }, [selectedPlatforms, gridColumns, handlePlatformToggle]);

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 多平台代码对比</h1>
        <p>对比不同平台实现相同功能的代码写法</p>
      </header>

      <main className="main">
        <div className="platform-selectors">
          {renderPlatformSelectors}
        </div>
        {renderCodePanels}
      </main>
    </div>
  );
};

export default CompareApp;
