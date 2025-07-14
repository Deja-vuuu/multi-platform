import './App.css';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PLATFORM_CONFIG } from './config/platforms';

const App = () => {
  // 配置项
  const MAX_SELECTION = 5; // 最大选择数量配置

  const [selectedPlatforms, setSelectedPlatforms] = useState(['svelte', 'react']);

  // 为每个平台定义颜色
  const getPlatformColor = (platformKey) => {
    const colors = {
      svelte: '#ff3e00',
      react: '#61dafb',
      vue: '#4fc08d',
      angular: '#dd0031',
      lit: '#324fff',
      ember: '#e04e39',
      solidjs: '#2c4f7c',
      alpine: '#8bc34a',
      mithril: '#1e88e5',
      android: '#3ddc84',
      ios: '#007aff',
      flutter: '#02569b'
    };
    return colors[platformKey] || '#6b7280';
  };

  const platforms = {
    svelte: {
      name: 'Svelte',
      filename: 'Name.svelte',
      language: 'svelte',
      code: `<script>
  let name = "张三";
</script>

<h1>你好 {name}</h1>`
    },
    react: {
      name: 'React',
      filename: 'Name.jsx',
      language: 'jsx',
      code: `import { useState } from 'react';

function Name() {
  const [name] = useState('张三');
  
  return <h1>你好 {name}</h1>;
}

export default Name;`
    },
    vue: {
      name: 'Vue',
      filename: 'Name.vue',
      language: 'vue',
      code: `<template>
  <h1>你好 {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: '张三'
    }
  }
}
</script>`
    },
    angular: {
      name: 'Angular',
      filename: 'name.component.ts',
      language: 'typescript',
      code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  template: '<h1>你好 {{name}}</h1>'
})
export class NameComponent {
  name = '张三';
}`
    },
    lit: {
      name: 'Lit',
      filename: 'name-element.js',
      language: 'javascript',
      code: `import { LitElement, html } from 'lit';

class NameElement extends LitElement {
  static properties = {
    name: { type: String }
  };
  
  constructor() {
    super();
    this.name = '张三';
  }
  
  render() {
    return html\`<h1>你好 \${this.name}</h1>\`;
  }
}

customElements.define('name-element', NameElement);`
    },
    ember: {
      name: 'Ember',
      filename: 'name.hbs',
      language: 'handlebars',
      code: `{{!-- name.hbs --}}
<h1>你好 {{this.name}}</h1>`
    },
    solidjs: {
      name: 'SolidJS',
      filename: 'Name.jsx',
      language: 'jsx',
      code: `import { createSignal } from 'solid-js';

function Name() {
  const [name] = createSignal('张三');
  
  return <h1>你好 {name()}</h1>;
}

export default Name;`
    },
    alpine: {
      name: 'Alpine.js',
      filename: 'name.html',
      language: 'html',
      code: `<div x-data="{ name: '张三' }">
  <h1 x-text="\`你好 \${name}\`"></h1>
</div>`
    },
    mithril: {
      name: 'Mithril',
      filename: 'Name.js',
      language: 'javascript',
      code: `const Name = {
  view: () => {
    const name = '张三';
    return m('h1', \`你好 \${name}\`);
  }
};

export default Name;`
    },
    android: {
      name: 'Android',
      filename: 'MainActivity.kt',
      language: 'kotlin',
      code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        val name = "张三"
        val textView = TextView(this)
        textView.text = "你好 $name"
        textView.textSize = 24f
        
        setContentView(textView)
    }
}`
    },
    ios: {
      name: 'iOS',
      filename: 'ContentView.swift',
      language: 'swift',
      code: `import SwiftUI

struct ContentView: View {
    let name = "张三"
    
    var body: some View {
        Text("你好 \\(name)")
            .font(.title)
    }
}

#Preview {
    ContentView()
}`
    },
    flutter: {
      name: 'Flutter',
      filename: 'main.dart',
      language: 'dart',
      code: `import 'package:flutter/material.dart';

class NameWidget extends StatelessWidget {
  final String name = '张三';
  
  @override
  Widget build(BuildContext context) {
    return Text(
      '你好 $name',
      style: Theme.of(context).textTheme.headlineMedium,
    );
  }
}`
    }
  };


  const handlePlatformToggle = (platformKey) => {
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
  };

  const getGridColumns = () => {
    const count = selectedPlatforms.length;
    if (count === 1) return '1fr';
    if (count === 2) return '1fr 1fr';
    if (count === 3) return '1fr 1fr 1fr';
    if (count === 4) return '1fr 1fr 1fr 1fr';
    return '1fr';
  };

  // 生成带行号的代码
  const renderCodeWithLineNumbers = (code, language = 'javascript') => {
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
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 多平台代码对比</h1>
        <p>对比不同平台实现相同功能的代码写法</p>
      </header>

      <main className="main">
        <div className="platform-selectors">
          {Object.entries(PLATFORM_CONFIG).map(([key, platform]) => (
            <button
              key={key}
              className={`platform-btn ${selectedPlatforms.includes(key) ? 'active' : ''}`}
              onClick={() => handlePlatformToggle(key)}
            >
              <div className="platform-icon" style={{ backgroundColor: getPlatformColor(key) }}>
                {platform.name.charAt(0)}
              </div>
              {platform.name}
              {selectedPlatforms.includes(key) && (
                <span className="selection-indicator">
                  {selectedPlatforms.indexOf(key) + 1}
                </span>
              )}
            </button>
          ))}
        </div>

        {selectedPlatforms.length === 0 ? (
          <div className="empty-state">
            <p>请选择要对比的平台（最多 {MAX_SELECTION} 个）</p>
          </div>
        ) : (
          <div
            className="code-comparison"
            style={{ gridTemplateColumns: getGridColumns() }}
          >
            {selectedPlatforms.map((platformKey) => {
              const platform = platforms[platformKey];
              return (
                <div key={platformKey} className="code-panel">
                  <div className="panel-header">
                    <div className="platform-icon" style={{ backgroundColor: getPlatformColor(platformKey) }}>
                      {platform.name.charAt(0)}
                    </div>
                    <div className="panel-info">
                      <h3>{platform.name}</h3>
                      <span className="filename">{platform.filename}</span>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handlePlatformToggle(platformKey)}
                      title="移除此平台"
                    >
                      ×
                    </button>
                  </div>
                  <div className="code-content">
                    <pre>
                      {renderCodeWithLineNumbers(platform.code, platform.language)}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
