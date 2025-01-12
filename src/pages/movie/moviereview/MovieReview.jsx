import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import S from "./style";
import axios from "axios";
import Login from "../../login/Login"; // 로그인 모달 임포트

const MovieReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [detaildata, setDetailData] = useState([]);
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDetail'))); // 로그인된 사용자 정보 로컬 스토리지에서 가져오기
  const [isLoginOpen, setIsLoginOpen] = useState(false); // 로그인 모달 상태
  const [editingReviewId, setEditingReviewId] = useState(null); // 수정 중인 리뷰 ID
  const [editedReview, setEditedReview] = useState(""); // 수정된 리뷰 내용
  const [editedRating, setEditedRating] = useState(0); // 수정된 평점

  useEffect(() => {
    // 영화 상세 정보 및 리뷰 조회
    axios
      .get(`http://localhost:8080/movies/detail/${id}`)
      .then((response) => {
        setDetailData(response.data.movie);
        setActors(response.data.movie.actors);
        setReviews(response.data.reviews);

        // 평균 평점 계산
        const totalRating = response.data.reviews.reduce(
          (acc, review) => acc + review.score,
          0
        );
        const avgRating =
          response.data.reviews.length > 0
            ? totalRating / response.data.reviews.length
            : 0;
        setAverageRating(avgRating.toFixed(1)); // 소수점 첫째자리까지 반영
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  // 로그인 클릭 시 모달 열기
  const handleLoginClick = () => {
    setIsLoginOpen(true); // 로그인 모달 열기
  };

  // 로그인 모달 닫기
  const handleLoginModal = () => {
    setIsLoginOpen(false); // 로그인 모달 닫기
  };

  // 리뷰 추가 함수
  const handleAddReview = async () => {
    if (!user) {
      alert("로그인이 필요합니다."); // 로그인되지 않았으면 알림 표시
      setIsLoginOpen(true); // 로그인 모달 열기
      setIsWriting(false); // 리뷰 작성 폼 닫기
      return;
    }

    if (newReview.trim() === "") return;

    const newReviewObj = {
      score: rating,
      content: newReview,
    };

    try {
      // 로그인 후 리뷰 작성 요청
      const formData = new FormData();
      formData.append("score", rating);
      formData.append("content", newReview);

      const response = await axios.post(
        `http://localhost:8080/mypage/reviews/${id}/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // 쿠키 포함
        }
      );

      // 리뷰가 성공적으로 추가된 후 리뷰 목록 갱신
      setReviews([response.data, ...reviews]);
      setNewReview("");
      setIsWriting(false); // 리뷰 작성 폼 닫기
      window.location.reload();
    } catch (error) {
      console.error("리뷰 작성 중 오류 발생:", error);
    }
  };

  // 별점 클릭 시 처리
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // 리뷰 삭제 함수
  const handleDeleteReview = async (reviewId) => {
    if (user) {
      try {
        // 리뷰 삭제 요청
        await axios.delete(
          `http://localhost:8080/mypage/reviews/${reviewId}`,
          {
            withCredentials: true, // 쿠키 포함
          }
        );

        // 삭제 후 리뷰 목록 갱신
        setReviews(reviews.filter((review) => review.id !== reviewId));
        window.location.reload();
      } catch (error) {
        console.error("리뷰 삭제 중 오류 발생:", error);
      }
    } else {
      alert("로그인 후 삭제 가능합니다.");
    }
  };

  // 리뷰 수정 버튼 클릭 시 처리
const handleEditClick = (review) => {
  setEditingReviewId(review.id); // 수정 중인 리뷰 ID 설정
  setEditedReview(review.content); // 기존 리뷰 내용 가져오기
  setEditedRating(review.score); // 기존 평점 가져오기
};

// 리뷰 수정 저장
const handleSaveEdit = async (reviewId) => {
  try {
    const formData = new FormData();
    formData.append("score", editedRating);
    formData.append("content", editedReview);

    // 수정된 리뷰 서버에 전송
    await axios.put(
      `http://localhost:8080/mypage/reviews/${reviewId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    // 리뷰 목록 갱신
    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, content: editedReview, score: editedRating }
          : review
      )
    );
    setEditingReviewId(null); // 수정 상태 종료
  } catch (error) {
    console.error("리뷰 수정 중 오류 발생:", error);
  }
};

  // 리뷰 수정 취소
  const handleCancelEdit = () => {
    setEditingReviewId(null); // 수정 상태 종료
  };

  // 별점 클릭 처리 (수정 중일 때)
  const handleEditStarClick = (index) => {
    setEditedRating(index + 1);
  };
  return (
    <div>
      <S.wrapper className="wrapper">
        <S.Card className="mainimage">
          <img src={`/image/${detaildata.id}.jpg`} alt={detaildata.title} />
        </S.Card>
        <S.imformation className="imformation">
          <h2>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < Math.round(averageRating) ? "gold" : "gray",
                  fontSize: "2rem",
                }}
              >
                ★
              </span>
            ))}
          </h2>
          <p>평점 : {averageRating || 0}</p>
          <div className="detail">{detaildata.plot}</div>
        </S.imformation>
      </S.wrapper>

      <S.mainpage className="mainpage">
        <div className="actor">
          <h1>연기자</h1>
          <S.CastContainer className="cast-container">
            {actors.map((actor, index) => (
              <S.ActorCard key={index} className="actor">
                <img src={actor.img} alt={actor.name} />
                <p>{actor.name}</p>
              </S.ActorCard>
            ))}
          </S.CastContainer>
        </div>

        <div className="comment">
          <div className="review">
            <h1>리뷰</h1>
            <div className="reviewbutton">
              <button
                onClick={() => {
                  if (!user) {
                    alert("로그인이 필요합니다.");
                    setIsLoginOpen(true); // 로그인 모달 열기
                  } else {
                    setIsWriting(!isWriting); // 로그인 상태면 리뷰 작성 폼 열기
                  }
                }}
              >
                리뷰 작성
              </button>
            </div>
          </div>

          {isWriting ? (
            user ? (
              <S.reviewinput className="review-input">
                <div className="rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`star ${index < rating ? "active" : ""}`}
                      style={{
                        cursor: "pointer",
                        color: index < rating ? "gold" : "gray",
                      }}
                      onClick={() => handleStarClick(index)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>{rating.toFixed(1)}</span>
                <input
                  placeholder="리뷰를 작성하세요..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddReview(); // Enter 키가 눌리면 리뷰 작성 완료
                    }
                  }}
                />
                <button onClick={handleAddReview}>작성 완료</button>
              </S.reviewinput>
            ) : (
              <p>로그인이 필요합니다.</p>
            )
          ) : null}

          <div className="review-list">
            {reviews.length > 0 ? (
              [...reviews]
                .sort((a, b) => {
                  // 각 review의 user 객체가 존재하는지 체크하고 user.id로 비교
                  if (a.user && b.user) {
                    if (a.user.id === user.id) return -1;
                    if (b.user.id === user.id) return 1;
                  }
                  return 0; // user 객체가 없을 경우 기본 정렬
                })
                .map((review) => (
                  <S.reviewitem key={review.id} className="review-item">
                    <div className="review-header">
                      <span>{review.user ? review.user.userId : "Unknown User"}</span>
                      <span>{new Date(review.createDate).toLocaleDateString()}</span>
                      <span>평점: {review.score}</span>
                      {user && review.user && review.user.id === user.id && (
                        <div>
                          <button
                            style={{
                              fontSize: "0.8rem",
                              color: "red",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => handleDeleteReview(review.id)}
                          >
                            삭제
                          </button>
                          <button
                            style={{
                              fontSize: "0.8rem",
                              color: "green",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => handleEditClick(review)}
                          >
                            수정
                          </button>
                        </div>
                      )}
                    </div>
        
                    {/* 수정 중인 리뷰일 때 */}
                    {editingReviewId === review.id ? (
                      <S.reviewinput>
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={`star ${index < editedRating ? "active" : ""}`}
                              style={{
                                cursor: "pointer",
                                color: index < editedRating ? "gold" : "gray",
                              }}
                              onClick={() => handleEditStarClick(index)}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <input
                          value={editedReview}
                          onChange={(e) => setEditedReview(e.target.value)}
                          placeholder="리뷰를 수정하세요..."
                        />
                        <button onClick={() => handleSaveEdit(review.id)}>저장</button>
                        <button onClick={handleCancelEdit}>취소</button>
                      </S.reviewinput>
                    ) : (
                      <div className="review-content">{review.content}</div>
                    )}
                  </S.reviewitem>
                ))
            ) : (
              <div>리뷰가 없습니다.</div>
            )}
          </div>
        </div>
      </S.mainpage>

      {isLoginOpen && <Login onClose={handleLoginModal} />}
    </div>
  );
};

export default MovieReview;
