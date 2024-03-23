export function generateStaticParams() {
  return [{ id: "test", searchParams: {} }];
}

export default function SomePage({ params }) {
  return (
    <>
      <h1>endpoint!</h1>
      <p>{JSON.stringify(params)}</p>
    </>
  );
}
