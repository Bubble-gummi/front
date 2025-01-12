import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import S from './style';

const MyReview = () => {
  const [reviews, setReviews] = useState([]); // 리뷰 상태 관리
  const [error, setError] = useState(null);   // 에러 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  useEffect(() => {
    // 리뷰 데이터를 가져오는 함수
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mypage/uid/myreviews', {
          withCredentials: true, // 자격 증명 포함
        });

        if (response.status === 200) {
          setReviews(response.data.reviews || []); // 리뷰 데이터가 없으면 빈 배열로 설정
          console.log(response.data.reviews)
        }
      } catch (error) {
        console.error('리뷰 데이터를 가져오는 데 실패했습니다:', error);
        setError('데이터를 가져오는 중 에러가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchReviews(); // 컴포넌트가 마운트되면 리뷰 데이터를 가져옴
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  // 리뷰 클릭 시 상세 페이지로 이동하는 함수
  const handleReviewClick = (id) => {
    navigate(`/movie/moviereview/${id}`); // 리뷰 ID를 사용해 리뷰 상세 페이지로 이동
  };

  // 로딩 중일 때 메시지 표시
  if (loading) {
    return <div>로딩 중...</div>;
  }

  // 에러 발생 시 에러 메시지 표시
  if (error) {
    return <div>{error}</div>;
  }

  if (reviews.length === 0) {
    return <p>작성한 리뷰가 없습니다.</p>; // 게시글이 없을 경우 메시지 표시
  }

  return (
    <S.RightSection>
      <div className="review-list">
        {reviews.map((review) => (
          <S.reviewitem
            key={review.id}
            className="review-item"
            onClick={() => handleReviewClick(review.movie.id)} // 리뷰 클릭 이벤트 추가
          >
            <div className="movie-title">
              <h3>{review.movie.title}</h3> {/* 영화 제목 */}
            </div>

            <div className="review-header">
              <span>평점 :{review.score}점</span> {/* 영화 점수 */}
              <span>{new Date(review.createDate).toLocaleDateString()}</span> {/* 날짜 */}
            </div>

            <div className="review-content">
              <p>{review.content}</p> {/* 리뷰 내용 */}
            </div>
          </S.reviewitem>
        ))}
      </div>
    </S.RightSection>
  );
};

export default MyReview;
