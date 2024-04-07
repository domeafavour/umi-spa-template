
import { useHelloQuery } from './useHelloQuery';

export default function HomePage() {
  const { data, isLoading } = useHelloQuery();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no data.</div>;
  }
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}