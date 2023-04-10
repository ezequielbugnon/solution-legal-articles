import 'dart:convert';

class ApiModel {
  int? id;
  int? categoryId;
  int? authorId;
  String? title;
  String? content;
  String? dataPublicacion;
  String? nameCategory;
  String? nameAuthor;

  ApiModel(
      {this.id,
      this.categoryId,
      this.authorId,
      this.title,
      this.content,
      this.dataPublicacion,
      this.nameCategory,
      this.nameAuthor});

  factory ApiModel.fromJson(String str) => ApiModel.fromMap(json.decode(str));

  String toJson() => json.encode(toMap());

  factory ApiModel.fromMap(Map<String, dynamic> json) => ApiModel(
        id: json['id'],
        categoryId: json['category_id'],
        authorId: json['author_id'],
        title: json['title'],
        content: json['content'],
        dataPublicacion: json['data_publicacion'],
        nameCategory: json['name_category'],
        nameAuthor: json['name_author'],
      );

  Map<String, dynamic> toMap() => {
        "id": id,
        "categoryId": categoryId,
        "authorId": authorId,
        "title": title,
        "content": content,
        "dataPublicacion": dataPublicacion,
        "nameCategory": nameCategory,
        "nameAuthor": nameAuthor
      };

  ApiModel copy() => ApiModel(
        id: id,
        categoryId: categoryId,
        authorId: authorId,
        title: title,
        content: content,
        dataPublicacion: dataPublicacion,
        nameCategory: nameCategory,
        nameAuthor: nameAuthor,
      );
}
