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
    return '${now.year}-${_twoDigits(now.month)}-${_twoDigits(now.day)} '
        '${_twoDigits(now.hour)}:${_twoDigits(now.minute)}:${_twoDigits(now.second)}';
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
