import { GetStaticProps, NextPage } from 'next';
import Header from 'components/Header';
import { getJobs } from 'lib/jobs';
import type { Job } from 'lib/jobs.interfaces';

interface HomeProps {
  jobs: Job[]
}

const Home: NextPage<HomeProps> = ({ jobs }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="w-8/12 mx-auto px-4">
          <h1 className="text-3xl text-primary text-center">
            Static Jobs Listings
          </h1>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs();

  return {
    props: { jobs },
  }
};

export default Home;
