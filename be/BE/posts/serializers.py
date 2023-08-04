from rest_framework.serializers import ModelSerializer
from .models import Post, Comment, BookMark
from rest_framework import serializers
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    # writer = serializers.ReadOnlyField(source='writer.username')
    comments = serializers.SerializerMethodField()
    bookmarks_count = serializers.SerializerMethodField()

    def get_comments(self, obj):
        comments = Comment.objects.filter(post=obj.id)
        return CommentSerializer(comments, many=True).data


    def get_bookmarks_count(self, obj):
        return obj.bookmark_set.count()

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "content",
            "photo",
            "area",
            "city",
            "prices",
            "links",
            "comments",
            "bookmarks_count",
            "writer",
        ]


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ["comment", "post", "is_secret"]



class BookMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookMark
        fields = "__all__"
