import { Link } from 'react-router-dom';

import { Grid, GridItem } from 'components';

export const CountryList = ({ countries, state }) => {
  return (
    <Grid>
      {countries.map(country => {
        return (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`} state={state}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
