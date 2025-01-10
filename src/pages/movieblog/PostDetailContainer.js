import React from 'react';
import PostDetail from './PostDetail'; // 게시글 상세 컴포넌트 import

const PostDetailContainer = ({ posts }) => {
  return (
    <div>
      <PostDetail posts={posts} />
    </div>
  );
};

export default PostDetailContainer;