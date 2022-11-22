import { GetStaticProps, NextPage } from 'next';
import Header from 'components/Header';
import JobList from 'components/JobList';
import { getJobs } from 'lib/jobs';
import type { Job } from 'lib/jobs.interfaces';

interface HomeProps {
  jobs: Job[]
}

const Home: NextPage<HomeProps> = ({ jobs }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto min-h-[calc(100vh_-_144px)] bg-light-200">
        <div className="w-full px-4 py-8">
          <JobList jobs={jobs} />
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
