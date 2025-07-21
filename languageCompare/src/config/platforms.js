// 平台配置

export const PLATFORM_CONFIG = {
  flutter: {
    name: 'Flutter',
    filename: 'main.dart',
    language: 'dart',
    color: '#02569b',
    code: `
import 'package:flutter/material.dart';
import 'dart:async'; // 添加这一行导入Timer

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(title: 'Flutter Module Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SingleChildScrollView(
        // 移除了const关键字
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: const [
            // 经纪人组件
            AgentInfoCard(),
          ],
        ),
      ),
    );
  }
}

// 经纪人信息卡片组件
class AgentInfoCard extends StatelessWidget {
  const AgentInfoCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        color: Colors.white,
      ),
      child: Column(
        children: [
          // 主要内容区域
          Padding(
            padding: const EdgeInsets.fromLTRB(15, 16, 12, 15),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // 左侧用户信息
                Expanded(
                  flex: 2,
                  child: Column(
                    children: [
                      const SizedBox(height: 6),
                      Row(
                        children: [
                          // 用户头像
                          Container(
                            width: 36,
                            height: 36,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(18),
                              image: const DecorationImage(
                                image: NetworkImage(
                                    'https://image.5i5j.com/picture2/8420171.jpg?timestamp=1742547668513'),
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),

                          // 用户名和评分
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const SizedBox(height: 1),
                                const Text(
                                  '李震华',
                                  style: TextStyle(
                                    color: Color(0xFF333333),
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                    letterSpacing: 0.5,
                                    height: 1.0,
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 3,
                                    vertical: 2,
                                  ),
                                  child: Row(
                                    children: [
                                      Container(
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFFFECDD),
                                          borderRadius:
                                              BorderRadius.circular(3),
                                        ),
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 3,
                                          vertical: 2,
                                        ),
                                        child: const Text(
                                          '5.0分',
                                          style: TextStyle(
                                            color: Color(0xFFFF6F00),
                                            fontSize: 9,
                                            fontWeight: FontWeight.w600,
                                            height: 1.1,
                                          ),
                                        ),
                                      ),
                                      const SizedBox(width: 4), // 添加4个单位的间距
                                      Image.network(
                                        'https://lanhu-oss-2537-2.lanhuapp.com/SketchPng9c2aa94e5b54e07a9539b830842ce89e0324f723c27b6fc48b52436e773ccb56',
                                        width: 18,
                                        height: 14,
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),

                // 电话图标
                const SizedBox(width: 107),
                // 右侧按钮区域
                Row(
                  children: [
                    // 电话按钮
                    Container(
                      decoration: const BoxDecoration(
                        borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(26),
                          topRight: Radius.circular(8),
                          bottomRight: Radius.circular(8),
                          bottomLeft: Radius.circular(26),
                        ),
                        color: Color(0xFFFFC107),
                      ),
                      padding: const EdgeInsets.all(12),
                      child: Image.network(
                        'https://static-official.5i5j.com/offical/cdn/ef58b8156bf2e782567bdf35ffe496b3_1749041808817.png',
                        width: 22,
                        height: 22,
                      ),
                    ),

                    const SizedBox(width: 6),

                    // 在线聊天按钮
                    GestureDetector(
                      onTap: () {
                        // 创建一个可关闭的SnackBar
                        showDialog(
                          context: context,
                          barrierDismissible: true, // 点击对话框外部可关闭
                          builder: (BuildContext context) {
                            return AlertDialog(
                              title: const Text('当前时间'),
                              content: _TimeUpdatingText(), // 使用之前创建的实时更新时间组件
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context).pop(); // 关闭对话框
                                  },
                                  child: const Text('关闭'),
                                ),
                              ],
                            );
                          },
                        );

                        // 显示SnackBar
                        // ScaffoldMessenger.of(context).showSnackBar(snackBar);
                      },
                      child: Container(
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(8),
                            topRight: Radius.circular(26),
                            bottomRight: Radius.circular(26),
                            bottomLeft: Radius.circular(8),
                          ),
                          color: Color(0xFFFFC107),
                        ),
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Image.network(
                              'https://static-official.5i5j.com/offical/cdn/de19b14436206e56339c924bbda4b488_1749041808817.png',
                              width: 20,
                              height: 20,
                            ),
                            const SizedBox(width: 8),
                            const Text(
                              '在线聊',
                              style: TextStyle(
                                color: Color(0xFF222222),
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                                height: 1.0,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// 实时更新时间的Widget
class _TimeUpdatingText extends StatefulWidget {
  @override
  _TimeUpdatingTextState createState() => _TimeUpdatingTextState();
}

class _TimeUpdatingTextState extends State<_TimeUpdatingText> {
  late String _timeString;
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _timeString = _getCurrentTime();
    // 每秒更新一次时间
    _timer = Timer.periodic(const Duration(seconds: 1), (Timer t) {
      setState(() {
        _timeString = _getCurrentTime();
      });
    });
  }

  @override
  void dispose() {
    _timer.cancel(); // 取消定时器，防止内存泄漏
    super.dispose();
  }

  // 获取格式化的当前时间
  String _getCurrentTime() {
    final now = DateTime.now();
    return '\${now.year}-\${_twoDigits(now.month)}-\${_twoDigits(now.day)} '
        '\${_twoDigits(now.hour)}:\${_twoDigits(now.minute)}:\${_twoDigits(now.second)}';
  }

  // 辅助方法：确保数字显示为两位数
  String _twoDigits(int n) {
    if (n >= 10) return "$n";
    return "0$n";
  }

  @override
  Widget build(BuildContext context) {
    return Text('当前时间: $_timeString');
  }
}
`
  },
  reactNative: {
    name: 'reactNative',
    filename: 'Name.jsx',
    language: 'jsx',
    color: '#61dafb',
    code: `import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Flutter Module Page</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <AgentInfoCard />
      </ScrollView>
    </View>
  );
};

// 经纪人信息卡片组件
const AgentInfoCard = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleChatPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.mainContent}>
          {/* 左侧用户信息 */}
          <View style={styles.leftSection}>
            <View style={styles.userInfoRow}>
              {/* 用户头像 */}
              <Image
                source={{
                  uri: 'https://image.5i5j.com/picture2/8420171.jpg?timestamp=1742547668513',
                }}
                style={styles.avatar}
              />
              
              {/* 用户名和评分 */}
              <View style={styles.userDetails}>
                <Text style={styles.userName}>李震华</Text>
                <View style={styles.ratingContainer}>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingText}>5.0分</Text>
                  </View>
                  <Image
                    source={{
                      uri: 'https://lanhu-oss-2537-2.lanhuapp.com/SketchPng9c2aa94e5b54e07a9539b830842ce89e0324f723c27b6fc48b52436e773ccb56',
                    }}
                    style={styles.ratingIcon}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* 右侧按钮区域 */}
          <View style={styles.rightSection}>
            {/* 电话按钮 */}
            <TouchableOpacity style={styles.phoneButton}>
              <Image
                source={{
                  uri: 'https://static-official.5i5j.com/offical/cdn/ef58b8156bf2e782567bdf35ffe496b3_1749041808817.png',
                }}
                style={styles.phoneIcon}
              />
            </TouchableOpacity>

            {/* 在线聊天按钮 */}
            <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
              <Image
                source={{
                  uri: 'https://static-official.5i5j.com/offical/cdn/de19b14436206e56339c924bbda4b488_1749041808817.png',
                }}
                style={styles.chatIcon}
              />
              <Text style={styles.chatText}>在线聊</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 时间对话框 */}
      <TimeModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

// 实时更新时间的Modal组件
const TimeModal = ({ visible, onClose }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString ='\${now.getFullYear()}-\${String(now.getMonth() + 1).padStart(2, \'0\')}-\${String(now.getDate()).padStart(2, \'0\')} \${String(now.getHours()).padStart(2, \'0\')}:\${String(now.getMinutes()).padStart(2, \'0\')}:\${String(now.getSeconds()).padStart(2, \'0\')}';  
      setCurrentTime(timeString);
    };

    updateTime(); // 立即更新一次
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer); // 清理定时器
  }, [visible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>当前时间</Text>
          <Text style={styles.modalText}>当前时间: {currentTime}</Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>关闭</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    height: 56,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    padding: 0,
  },
  mainContent: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    paddingRight: 12,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftSection: {
    flex: 2,
    paddingTop: 6,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userDetails: {
    flex: 1,
    marginLeft: 8,
    paddingTop: 1,
  },
  userName: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  ratingBadge: {
    backgroundColor: '#FFECDD',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  ratingText: {
    color: '#FF6F00',
    fontSize: 9,
    fontWeight: '600',
    lineHeight: 10,
  },
  ratingIcon: {
    width: 18,
    height: 14,
    marginLeft: 4,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneButton: {
    backgroundColor: '#FFC107',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 26,
    padding: 12,
  },
  phoneIcon: {
    width: 22,
    height: 22,
  },
  chatButton: {
    backgroundColor: '#FFC107',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  chatText: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
    marginLeft: 8,
  },
  // Modal样式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    minWidth: 280,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default App;`
  },
  ArkTs: {
    name: 'ArkTs',
    filename: 'Name.ets',
    language: 'ts',
    color: '#4fc08d',
    code: `import { router } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  build() {
    Column() {
      // 标题栏
      Row() {
        Text('Flutter Module Page')
          .fontSize(18)
          .fontColor(Color.White)
          .fontWeight(FontWeight.Medium)
      }
      .width('100%')
      .height(56)
      .backgroundColor('#2196F3')
      .justifyContent(FlexAlign.Center)
      .alignItems(VerticalAlign.Center)

      // 内容区域
      Scroll() {
        Column() {
          AgentInfoCard()
        }
        .padding(16)
      }
      .layoutWeight(1)
      .backgroundColor('#f5f5f5')
    }
    .height('100%')
    .width('100%')
  }
}

// 经纪人信息卡片组件
@Component
struct AgentInfoCard {
  @State showTimeDialog: boolean = false;

  build() {
    Column() {
      // 主要内容区域
      Row() {
        // 左侧用户信息
        Row() {
          // 用户头像
          Image('https://image.5i5j.com/picture2/8420171.jpg?timestamp=1742547668513')
            .width(36)
            .height(36)
            .borderRadius(18)
            .objectFit(ImageFit.Cover)

          // 用户名和评分
          Column() {
            Text('李震华')
              .fontSize(14)
              .fontColor('#333333')
              .fontWeight(FontWeight.Medium)
              .margin({ top: 1 })

            Row() {
              // 评分标签
              Text('5.0分')
                .fontSize(9)
                .fontColor('#FF6F00')
                .fontWeight(FontWeight.Bold)
                .backgroundColor('#FFECDD')
                .borderRadius(3)
                .padding({ left: 3, right: 3, top: 2, bottom: 2 })

              // 评分图标
              Image('https://lanhu-oss-2537-2.lanhuapp.com/SketchPng9c2aa94e5b54e07a9539b830842ce89e0324f723c27b6fc48b52436e773ccb56')
                .width(18)
                .height(14)
                .margin({ left: 4 })
            }
            .margin({ top: 4 })
            .padding({ left: 3, right: 3, top: 2, bottom: 2 })
          }
          .alignItems(HorizontalAlign.Start)
          .layoutWeight(1)
          .margin({ left: 8 })
        }
        .alignItems(VerticalAlign.Top)
        .layoutWeight(2)
        .margin({ top: 6 })

        // 右侧按钮区域
        Row() {
          // 电话按钮
          Button() {
            Image('https://static-official.5i5j.com/offical/cdn/ef58b8156bf2e782567bdf35ffe496b3_1749041808817.png')
              .width(22)
              .height(22)
          }
          .width(46)
          .height(46)
          .backgroundColor('#FFC107')
          .borderRadius({ topLeft: 26, topRight: 8, bottomRight: 8, bottomLeft: 26 })
          .padding(12)

          // 在线聊天按钮
          Button() {
            Row() {
              Image('https://static-official.5i5j.com/offical/cdn/de19b14436206e56339c924bbda4b488_1749041808817.png')
                .width(20)
                .height(20)

              Text('在线聊')
                .fontSize(14)
                .fontColor('#222222')
                .fontWeight(FontWeight.Medium)
                .margin({ left: 8 })
            }
          }
          .backgroundColor('#FFC107')
          .borderRadius({ topLeft: 8, topRight: 26, bottomRight: 26, bottomLeft: 8 })
          .padding({ left: 16, right: 16, top: 12, bottom: 12 })
          .margin({ left: 6 })
          .onClick(() => {
            this.showTimeDialog = true;
          })
        }
      }
      .width('100%')
      .alignItems(VerticalAlign.Top)
      .padding({ left: 15, right: 12, top: 16, bottom: 15 })
    }
    .width('100%')
    .backgroundColor(Color.White)
    .borderRadius(8)
    .shadow({
      radius: 8,
      color: '#1f000000',
      offsetX: 0,
      offsetY: 2
    })
    .bindContentCover(this.showTimeDialog, this.TimeDialogBuilder(), {
      modalTransition: ModalTransition.FADE,
      backgroundColor: 'rgba(0,0,0,0.5)'
    })
  }

  // 时间对话框构建器
  @Builder
  TimeDialogBuilder() {
    Column() {
      TimeUpdatingComponent({ onClose: () => {
        this.showTimeDialog = false;
      }})
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}

// 实时更新时间的组件
@Component
struct TimeUpdatingComponent {
  @State currentTime: string = '';
  private timer: number = -1;
  onClose: () => void = () => {};

  aboutToAppear() {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  aboutToDisappear() {
    if (this.timer !== -1) {
      clearInterval(this.timer);
    }
  }

  updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    this.currentTime = "\${ year }-\${ month } -\${ day } \${ hours }:\${ minutes }:\${ seconds } ";
  }

  build() {
    Column() {
      Text('当前时间')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333')
        .margin({ bottom: 16 })

      Text("当前时间: \${ this.currentTime }")
        .fontSize(16)
        .fontColor('#666')
        .margin({ bottom: 20 })
        .textAlign(TextAlign.Center)

      Button('关闭')
        .fontSize(16)
        .fontColor(Color.White)
        .backgroundColor('#2196F3')
        .borderRadius(6)
        .padding({ left: 20, right: 20, top: 10, bottom: 10 })
        .onClick(() => {
          this.onClose();
        })
    }
    .backgroundColor(Color.White)
    .borderRadius(8)
    .padding(20)
    .width(280)
    .alignItems(HorizontalAlign.Center)
  }
}`
  },

  Kotlin: {
    name: 'Kotlin',
    filename: 'MainActivity.kt',
    language: 'kotlin',
    color: '#be33ff',
    code: `package com.example.myapp

import android.app.AlertDialog
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.setContent
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberImagePainter
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AgentInfoApp()
        }
    }
}

@Composable
fun AgentInfoApp() {
    var showDialog by remember { mutableStateOf(false) }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        AgentCard { showDialog = true }
    }
    
    if (showDialog) {
        TimeDialog { showDialog = false }
    }
}

@Composable
fun AgentCard(onChatClick: () -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = Color.White)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // 头像
            Image(
                painter = rememberImagePainter("https://image.5i5j.com/picture2/8420171.jpg"),
                contentDescription = null,
                modifier = Modifier
                    .size(36.dp)
                    .clip(CircleShape),
                contentScale = ContentScale.Crop
            )
            
            Spacer(modifier = Modifier.width(8.dp))
            
            // 用户信息
            Column {
                Text(
                    text = "李震华",
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Medium
                )
                Text(
                    text = "5.0分",
                    fontSize = 9.sp,
                    color = Color(0xFFFF6F00),
                    modifier = Modifier
                        .background(
                            Color(0xFFFFECDD),
                            RoundedCornerShape(3.dp)
                        )
                        .padding(horizontal = 3.dp, vertical = 2.dp)
                )
            }
            
            Spacer(modifier = Modifier.weight(1f))
            
            // 按钮
            Row {
                Box(
                    modifier = Modifier
                        .background(
                            Color(0xFFFFC107),
                            RoundedCornerShape(topStart = 26.dp, topEnd = 8.dp, bottomEnd = 8.dp, bottomStart = 26.dp)
                        )
                        .padding(12.dp)
                )
                
                Spacer(modifier = Modifier.width(6.dp))
                
                Box(
                    modifier = Modifier
                        .background(
                            Color(0xFFFFC107),
                            RoundedCornerShape(topStart = 8.dp, topEnd = 26.dp, bottomEnd = 26.dp, bottomStart = 8.dp)
                        )
                        .clickable { onChatClick() }
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    Text("在线聊", fontSize = 14.sp)
                }
            }
        }
    }
}

@Composable
fun TimeDialog(onDismiss: () -> Unit) {
    var currentTime by remember { mutableStateOf("") }
    
    LaunchedEffect(Unit) {
        while (true) {
            currentTime = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault()).format(Date())
            kotlinx.coroutines.delay(1000)
        }
    }
    
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("当前时间") },
        text = { Text("当前时间: $currentTime") },
        confirmButton = {
            TextButton(onClick = onDismiss) {
                Text("关闭")
            }
        }
    )
}`
  },
  SwiftUI: {
    name: 'SwiftUI',
    filename: 'ContentView.swift',
    language: 'swift',
    color: '#ff5733',
    code: `import SwiftUI

struct ContentView: View {
    @State private var showTimeDialog = false
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 0) {
                    AgentInfoCard(showTimeDialog: $showTimeDialog)
                }
                .padding(16)
            }
            .navigationTitle("Flutter Module Page")
            .navigationBarTitleDisplayMode(.inline)
        }
        .sheet(isPresented: $showTimeDialog) {
            TimeDialog()
                .presentationDetents([.height(200)])
        }
    }
}

struct AgentInfoCard: View {
    @Binding var showTimeDialog: Bool
    
    var body: some View {
        VStack(spacing: 0) {
            // 主要内容区域
            HStack(alignment: .top, spacing: 0) {
                // 左侧用户信息
                HStack(spacing: 0) {
                    VStack(spacing: 6) {
                        HStack(spacing: 8) {
                            // 用户头像
                            AsyncImage(url: URL(string: "https://image.5i5j.com/picture2/8420171.jpg?timestamp=1742547668513")) { image in
                                image
                                    .resizable()
                                    .aspectRatio(contentMode: .fill)
                            } placeholder: {
                                Color.gray.opacity(0.3)
                            }
                            .frame(width: 36, height: 36)
                            .clipShape(Circle())
                            
                            // 用户名和评分
                            VStack(alignment: .leading, spacing: 4) {
                                Text("李震华")
                                    .font(.system(size: 14, weight: .medium))
                                    .foregroundColor(Color(red: 0.2, green: 0.2, blue: 0.2))
                                    .lineLimit(1)
                                
                                HStack(spacing: 4) {
                                    // 评分标签
                                    Text("5.0分")
                                        .font(.system(size: 9, weight: .semibold))
                                        .foregroundColor(Color(red: 1.0, green: 0.44, blue: 0.0))
                                        .padding(.horizontal, 3)
                                        .padding(.vertical, 2)
                                        .background(Color(red: 1.0, green: 0.93, blue: 0.87))
                                        .cornerRadius(3)
                                    
                                    // 评分图标
                                    AsyncImage(url: URL(string: "https://lanhu-oss-2537-2.lanhuapp.com/SketchPng9c2aa94e5b54e07a9539b830842ce89e0324f723c27b6fc48b52436e773ccb56")) { image in
                                        image
                                            .resizable()
                                            .aspectRatio(contentMode: .fit)
                                    } placeholder: {
                                        Color.clear
                                    }
                                    .frame(width: 18, height: 14)
                                }
                            }
                            
                            Spacer()
                        }
                    }
                }
                
                // 右侧按钮区域
                HStack(spacing: 6) {
                    // 电话按钮
                    Button(action: {}) {
                        AsyncImage(url: URL(string: "https://static-official.5i5j.com/offical/cdn/ef58b8156bf2e782567bdf35ffe496b3_1749041808817.png")) { image in
                            image
                                .resizable()
                                .aspectRatio(contentMode: .fit)
                        } placeholder: {
                            Color.clear
                        }
                        .frame(width: 22, height: 22)
                        .padding(12)
                        .background(Color(red: 1.0, green: 0.76, blue: 0.03))
                        .clipShape(
                            .rect(
                                topLeadingRadius: 26,
                                bottomLeadingRadius: 26,
                                bottomTrailingRadius: 8,
                                topTrailingRadius: 8
                            )
                        )
                    }
                    
                    // 在线聊天按钮
                    Button(action: {
                        showTimeDialog = true
                    }) {
                        HStack(spacing: 8) {
                            AsyncImage(url: URL(string: "https://static-official.5i5j.com/offical/cdn/de19b14436206e56339c924bbda4b488_1749041808817.png")) { image in
                                image
                                    .resizable()
                                    .aspectRatio(contentMode: .fit)
                            } placeholder: {
                                Color.clear
                            }
                            .frame(width: 20, height: 20)
                            
                            Text("在线聊")
                                .font(.system(size: 14, weight: .medium))
                                .foregroundColor(Color(red: 0.13, green: 0.13, blue: 0.13))
                        }
                        .padding(.horizontal, 16)
                        .padding(.vertical, 12)
                        .background(Color(red: 1.0, green: 0.76, blue: 0.03))
                        .clipShape(
                            .rect(
                                topLeadingRadius: 8,
                                bottomLeadingRadius: 8,
                                bottomTrailingRadius: 26,
                                topTrailingRadius: 26
                            )
                        )
                    }
                }
            }
            .padding(.horizontal, 15)
            .padding(.vertical, 16)
        }
        .background(Color.white)
    }
}

struct TimeDialog: View {
    @Environment(\.dismiss) private var dismiss
    @State private var currentTime = ""
    @State private var timer: Timer?
    
    var body: some View {
        VStack(spacing: 20) {
            Text("当前时间")
                .font(.headline)
                .padding(.top)
            
            Text("当前时间: \(currentTime)")
                .font(.body)
                .padding()
            
            Button("关闭") {
                dismiss()
            }
            .padding(.bottom)
        }
        .onAppear {
            updateTime()
            timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { _ in
                updateTime()
            }
        }
        .onDisappear {
            timer?.invalidate()
            timer = nil
        }
    }
    
    private func updateTime() {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        currentTime = formatter.string(from: Date())
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`
  }
}