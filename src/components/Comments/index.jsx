import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments()

if (isLoading){
  return <div>ローディング中</div>;
}

if (error){
  return <div>{error.message}</div>;
}

if (isEmpty){
  return <div>データが空です</div>;
}

  return (  
    <ol>
      {data.map((comments) => {
      return　<li key={comments.id}>
        <Link href={`/comments/${comments.id}`}>
          <a>{comments.body}</a>
        </Link>
      </li>
    })}
    </ol>
  );
};