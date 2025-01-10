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


const posts =[
  {
    id: 1,
    subject: '파이트클럽 영화 리뷰(게시글 제목)',
    title:'파이트클럽',
    content: '기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.기생충 영화에 대한 리뷰입니다.2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  },
  {
    id: 2,
    subject: '기생충 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  },
  {
    id: 3,
    subject: '3 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  },
  {
    id: 4,
    subject: '4 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  }
  ,
  {
    id: 5,
    subject: '5 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  }
  ,
  {
    id: 6,
    subject: '6 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  }
  ,
  {
    id: 7,
    subject: '7 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  }
  ,
  {
    id: 8,
    subject: '8 영화 리뷰(게시글 제목)',
    title: '기생충',
    content: '2019년 칸 영화제 황금종려상을 수상한 기생충은 사회 계층 간 갈등을 흥미롭게 다룬 작품입니다. 배우들의 연기와 연출이 돋보였습니다.'
  }
  ];
  

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
        path : "/movie/moviereview/",
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
        element: <PostDetailContainer posts={posts}/>
      }
    ]
  }
]);

export default router;