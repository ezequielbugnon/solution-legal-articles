import 'dart:convert';
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_application_1/models/api_model.dart';
import 'package:http/http.dart' as http;

class ApiConnect {
  final String _baseUrl = 'http://localhost:4000/api/JurisHand/';

  Future<List<ApiModel>> getAll(String urlString) async {
    try {
      final url = Uri.parse('http://192.168.0.168:4000/api/JurisHand/all');
      final List<ApiModel> apiModel = [];

      final resp = await http.get(url);
      if (resp.statusCode == 200) {
        //final List<ApiModel> decodedResp = json.decode(resp.body);
        final List<dynamic> respMap = json.decode(resp.body);

        for (var element in respMap) {
          final tempResp = ApiModel.fromMap(element);
          apiModel.add(tempResp);
        }

        return apiModel;
      }

      throw Exception('Failed');
    } catch (e) {
      log(e.toString());
      throw Exception('Failed $e');
    }
  }
}
