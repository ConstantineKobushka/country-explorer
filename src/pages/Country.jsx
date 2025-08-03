import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import {
  Container,
  CountryInfo,
  GoBackBtn,
  Loader,
  Section,
  ErrorMessage,
} from 'components';

import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isError: false, errorMessage: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const { countryId } = useParams();

  useEffect(() => {
    const fetchcountryById = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(prevState => {
          return {
            ...prevState,
            errorMessage: error.response.data.status_message,
            isError: true,
          };
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchcountryById();
  }, [countryId]);

  const backUrl = location?.state.from || '/';
  const goBackHandler = () => navigate(backUrl);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <GoBackBtn goBackHandler={goBackHandler} />
        {error.isError ? (
          <ErrorMessage>{error.errorMessage}</ErrorMessage>
        ) : (
          <CountryInfo countryData={country} />
        )}
      </Container>
    </Section>
  );
};

export default Country;
