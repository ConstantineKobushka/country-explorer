import { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import {
  Container,
  Heading,
  Section,
  SearchForm,
  Loader,
  CountryList,
} from 'components';

import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) {
      return;
    }
    const fetchCountries = async () => {
      try {
        setError('');
        setLoader(true);
        const result = await fetchByRegion(region);
        setCountries(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchCountries();
  }, [searchParams]);

  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {error && <Heading title={error} bottom />}
        {loader && <Loader />}
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

export default SearchCountry;
