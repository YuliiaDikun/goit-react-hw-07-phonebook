import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { fetchTasks } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Container } from './Container/Container.styled';
import { Title } from './Title/Title';
import { LoginForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { InputSearch } from './InputSearch/InputSearch';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(store => store.contacts);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title />
        <LoginForm />

        <InputSearch />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <ContactsList />
      </Container>

      <GlobalStyleComponent />
    </ThemeProvider>
  );
};
