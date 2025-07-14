// 平台配置
export const PLATFORM_CONFIG = {
    svelte: {
        name: 'Svelte',
        filename: 'Name.svelte',
        language: 'svelte',
        color: '#ff3e00',
        code: `<script>
  let name = "张三";
</script>

<h1>你好 {name}</h1>`
    },
    react: {
        name: 'React',
        filename: 'Name.jsx',
        language: 'jsx',
        color: '#61dafb',
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
        color: '#4fc08d',
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
        color: '#dd0031',
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
        color: '#324fff',
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
        color: '#e04e39',
        code: `{{!-- name.hbs --}}
<h1>你好 {{this.name}}</h1>`
    },
    solidjs: {
        name: 'SolidJS',
        filename: 'Name.jsx',
        language: 'jsx',
        color: '#2c4f7c',
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
        color: '#8bc34a',
        code: `<div x-data="{ name: '张三' }">
  <h1 x-text="\`你好 \${name}\`"></h1>
</div>`
    },
    mithril: {
        name: 'Mithril',
        filename: 'Name.js',
        language: 'javascript',
        color: '#1e88e5',
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
        color: '#3ddc84',
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
        color: '#007aff',
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
        color: '#02569b',
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
}