import React, { memo } from "react";

const PostItem = ({ post }) => {
  console.log("renderizando item");
  return (
    <li>
      <div>
        <strong>{post.title}</strong>
      </div>
      <span>{post.body}</span>
    </li>
  );
};

// quando o componente não recebe propriedades
// ou quando o estado associado a ele no component pai
// não é atualizado, o componente não precisa ser renderizado novamente
export default memo(PostItem);
