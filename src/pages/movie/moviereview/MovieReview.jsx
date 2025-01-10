import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import S from "./style";
import axios from "axios";

const MovieReview = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { id } = useParams();

  const [data, setData] = useState(null); 
  const [userReviews, setUserReviews] = useState([]); 
  const [isWriting, setIsWriting] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/main")
      .then((response) => {
        const movieData = response.data.movies;
        const selectMovie = movieData.find((movie) => movie.id === parseInt(id));

        if (selectMovie) {
          setData(selectMovie);
          console.log(selectMovie);
        } else {
          console.error("해당 ID의 영화를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("영화 데이터를 가져오는 중 오류 발생:", error);
      });
  }, [id]);

  const handleAddReview = () => {
    if (newReview.trim() === "") return;

    const newReviewObj = {
      id: Date.now(),
      username: "내 댓글",
      date: new Date().toISOString().split("T")[0],
      content: newReview,
      isEditable: true,
    };

    setUserReviews([newReviewObj, ...userReviews]);
    setNewReview("");
    setIsWriting(false);
  };

  const handleDeleteReview = (id) => {
    setUserReviews(userReviews.filter((review) => review.id !== id));
  };

  const handleEditReview = (id) => {
    setEditingReviewId(id);
    const reviewToEdit = userReviews.find((review) => review.id === id);
    setEditingContent(reviewToEdit?.content || "");
  };

  const handleSaveEdit = () => {
    setUserReviews(
      userReviews.map((review) =>
        review.id === editingReviewId
          ? { ...review, content: editingContent }
          : review
      )
    );
    setEditingReviewId(null);
    setEditingContent("");
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <S.wrapper className="wrapper">
        <S.Card className="mainimage">
          <img src={`/image/${data.id}.jpg`} alt={data.title} />
        </S.Card>
        <S.imformation className="imformation">
          <h2>⭐⭐⭐⭐⭐</h2>
          <p>평점 : 5</p>
          <div className="detail">{data.detail}</div>
        </S.imformation>
      </S.wrapper>

      <S.mainpage className="mainpage">
        <div className="actor">
          <h1>연기자</h1>
          <S.CastContainer className="cast-container">
              {/* {cast.map((actor, index) => (
              <S.ActorCard key={index} className="actor">
                <img src={actor.img} alt={actor.name} />
                <p>{actor.name}</p>
                <p>{actor.role}</p>
              </S.ActorCard>
            ))} */}
          </S.CastContainer>
        </div>
        <div className="comment">
          <div className="review">
            <h1>리뷰</h1>
            <div className="reviewbutton">
              <button onClick={() => setIsWriting(!isWriting)}>리뷰 작성</button>
            </div>
          </div>

          {isWriting && (
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
              />
              <button onClick={handleAddReview}>작성 완료</button>
            </S.reviewinput>
          )}

          <div className="review-list">
            {userReviews.map((review) => (
              <S.reviewitem key={review.id} className="review-item">
                <div className="review-header">
                  <span>{review.username}</span>
                  <span>{review.date}</span>
                </div>

                {editingReviewId === review.id ? (
                  <div>
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>저장</button>
                    <button onClick={() => setEditingReviewId(null)}>취소</button>
                  </div>
                ) : (
                  <div className="review-content">
                    {review.content}
                    {review.isEditable && (
                      <div className="review-actions">
                        <button onClick={() => handleEditReview(review.id)}>수정</button>
                        <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
                      </div>
                    )}
                  </div>
                )}
              </S.reviewitem>
            ))}
          </div>
        </div>
      </S.mainpage>
    </div>
  );
};

export default MovieReview;
