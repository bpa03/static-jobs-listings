import { useState, useCallback } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Header from 'components/Header';
import JobList from 'components/JobList';
import { getJobs } from 'lib/jobs';
import type { Job } from 'lib/jobs.interfaces';

interface HomeProps {
  data: Job[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [jobs] = useState<Job[]>(data);
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = useCallback((newFilter: string) => {
    setFilters((prevState) => {
      if (prevState.includes(newFilter)) return prevState;

      const currentValues = prevState.slice();
      currentValues.push(newFilter);
      return currentValues;
    });
  }, []);

  return (
    <div>
      <Header filters={filters} />
      <main className="container mx-auto min-h-[calc(100vh_-_144px)]">
        <div className="w-full px-4 py-8">
          <JobList jobs={jobs} onClickTechnologyFilter={addFilter} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs();

  return {
    props: { data: jobs },
  };
};

export default Home;
