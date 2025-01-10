import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/layout/Layout';
import MovieContainer from '../pages/movie/MovieContainer';
import MainContainer from '../pages/main/MainContainer';
import MovieBlogContainer from '../pages/movieblog/MovieBlogContainer';
import WeekMovieContainer from '../pages/weekmovie/WeekMovieContainer';
import MovieReviewContainer from '../pages/movie/moviereview/MovieReviewContainer';
import MyPageContainer from '../pages/mypage/MyPageContainer';
import MylistConatiner from '../pages/mypage/mylist/MylistConatiner';
import CreateBlogContainer from '../pages/movieblog/Myblog/CreateBlogContainer';
import MyBlogContainer from '../pages/movieblog/Myblog/MyBlogContainer';
import MyReviewContainer from '../pages/mypage/myreviewlist/MyReviewContainer';
import IsNotLoginContainer from '../pages/isnotlogin/IsNotLoginContainer';
import PostDetailContainer from '../pages/movieblog/PostDetailContainer';  


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index : true,
        element : <MainContainer/>
      },
      {
        path : "/movie",
        element : <MovieContainer/>
      },
      {
        path : "/movieblog",
        element : <MovieBlogContainer/>
      },
      {
        path : "/weekmovie",
        element : <WeekMovieContainer/>
      },
      {
        path : "/movie/moviereview/:id",
        element : <MovieReviewContainer/>
      },
      {
        path : "/mypage",
        element : <MyPageContainer/>
      },
      {
        path: "/my-list",
        element : <MylistConatiner/>
      },
      {
        path : "/createblog",
        element : <CreateBlogContainer/>
      },
      {
        path : "/myblog",
        element : <MyBlogContainer/>
      },
      {
        path : "/my-review-list",
        element :<MyReviewContainer/>
      },
      {
        path : "/is-not-login",
        element :<IsNotLoginContainer/>
      },
      {
        path: "/movieblog/post/:id",
        element: <PostDetailContainer/>
      }
    ]
  }
]);

export default router;