import { useState, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Header from 'components/Header';
import JobList from 'components/JobList';
import favicon from 'public/images/favicon.png';
import { getJobs } from 'lib/jobs';
import type { Job } from 'lib/jobs.interfaces';

interface HomeProps {
  data: Job[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const [jobs] = useState<Job[]>(data);
  const [filters, setFilters] = useState<string[]>([]);

  const handleAddFilter = useCallback((newFilter: string) => {
    setFilters((prevState) => {
      if (prevState.includes(newFilter)) return prevState;

      const currentValues = prevState.slice();
      currentValues.push(newFilter);
      return currentValues;
    });
  }, []);

  const handleRemoveFilter = useCallback(
    (oldFilter: string) => {
      setFilters(() => {
        return filters.filter((filter) => filter !== oldFilter);
      });
    },
    [filters]
  );

  const handleClearFilters = useCallback(() => {
    setFilters([]);
  }, []);

  const filteredJobs = useMemo(() => {
    if (!filters.length) return jobs;

    return jobs.filter((job) => {
      const technologies: string[] = [...job.tools, ...job.languages];
      return filters.every((value) => technologies.includes(value));
    });
  }, [filters, jobs]);

  return (
    <>
      <Head>
        <title>Static Jobs Listings</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className="scroll-smooth">
      <Header
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onRemoveAllFilters={handleClearFilters}
      />
      <main className="container mx-auto min-h-[calc(100vh_-_144px)] scroll-smooth">
        <div className="w-full px-4 py-8">
          <JobList
            jobs={filteredJobs}
            onClickTechnologyFilter={handleAddFilter}
          />
        </div>
      </main>
    </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jobs = await getJobs();

  return {
    props: { data: jobs },
  };
};

export default Home;
