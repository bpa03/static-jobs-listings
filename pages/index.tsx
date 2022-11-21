import Header from 'components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="w-8/12 mx-auto px-4">
          <h1 className="text-3xl text-primary text-center">
            Static Jobs Listings
          </h1>
        </div>
      </div>
    </>
  );
}
