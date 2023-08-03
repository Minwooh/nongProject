from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import PostViewSet, CommentViewSet, BookMarkViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# 첫 번째 인자는 url의 prefix
# 두 번째 인자는 ViewSet
router.register("posts", PostViewSet)

comment_router = SimpleRouter(trailing_slash=True)
comment_router.register("comments", CommentViewSet, basename="comment")

bookmark_router = SimpleRouter(trailing_slash=True)
bookmark_router.register("bookmark", BookMarkViewSet, basename="bookmark")

urlpatterns = [
    path("", include(router.urls)),
    path("posts/<int:post_id>/", include(comment_router.urls)),
    path(
        "posts/<int:post_id>/bookmarks/<int:bookmark_id>/",
        include(bookmark_router.urls),
    ),
]
