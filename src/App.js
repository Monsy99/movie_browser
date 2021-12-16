import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviePeople from "./features/Content/MoviePeople";
import MoviesList from "./features/Content/MoviesList";
import {
  ButtonsGroup,
  Camera,
  Container,
  StyledInput,
  StyledItem,
  StyledList,
  StyledNav,
  StyledNavLink,
  StyledSearch,
  Title,
} from "./styled";

// Main-Olaf

function App() {
  return (
    <HashRouter>
      <StyledNav>
        <Container>
          <StyledList>
            <ButtonsGroup>
              <StyledItem>
                <Title>
                  {" "}
                  <Camera /> Movies Browser
                </Title>
              </StyledItem>
              <StyledItem>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
              </StyledItem>
              <StyledItem>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
              </StyledItem>
            </ButtonsGroup>
            <StyledItem>
              <StyledSearch>
                <StyledInput placeholder="🔍︎ Search for movies..." />
              </StyledSearch>
            </StyledItem>
          </StyledList>
        </Container>
      </StyledNav>
      <Switch>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/people">
          <MoviePeople />
        </Route>
        <Redirect to="/movies" />
      </Switch>
    </HashRouter>
  );
}

export default App;
