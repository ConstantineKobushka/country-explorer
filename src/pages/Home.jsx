import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, CountryList, Heading, Loader, Section } from 'components';

import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setError('');
        setIsLoading(true);
        const result = await getCountries();
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {isLoading && <Loader />}
        <CountryList
          countries={countries}
          state={{
            from: location,
          }}
        />
      </Container>
    </Section>
  );
};

export default Home;
