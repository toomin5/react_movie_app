# Movie App 2023

React Js (2023 Update)

리액트와 영화정보API를 이용한 영화 웹서비스
1.home에 React.component를 상속받아 render를 사용해 screen에 표시할 내용을 입력한다.<br> 2.평점이 8.5 이상인 최신순으로 정렬한 정화정보를 받아올 수 있는 api를 가져온다.<br>
js로 구현된 비동기통신라이브러리axios를 사용하여 parsing이나 stringify를 쉽게 도와준다.<br>

    class Home extends React.Component {
    state = {
    isLoading: true,
    movies: [],
    };
    getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
    //render를 하면 호출되는 lifecycle method
    this.getMovies(); //component가 mount되면 getMovies를 호출
    }

3.loading을 표시하는 state를 작성하고 (state는 값이 변할수있음) setState를 호출해 변화된 부분을 업데이트한다.<br>
loading을 true로 설정해놓고 api정보 다운이 끝나면 isloading을 false해준다. 이후 render에서 삼항연산자로 통해<br>
movie div를 보여준다.

    render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">

4.무비

    {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
