import 'package:flutter/material.dart';
import 'dart:developer';
import 'dart:io';
import 'package:csv/csv.dart';
import 'package:flutter_application_1/models/api_model.dart';
import 'package:flutter_application_1/services/api_conect.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:path_provider/path_provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
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
  int _counter = 0;

  void _incrementCounter() async {
    var apiRespo = await ApiConnect().getAll("all");
    exportCSV(apiRespo);
    setState(() {
      _counter++;
    });
  }

  Future<void> exportCSV(List<ApiModel> list) async {
    Map<Permission, PermissionStatus> statuses = await [
      Permission.storage,
    ].request();

    List<List<dynamic>> rows = [];
    rows.add([
      "id",
      "category_id",
      "author_id",
      "title",
      "content",
      "data_publicacion",
      "name_category",
      "name_author"
    ]);

    for (var map in list) {
      rows.add([
        map.id,
        map.categoryId,
        map.authorId,
        map.title,
        map.content,
        map.dataPublicacion,
        map.nameCategory,
        map.nameAuthor,
      ]);
    }

    String csv = const ListToCsvConverter().convert(rows);
    String? dir = (await getExternalStorageDirectory())?.path;
    String filePath = "$dir/list.csv";
    log(filePath);

    File file = File(filePath);
    await file.writeAsString(csv);

    print("File exported successfully!");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Download CSV',
                style: Theme.of(context).textTheme.headlineMedium),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
