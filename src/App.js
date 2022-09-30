import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { motion, useScroll } from "framer-motion";

const Container = styled.div`
  height: fit-content;
  display: flex;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: rgba(240, 240, 240, 0.3);
  width: 380px;
  height: fit-content;
  color: rgb(231, 71, 60);
  min-width: fill-content;
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
  }
`;
const HeaderTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    padding-left: 30px;
    font-size: 3.2rem;
    font-weight: 500;
    text-transform: uppercase;
    transform: scaleX(1.3);
  }
`;

const H3 = styled.h3`
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 500;
`;

const P = styled.p`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 500;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.6);
    li {
      margin-right: 15px;
      border-bottom: 1px solid;
      padding-bottom: 5px;
      font-weight: 600;
    }
  }
`;
const SmallP = styled.p`
  margin-top: 20px;
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
`;
const Main = styled.div`
  width: calc(100% -400px);
  display: flex;
  background-color: rgb(231, 71, 60);
  flex-direction: column;
  margin-left: 5px;
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const NameBox = styled.div`
  width: calc(100% - 380px);
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-size: 1rem;
  color: white;
  padding: 0px 40px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(231, 71, 60);
  h3 {
    line-height: 30px;
  }
  a {
    color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid;
    padding-bottom: 2px;
  }
  @media screen and (max-width: 800px) {
    position: static;
    width: 100%;
    background-color: rgb(231, 71, 60);
  }
`;
const MovieBox = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  height: fit-content;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
  h1 {
    font-size: 2.6rem;
    font-weight: 700;
    transform: scaleY(1.2);
    margin-bottom: 10px;
    color: white;
  }
  p {
    color: white;
    max-width: fit-content;
    margin-bottom: 25px;
  }
  span {
    text-align: end;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    margin-top: 20px;
    a {
      text-align: end;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);
      padding-bottom: 10px;
    }
  }
`;
const PosterBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  image {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://img.fruugo.com/product/9/75/101193759_max.jpg");
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
const Description = styled.div`
  margin-top: 40px;
  color: white;
  line-height: 23px;
`;

function App() {
  const { scrollY } = useScroll();
  console.log(scrollY);
  return (
    <Container>
      <Header>
        <HeaderTitleBox>
          <span>Best</span>
          <span>Horror</span>
          <span>Scenes</span>
        </HeaderTitleBox>
        <H3>
          An ever growing collection featuring some of the best scenes in
          horror.
        </H3>
        <P>
          “Best Horror Scenes” is a collection of scenes I feel are some of the
          most affecting in horror. Some may be simple black cat scares, others
          may be more subdued or nuanced. Many come from films that aren't
          necessarily “horror” but have elements or threads of horror.
        </P>
        <nav>
          <Ul>
            <div>
              <li>Newsletter</li>
              <li> Suggest a Scene</li>
            </div>
            <div>
              <li>YouTube</li>
              <li>Twitter</li>
              <li>Contact</li>
              <li>RSS</li>
            </div>
            <div>
              <li>Letterboxd</li>
            </div>
          </Ul>
        </nav>
        <SmallP>
          Best Horror Scenes is a love letter to the Horror film genre by
          Brandon Durham. Most film clips contain major spoilers, and it is
          recommended you don’t watch the clip if you plan on seeing the film.
        </SmallP>
      </Header>
      <Main>
        <NameBox>
          <h3>
            Currently viewing <a>everything</a> sorted by <a>random</a>.
          </h3>
        </NameBox>
        <MovieBox>
          <h1>Orphan(2009)</h1>
          <p>Directed by Jaume Collet-Serra</p>

          <PosterBox>
            <image src="https://img.fruugo.com/product/9/75/101193759_max.jpg"></image>
          </PosterBox>
          <Description>
            Orphan is a little too slick for its own good. It looks and feels
            stylistically like so many other films, which in turn made it
            difficult for me to really recall anything specific about the film
            other than the final act. I did remember that I was surprised at how
            much I liked it, so I gave it a re-watch. It is much better than you
            might expect it to be. Isabelle Fuhrman, who plays the titular
            orphan, is phenomenal and really makes the film work. Vera Farmiga
            is great but I grew very tired of the frequent weeping sessions,
            which she tends to lean on a bit too much. Peter Sarsgaard is
            creepy, and not in a good way. More in the completely
            two-dimensional male ego way. There is a sort of weak backstory for
            the family that’s entirely unnecessary, not really used, and barely
            even touched on. I wouldn’t consider this my first choice if I were
            digging through the archives looking for something to watch, but it
            isn’t half bad for a back-up plan. If it wasn’t for Isabelle
            Fuhrman’s performance, I’d pass this one over completely. — B
          </Description>
          <span>My rating: 8/10</span>
          <div>
            <span>No Comments</span>
            <a>Leave a Comment</a>
          </div>
        </MovieBox>
        <NameBox>
          <h3>
            Currently viewing <a>everything</a> sorted by <a>random</a>.
          </h3>
        </NameBox>
        <MovieBox>
          <h1>Orphan(2009)</h1>
          <p>Directed by Jaume Collet-Serra</p>

          <PosterBox>
            <image src="https://img.fruugo.com/product/9/75/101193759_max.jpg"></image>
          </PosterBox>
          <Description>
            Orphan is a little too slick for its own good. It looks and feels
            stylistically like so many other films, which in turn made it
            difficult for me to really recall anything specific about the film
            other than the final act. I did remember that I was surprised at how
            much I liked it, so I gave it a re-watch. It is much better than you
            might expect it to be. Isabelle Fuhrman, who plays the titular
            orphan, is phenomenal and really makes the film work. Vera Farmiga
            is great but I grew very tired of the frequent weeping sessions,
            which she tends to lean on a bit too much. Peter Sarsgaard is
            creepy, and not in a good way. More in the completely
            two-dimensional male ego way. There is a sort of weak backstory for
            the family that’s entirely unnecessary, not really used, and barely
            even touched on. I wouldn’t consider this my first choice if I were
            digging through the archives looking for something to watch, but it
            isn’t half bad for a back-up plan. If it wasn’t for Isabelle
            Fuhrman’s performance, I’d pass this one over completely. — B
          </Description>
          <span>My rating: 8/10</span>
          <div>
            <span>No Comments</span>
            <a>Leave a Comment</a>
          </div>
        </MovieBox>
        <MovieBox>
          <h1>Orphan(2009)</h1>
          <p>Directed by Jaume Collet-Serra</p>

          <PosterBox>
            <image src="https://img.fruugo.com/product/9/75/101193759_max.jpg"></image>
          </PosterBox>
          <Description>
            Orphan is a little too slick for its own good. It looks and feels
            stylistically like so many other films, which in turn made it
            difficult for me to really recall anything specific about the film
            other than the final act. I did remember that I was surprised at how
            much I liked it, so I gave it a re-watch. It is much better than you
            might expect it to be. Isabelle Fuhrman, who plays the titular
            orphan, is phenomenal and really makes the film work. Vera Farmiga
            is great but I grew very tired of the frequent weeping sessions,
            which she tends to lean on a bit too much. Peter Sarsgaard is
            creepy, and not in a good way. More in the completely
            two-dimensional male ego way. There is a sort of weak backstory for
            the family that’s entirely unnecessary, not really used, and barely
            even touched on. I wouldn’t consider this my first choice if I were
            digging through the archives looking for something to watch, but it
            isn’t half bad for a back-up plan. If it wasn’t for Isabelle
            Fuhrman’s performance, I’d pass this one over completely. — B
          </Description>
          <span>My rating: 8/10</span>
          <div>
            <span>No Comments</span>
            <a>Leave a Comment</a>
          </div>
        </MovieBox>
      </Main>
    </Container>
  );
}

export default App;
